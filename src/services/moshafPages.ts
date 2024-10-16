import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

export const getAreaTags = (verses: []) => {
  return verses
    .map(
      (verse: {
        img_coords: string;
        verse_number: number;
        text_imlaei_simple: string;
        verse_coords: string;
      }) => `
      <area shape="rect" coords="${verse.verse_coords}" alt="Verse ${
        verse.verse_number
      }" data-verse='${JSON.stringify(verse)}' />
      `
    )
    .join(""); // Join all the areas into a single string
};

export const setUrisWithChunks = async ({
  limit,
  start,
}: {
  limit: number;
  start: number;
}) => {
  const downloadedPagesData = await AsyncStorage.getItem(
    "downloadedQuranPages"
  );
  let chunksUris: string[] = [];
  if (downloadedPagesData) {
    const downloadedPages = JSON.parse(downloadedPagesData);

    for (let i = start; i < start + limit; i++) {
      const imagePath = `${FileSystem.documentDirectory}quran-page-${downloadedPages[i]}.jpg`;
      const fileInfo = await FileSystem.getInfoAsync(imagePath);
      if (fileInfo.exists) {
        chunksUris.push(imagePath); // Store the content URI instead of file path

        // Load verses from file system
        const versesPath = `${FileSystem.documentDirectory}quran-page-${downloadedPages[i]}-verses.json`;
      }
    }
  }
  return { chunksUris };
};

export const fetchAndDownloadImages = async ({
  setIsLoadingImages,
  setLocalImageUris,
  setProgressImages,
  TOTAL_PAGES,
}: {
  TOTAL_PAGES: number;
  setIsLoadingImages: (isLoaded: boolean) => void;
  setProgressImages: (currentNum: number) => void;
  setLocalImageUris: (arr: any[]) => void;
}) => {
  setIsLoadingImages(true);

  try {
    // Load the last downloaded page number from AsyncStorage

    const lastDownloadedPage = await AsyncStorage.getItem("lastDownloadedPage");
    const startPage = lastDownloadedPage ? parseInt(lastDownloadedPage) + 1 : 1;
    let downloadedPages = [];
    let imageUris: string[] = [];
    let currentProgress = 0;

    // Loop over all page numbers starting from the last downloaded page
    for (let pageNumber = startPage; pageNumber <= TOTAL_PAGES; pageNumber++) {
      const apiUrl = `https://quran.moaddi.org/hafs/all_apis/img_coords?page_number=${pageNumber}`;

      // Fetch data from API
      const response = await fetch(apiUrl);
      const pageData = await response.json();

      if (pageData.length > 0) {
        const imgUrl = pageData[0].img_url;

        // Download the image
        const filePath = `${FileSystem.documentDirectory}quran-page-${pageNumber}.jpg`;
        await FileSystem.downloadAsync(imgUrl, filePath);

        imageUris.push(filePath); // Store the content URI instead of file path

        // Keep track of downloaded pages
        downloadedPages.push(pageNumber);

        // Update last downloaded page in AsyncStorage
        await AsyncStorage.setItem("lastDownloadedPage", String(pageNumber));

        // Update progress (percentage)
        currentProgress = pageNumber / TOTAL_PAGES;
        setProgressImages(currentProgress);
      }
    }

    // Save downloaded pages metadata to AsyncStorage
    await AsyncStorage.setItem(
      "downloadedQuranPages",
      JSON.stringify(downloadedPages)
    );

    const { chunksUris } = await setUrisWithChunks({
      limit: 604,
      start: 0,
    });
    // Update the state with image URIs and verses
    setLocalImageUris([...chunksUris.reverse()]);
    setIsLoadingImages(false);

    // Clear last downloaded page after completion
    await AsyncStorage.removeItem("lastDownloadedPage");
  } catch (error) {
    console.error("Error fetching or downloading data: ", error);
    setIsLoadingImages(false);
  }
};

export const checkForDownloadedImages = async ({
  setIsLoadingImages,
  setLocalImageUris,
  setProgressImages,
  TOTAL_PAGES,
}: {
  TOTAL_PAGES: number;
  setIsLoadingImages: (isLoaded: boolean) => void;
  setProgressImages: (currentNum: number) => void;
  setLocalImageUris: (arr: any[]) => void;
}) => {
  setIsLoadingImages(true);

  try {
    const downloadedPagesData = await AsyncStorage.getItem(
      "downloadedQuranPages"
    );
    if (downloadedPagesData) {
      const downloadedPages = JSON.parse(downloadedPagesData);
      if (downloadedPages.length < 604) {
        console.log("working from here");

        fetchAndDownloadImages({
          setProgressImages,
          setIsLoadingImages,
          TOTAL_PAGES,
          setLocalImageUris,
        });
        return;
      }

      const { chunksUris } = await setUrisWithChunks({
        limit: 604,
        start: 0,
      });

      setLocalImageUris([...chunksUris.reverse()]);
      setIsLoadingImages(false);
    } else {
      // If no images found in AsyncStorage, fetch and download them
      fetchAndDownloadImages({
        setProgressImages,
        setIsLoadingImages,
        TOTAL_PAGES,
        setLocalImageUris,
      });
    }
  } catch (error) {
    console.error("Error checking for downloaded images: ", error);
    setIsLoadingImages(false);
  }
};

import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Helper to set the last downloaded page
const setLastDownloadedPage = async (pageNumber: number) => {
  await AsyncStorage.setItem("lastDownloadedAudio", pageNumber.toString());
};

// Helper to get the last downloaded page
const getLastDownloadedPage = async () => {
  const lastDownloaded = await AsyncStorage.getItem("lastDownloadedAudio");
  return lastDownloaded ? parseInt(lastDownloaded) : null;
};

export const fetchAndDownloadAudioForAllPages = async ({
  setIsLoadingAudios,
  TOTAL_PAGES,
  startPage,
}: {
  TOTAL_PAGES: number;
  setIsLoadingAudios: (isLoaded: boolean) => void;
  startPage: number;
}) => {
  setIsLoadingAudios(true);

  try {
    // Start downloading from the last downloaded page or startPage
    for (
      let pageNumber = startPage;
      pageNumber < startPage + TOTAL_PAGES;
      pageNumber++
    ) {
      const apiUrl = `https://quran.moaddi.org/hafs/all_apis/listen_level_1?page_number=${pageNumber}`;
      const response = await fetch(apiUrl);
      const wordsData = await response.json();

      for (let i = 0; i < wordsData.length; i++) {
        const word = wordsData[i];
        const audioUrl = word.audio_url
          ? `https://audio.qurancdn.com/${word.audio_url}`
          : null;

        // Download the audio file if it exists
        if (audioUrl) {
          const audioPath = `${FileSystem.documentDirectory}/w${word.id}-v${word.verse_id}-p${word.page_number}.mp3`;
          const fileInfo = await FileSystem.getInfoAsync(audioPath);

          if (!fileInfo.exists) {
            // If audio doesn't exist, download and save it
            await FileSystem.downloadAsync(audioUrl, audioPath);
            console.log(`Downloaded audio for word ${word.id}: ${audioPath}`);
          } else {
            console.log(
              `Audio already exists for word ${word.id}: ${audioPath}`
            );
          }
        }
      }

      // Save the current page as the last successfully downloaded page
      await setLastDownloadedPage(pageNumber);
    }

    setIsLoadingAudios(false);
    await AsyncStorage.removeItem("lastDownloadedAudio"); // Clear if resumption is not needed
    console.log("All audio files have been downloaded successfully.");
  } catch (error) {
    console.error("Error fetching or downloading audio data: ", error);
    setIsLoadingAudios(false);
  }
};

// Function to check for existing downloaded audios
export const checkForDownloadedAudio = async ({
  setIsLoadingAudios,
  TOTAL_PAGES,
  startPage,
}: {
  TOTAL_PAGES: number;
  setIsLoadingAudios: (isLoaded: boolean) => void;
  startPage: number;
}) => {
  setIsLoadingAudios(true);

  try {
    const lastDownloadedPage = await getLastDownloadedPage();

    // If lastDownloadedPage exists, skip fetching and resume from there
    if (lastDownloadedPage) {
      console.log(`Resuming audio download from page ${lastDownloadedPage}`);
      await fetchAndDownloadAudioForAllPages({
        setIsLoadingAudios,
        TOTAL_PAGES,
        startPage: lastDownloadedPage,
      });
    } else {
      // No previously downloaded audio found, start fresh
      console.log(
        "No downloaded audio found. Starting download from the first page."
      );
      await fetchAndDownloadAudioForAllPages({
        setIsLoadingAudios,
        TOTAL_PAGES,
        startPage,
      });
    }
  } catch (error) {
    console.error("Error checking for downloaded audio: ", error);
    setIsLoadingAudios(false);
  }
};

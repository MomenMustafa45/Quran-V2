import * as FileSystem from "expo-file-system";
import Toast from "react-native-toast-message";

const TOTAL_PAGES = 604; // Total number of Quran pages
const DIRECTORY_PATH = `${FileSystem.documentDirectory}quran_pages/`; // Directory to store pages

export const fetchAndStoreQuranPages = async (setProgress: any) => {
  try {
    // Check if the directory exists, if not, create it
    const directoryInfo = await FileSystem.getInfoAsync(DIRECTORY_PATH);
    if (!directoryInfo.exists) {
      await FileSystem.makeDirectoryAsync(DIRECTORY_PATH);
    }

    const pagePaths = [];

    for (let page = 1; page <= TOTAL_PAGES; page++) {
      const filePath = `${DIRECTORY_PATH}page_${page}.json`;

      // Check if the page data already exists in the filesystem
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      if (!fileInfo.exists) {
        // If the file doesn't exist, fetch and save the page data
        const pageData = await fetchQuranPageData(page);

        if (pageData) {
          await FileSystem.writeAsStringAsync(
            filePath,
            JSON.stringify(pageData)
          );
          console.log(`Saved data for page ${page} at ${filePath}`);
        } else {
          console.error(`Failed to fetch data for page ${page}`);
        }
      }

      // Push the file path to the array
      pagePaths.push(filePath);

      setProgress(((page / TOTAL_PAGES) * 100).toFixed(1)); // Track progress percentage
    }

    return pagePaths; // Return array of file paths
  } catch (error) {
    console.error("Error fetching and storing Quran pages:", error);
    throw error;
  }
};

const fetchQuranPageData = async (page: number) => {
  try {
    const response = await fetch(
      `https://quran.moaddi.org/hafs/all_apis/listen_level_1?page_number=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(`Error fetching data for page ${page}:`, error);
    Toast.show({
      type: "error",
      text1: `Error fetching data for page ${page}: check your network connection`,
      position: "bottom",
    });
    return null;
  }
};

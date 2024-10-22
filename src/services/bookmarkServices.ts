import AsyncStorage from "@react-native-async-storage/async-storage";

const formatDateTime = () => {
  const now = new Date();

  // Get the day, month, year
  const day = now.getDate().toString().padStart(2, "0"); // Ensure 2-digit day
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const year = now.getFullYear();

  // Get the hours and minutes
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Ensure 2-digit minutes

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12

  // Construct the formatted string
  return `${day}/${month}/${year} - ${hours}:${minutes}${ampm}`;
};

export const saveBookmark = async ({
  pageNumber,
  setBookmarks,
}: {
  pageNumber: number;
  setBookmarks?: (arr: []) => void;
}) => {
  try {
    // Retrieve current bookmarks from AsyncStorage
    const currentBookmarks = await AsyncStorage.getItem("bookmarks");
    let updatedBookmarks = currentBookmarks ? JSON.parse(currentBookmarks) : [];

    // Check if the bookmark already exists
    const bookmarkIndex = updatedBookmarks.findIndex(
      (bookmark: { pageNumber: number }) => bookmark.pageNumber === pageNumber
    );

    if (bookmarkIndex !== -1) {
      // Bookmark exists, so remove it
      updatedBookmarks.splice(bookmarkIndex, 1);
    } else {
      // Bookmark doesn't exist, so add it
      const newBookmark = {
        pageNumber,
        addedAt: formatDateTime(), // Use the custom date formatting function
      };
      updatedBookmarks = [...updatedBookmarks, newBookmark];
    }

    // Update AsyncStorage and state with the updated bookmarks
    await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    if (setBookmarks) {
      setBookmarks(updatedBookmarks); // Update state
    }
    console.log("Bookmark toggled with timestamp.");
  } catch (error) {
    console.error("Error toggling bookmark", error);
  }
};

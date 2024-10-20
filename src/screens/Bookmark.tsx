import React, { useCallback, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import TabsNavigation from "../components/UI/TabsNavigation/TabsNavigation";
import BookmarkItem from "../components/UI/BookmarkItem/BookmarkItem";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  // Function to fetch bookmarks from AsyncStorage
  const fetchBookmarks = async () => {
    const storedBookmarks = await AsyncStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    } else {
      setBookmarks([]); // Set an empty array if no bookmarks exist
    }
  };

  // Use useFocusEffect to refresh bookmarks when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchBookmarks(); // Fetch bookmarks every time the screen gains focus
    }, [])
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={bookmarks}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <BookmarkItem item={item} />}
          ListEmptyComponent={<Text>No bookmarks found</Text>} // Display a message if no bookmarks
        />
      </View>
      <TabsNavigation setModalSearch={() => {}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});

export default Bookmark;

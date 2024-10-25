import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationParamList } from "../../../navigation/Stack";
import TextReg from "../Texts/TextReg";
import { AntDesign } from "@expo/vector-icons";

type BookmarkItem = {
  item: { pageNumber: number; addedAt: string };
  deleteBookmark: (item: { pageNumber: number; addedAt: string }) => void;
};

const BookmarkItem = ({ item, deleteBookmark }: BookmarkItem) => {
  const navigate = useNavigation<RootNavigationParamList>();

  const handleNavigateToPage = (pageNumber: number) => {
    navigate.navigate("Home", { pageNumber });
  };

  return (
    <TouchableOpacity
      onPress={() => handleNavigateToPage(604 - item.pageNumber)}
      className="flex-row justify-between items-center"
      style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <TouchableOpacity onPress={() => deleteBookmark(item)}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
      <View>
        <View style={styles.bookmarkItem}>
          <Text style={styles.bookmarkText}>
            رقم الصفحة: {604 - item.pageNumber}
          </Text>
        </View>
        <View>
          <Text>التوقيت: {item?.addedAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookmarkItem;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  bookmarkItem: {
    paddingVertical: 16,
  },
  bookmarkText: {
    fontSize: 16,
  },
});

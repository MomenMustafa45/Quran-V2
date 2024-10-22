import { memo } from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";

type VerseTextProps = {
  item: QuranVerse;
  pageNumber: number;
  listenHandler: (verse: QuranVerse) => void;
  color: string;
  bgColor: string;
};

const VerseText = memo(
  ({ item, pageNumber, listenHandler, color, bgColor }: VerseTextProps) => (
    <TouchableOpacity
      onPress={() => {
        listenHandler(item);
      }}
      style={{ position: "relative", zIndex: 1000 }}
    >
      <Text
        style={[
          styles.customText,
          { fontFamily: `QCF-${pageNumber}`, color, backgroundColor: bgColor },
        ]}
      >
        {item.code_v2}
      </Text>
    </TouchableOpacity>
  )
);

export default VerseText;

const styles = StyleSheet.create({
  customText: {
    fontSize: 12,
    color: "#000",
    padding: 1,
    backgroundColor: "transparent",
  },
});

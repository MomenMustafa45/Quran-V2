import { memo } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";

type VerseTextProps = {
  item: QuranVerse;
  pageNumber: number;
  listenHandler: (verse: QuranVerse) => void;
  color: string;
  bgColor: string;
  fontSize: number;
};

const VerseText = memo(
  ({
    item,
    pageNumber,
    listenHandler,
    color,
    bgColor,
    fontSize,
  }: VerseTextProps) => (
    <TouchableOpacity
      onPress={() => {
        listenHandler(item);
      }}
      style={{ position: "relative", zIndex: 1000 }}
    >
      <Text
        style={[
          styles.customText,
          {
            fontFamily: `QCF-${pageNumber}`,
            color,
            backgroundColor: bgColor,
            fontSize,
          },
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
    flex: 1,
  },
});

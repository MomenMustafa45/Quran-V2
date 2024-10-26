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
  lineHeight: number;
};

const VerseText = memo(
  ({
    item,
    pageNumber,
    listenHandler,
    color,
    bgColor,
    fontSize,
    lineHeight,
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
            position: "relative",
            fontFamily: `QCF-${pageNumber}`,
            color,
            backgroundColor: bgColor,
            fontSize,
            lineHeight,
            zIndex: 20000,
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
    display: "flex",
    flex: 1,
  },
});

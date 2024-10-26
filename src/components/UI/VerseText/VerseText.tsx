import { memo } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
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
    >
      <Text
        style={[
          styles.customText,
          {
            fontFamily: `QCF-${pageNumber}`,
            color,
            backgroundColor: bgColor,
            fontSize,
            lineHeight,
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
  customText: {},
});

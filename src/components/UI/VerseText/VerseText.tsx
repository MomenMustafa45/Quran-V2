import { memo } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";
import { View } from "react-native";

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

import { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
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
      style={styles.button}
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
  button: {
    alignSelf: "flex-start", // This makes the button width fit its content.
  },
  customText: {
    alignSelf: "flex-start", // This makes the text width fit its content.
  },
});

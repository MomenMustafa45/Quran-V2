import { memo } from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";

type VerseTextProps = {
  item: QuranVerse;
  pageNumber: number;
  listenHandler: (verse: QuranVerse) => void;
  backgroundColor: string;
};

const VerseText = memo(
  ({ item, pageNumber, listenHandler, backgroundColor }: VerseTextProps) => (
    <TouchableOpacity
      onPress={() => {
        listenHandler(item);
      }}
    >
      <Text
        style={[
          styles.customText,
          { fontFamily: `QCF-${pageNumber}`, backgroundColor },
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
    fontSize: 14,
    color: "#000",
    padding: 1,
  },
});

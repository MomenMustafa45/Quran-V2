import { memo } from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";

type VerseTextProps = {
  item: QuranVerse;
  pageNumber: number;
};

const VerseText = memo(({ item, pageNumber }: VerseTextProps) => (
  <TouchableOpacity onPress={() => console.log(item)}>
    <Text style={[styles.customText, { fontFamily: `QCF-${pageNumber}` }]}>
      {item.code_v2}
    </Text>
  </TouchableOpacity>
));

export default VerseText;

const styles = StyleSheet.create({
  customText: {
    fontSize: 18,
    color: "#000",
    padding: 1,
  },
});

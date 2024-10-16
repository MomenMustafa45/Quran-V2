import React, { useEffect, useState, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";
import useFonts from "../../../hooks/useFonts";
import VerseText from "../VerseText/VerseText";

const PageQuran = ({
  dataPage,
  pageNumber,
}: {
  dataPage: QuranVerse[];
  pageNumber: number;
}) => {
  const lineNumbers = Array.from({ length: 15 }, (_, index) => index + 1);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await useFonts([`QCF-${pageNumber}`]);
      setFontsLoaded(true);
    };

    loadFonts();
  }, [pageNumber]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {lineNumbers.map((lineNumber) => {
        // Filter once per line number for better performance
        const verses = dataPage.filter(
          (item) => item.line_number === lineNumber
        );

        return (
          <View key={lineNumber} style={styles.lineContainer}>
            {verses.map((item) => (
              <VerseText key={item.id} item={item} pageNumber={pageNumber} />
            ))}
          </View>
        );
      })}
    </View>
  );
};

export default PageQuran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  lineContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
  },
  customText: {
    fontSize: 17,
    color: "#000",
    padding: 1,
  },
});

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
import AsyncStorage from "@react-native-async-storage/async-storage";

const PageQuran = ({
  dataPage,
  pageNumber,
  listenHandler,
}: {
  dataPage: QuranVerse[];
  pageNumber: number;
  listenHandler: (
    item: QuranVerse,
    verse: QuranVerse[],
    pageNumber: number
  ) => void;
}) => {
  const lineNumbers = Array.from({ length: 15 }, (_, index) => index + 1);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [soundsPlayingArr, setSoundsPlayingArr] = useState<QuranVerse[]>([]);

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

  const handleListen = async (itemVerse: QuranVerse) => {
    const levelNumber = await AsyncStorage.getItem("levelSound");

    let soundArr: QuranVerse[] = [];

    // Logic for different levels
    if (levelNumber === "1") {
      // Level 1: Only the pressed object's path
      soundArr = dataPage.filter(
        (item) => item.id === itemVerse.id && item.audio_url
      );
    } else if (levelNumber === "2") {
      soundArr = dataPage.filter(
        (item) =>
          (item.id === itemVerse.id || item.id === itemVerse.id + 1) &&
          item.audio_url
      );
    } else if (levelNumber === "3") {
      // Level 3: All words that share the same verse_id
      soundArr = dataPage.filter(
        (item) => item.verse_id === itemVerse.verse_id && item.audio_url
      );
    }

    setSoundsPlayingArr([...soundArr]);

    await listenHandler(itemVerse, dataPage, pageNumber);

    setSoundsPlayingArr([]);
  };

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
              <VerseText
                key={item.id}
                item={item}
                pageNumber={pageNumber}
                listenHandler={handleListen}
                backgroundColor={
                  soundsPlayingArr.includes(item) ? "yellow" : "white"
                }
              />
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
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  customText: {
    fontSize: 17,
    color: "#000",
    padding: 1,
  },
});

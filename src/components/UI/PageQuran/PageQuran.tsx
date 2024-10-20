import React, { useEffect, useState, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { QuranVerse } from "../../../lib/types/quranWordType";
import useFonts from "../../../hooks/useFonts";
import VerseText from "../VerseText/VerseText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { surahsData } from "../IndexModal/utils/surahData";

const LINES_PER_PAGE = 15;
const heightDimension = Dimensions.get("window").height;

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
  const lineNumbers = Array.from(
    { length: LINES_PER_PAGE },
    (_, index) => index + 1
  );
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

  // if (pageNumber != 1) {
  //   return null;
  // }
  let output = [];
  for (let index = 0; index < LINES_PER_PAGE; index++) {
    const currentLine = dataPage.filter(
      (item) => item.line_number === index + 1
    );

    // console.log(index + 1, currentLine[0]);

    const forceEmptyLines =
      (pageNumber == 1 && index + 1 > 8) || (pageNumber == 2 && index + 1 > 7);
    if (forceEmptyLines) {
      output.push([{}]);
    } else if (currentLine.length == 1 && !currentLine[0].verse_id) {
      output.push([
        { header: true, ...surahsData[currentLine[0].chapter_id - 1] },
      ]);

      // const nextLine = dataPage.filter(
      //   (item) => item.line_number === index + 2
      // );

      // if (nextLine.length == 0 && index + 1 != LINES_PER_PAGE) {
      //   const chapter = surahsData.filter(
      //     (data) => data.id == currentLine[0].chapter_id
      //   )[0];
      //   if (chapter?.pre_bismillah) {
      //     output.push([{ bismillah: true }]);
      //   }
      // }
    } else if (currentLine.length == 0) {
      output.push([{ bismillah: true }]);
    } else {
      output.push(currentLine);
      // output.push([{ line: true }]);
    }
  }

  // console.log(pageNumber);

  // console.log(output);
  // console.log(output.length);

  // return null;
  return (
    <View style={styles.container}>
      {output.map((line, index) => {
        return (
          <View key={index} style={styles.lineContainer}>
            {line[0].header ? (
              <Text
                style={{ backgroundColor: "red", fontFamily: "surahNames" }}
              >
                {line[0].name_code}
              </Text>
            ) : line[0].bismillah ? (
              <Text>bismillah</Text>
            ) : (
              line.map((item, index) => (
                <VerseText
                  key={index}
                  item={item}
                  pageNumber={pageNumber}
                  listenHandler={handleListen}
                  backgroundColor={
                    soundsPlayingArr.includes(item) ? "yellow" : "white"
                  }
                />
              ))
            )}
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
    height: (heightDimension - 56 - 56 - 20) / 15,
    alignItems: "center",

    borderBottomWidth: 1,
  },
  customText: {
    fontSize: 17,
    color: "#000",
    padding: 1,
  },
});

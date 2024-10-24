import React, { useEffect, useState } from "react";
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

type PageQuranProps = {
  dataPage: QuranVerse[];
  pageNumber: number;
  listenHandler: (
    item: QuranVerse,
    verse: QuranVerse[],
    pageNumber: number
  ) => void;
};

const PageQuran = ({ dataPage, pageNumber, listenHandler }: PageQuranProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [soundsPlayingArr, setSoundsPlayingArr] = useState<QuranVerse[]>([]);

  const [textColor, setTextColor] = useState<string>("");
  const [textBgColor, setTextBgColor] = useState<string>("");

  // Function to fetch colors from AsyncStorage
  const fetchColorTextFromStorage = async () => {
    const storedTextColor = await AsyncStorage.getItem("text-color");
    if (storedTextColor) setTextColor(storedTextColor);
  };

  const fetchBgTextFromStorage = async () => {
    const storedBgColor = await AsyncStorage.getItem("text-bg");
    if (storedBgColor) setTextBgColor(storedBgColor);
  };

  useEffect(() => {
    const loadFonts = async () => {
      await useFonts([`QCF-${pageNumber}`]);
      setFontsLoaded(true);
    };
    fetchColorTextFromStorage();
    fetchBgTextFromStorage();
    loadFonts();
  }, [pageNumber, fetchColorTextFromStorage, fetchBgTextFromStorage]);

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
      {output.map((line: any, index) => {
        return (
          <View
            key={index}
            style={[
              styles.lineContainer,
              {
                justifyContent:
                  pageNumber == 1 || pageNumber == 2
                    ? "center"
                    : "space-between",
              },
            ]}
          >
            {line[0].header ? (
              <View
                style={{
                  position: "relative",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "surahNames",
                    fontSize: 22,
                  }}
                >
                  ò
                </Text>
                <Text
                  style={{
                    fontFamily: "surahNames",
                    fontSize: 17,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "25%",
                  }}
                >
                  {line[0].name_code} \
                </Text>
              </View>
            ) : line[0].bismillah ? (
              <Text
                style={{
                  fontFamily: "surahNames",
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                ó
              </Text>
            ) : (
              line.map((item: any, index: number) => (
                <VerseText
                  key={index}
                  item={item}
                  pageNumber={pageNumber}
                  listenHandler={handleListen}
                  color={soundsPlayingArr.includes(item) ? textColor : "black"}
                  bgColor={
                    soundsPlayingArr.includes(item)
                      ? textBgColor
                      : "transparent"
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
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    zIndex: 1000,
  },
  lineContainer: {
    position: "relative",
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
    height: (heightDimension - 56 - 56 - 30) / 15,
    alignItems: "center",
    zIndex: 100,
    paddingHorizontal: 35,
  },
  customText: {
    fontSize: 17,
    color: "#000",
    padding: 1,
  },
});

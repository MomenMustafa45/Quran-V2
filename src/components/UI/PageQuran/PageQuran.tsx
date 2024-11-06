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
import { surahsData } from "../../../lib/utils/surahData";
import { useAppSelector } from "../../../hooks/reduxHooks";

const LINES_PER_PAGE = 15;
// const heightDimension = Dimensions.get("window").height;
const widthDimension = Dimensions.get("window").width;
const { height: windowHeight } = Dimensions.get("window");

// Calculate font size and line height based on viewport height
const calculateFontSize = () => {
  return widthDimension * 0.06; // 3.2% of viewport height
};

const calculateLineHeight = () => {
  return windowHeight * 0.061; // 6.1% of viewport height
};

type PageQuranProps = {
  dataPage: QuranVerse[];
  pageNumber: number;
  listenHandler: (
    item: QuranVerse,
    verse: QuranVerse[],
    pageNumber: number,
    levelNumber: string
  ) => void;
};

const PageQuran = ({ dataPage, pageNumber, listenHandler }: PageQuranProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [soundsPlayingArr, setSoundsPlayingArr] = useState<QuranVerse[]>([]);
  const textColor = useAppSelector((state) => state.textColor.color);
  const textBgColor = useAppSelector((state) => state.textBgColor.color);

  const fontSize = calculateFontSize(); // Calculate font size
  const lineHeight = calculateLineHeight(); // Calculate line height

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
    console.log(soundsPlayingArr, "from here");

    await listenHandler(
      itemVerse,
      dataPage,
      pageNumber,
      levelNumber ? levelNumber : "1"
    );

    setSoundsPlayingArr([]);
  };

  let output = [];
  for (let index = 0; index < LINES_PER_PAGE; index++) {
    const currentLine = dataPage.filter(
      (item) => item.line_number === index + 1
    );

    const forceEmptyLines =
      (pageNumber == 1 && index + 1 > 8) || (pageNumber == 2 && index + 1 > 7);
    if (forceEmptyLines) {
      output.push([{}]);
    } else if (currentLine.length == 1 && !currentLine[0].verse_id) {
      output.push([
        { header: true, ...surahsData[currentLine[0].chapter_id - 1] },
      ]);
    } else if (currentLine.length == 0) {
      output.push([{ bismillah: true }]);
    } else {
      output.push(currentLine);
      // output.push([{ line: true }]);
    }
  }

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
                  pageNumber == 1 || pageNumber == 2 ? "center" : "center",
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
                  fontSize={fontSize}
                  lineHeight={lineHeight}
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
    display: "flex",
    position: "relative",
    flexDirection: "row-reverse",
    width: "100%",
    height: (windowHeight - 40 - 56 - 30) / 15,
    alignItems: "center",
    zIndex: 100,
    paddingHorizontal: 10,
  },
});

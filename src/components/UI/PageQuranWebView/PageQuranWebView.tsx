import React, { useState, useRef, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QuranVerse } from "../../../lib/types/quranWordType";
import { surahsData } from "../../../lib/utils/surahData";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { loadBase64Font, loadHeaderFont } from "../../../lib/utils/getFontText";

const LINES_PER_PAGE = 15;
const { height: windowHeight, width: widthDimension } =
  Dimensions.get("window");

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

const PageQuranWebView = ({
  dataPage,
  pageNumber,
  listenHandler,
}: PageQuranProps) => {
  const [soundsPlayingArr, setSoundsPlayingArr] = useState<QuranVerse[]>([]);
  const [base64Font, setBase64Font] = useState<string | null>(null);

  const webViewRef = useRef(null);
  const textColor = useAppSelector((state) => state.textColor.color);
  const textBgColor = useAppSelector((state) => state.textBgColor.color);
  const pageColor = useAppSelector((state) => state.pageColor.color);

  const base64BSML = loadHeaderFont();

  useEffect(() => {
    // Load the base64 font dynamically based on pageNumber
    const fetchFont = async () => {
      const fontData = await loadBase64Font(pageNumber);
      setBase64Font(fontData);
    };
    fetchFont();
  }, [pageNumber]);

  const handleListen = async (itemVerse: QuranVerse) => {
    const levelNumber = (await AsyncStorage.getItem("levelSound")) || "1";
    let soundArr: QuranVerse[] = [];

    if (levelNumber === "1") {
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
      soundArr = dataPage.filter(
        (item) => item.verse_id === itemVerse.verse_id && item.audio_url
      );
    }

    setSoundsPlayingArr([...soundArr]);
    await listenHandler(itemVerse, dataPage, pageNumber, levelNumber);
    setSoundsPlayingArr([]);
  };

  // Wait until base64Font is loaded to render WebView
  if (!base64Font) {
    return null; // You can add a loading spinner here if desired
  }

  // Function to convert output to HTML
  const getQuranHTML = () => {
    let outputHTML = "";
    for (let index = 0; index < LINES_PER_PAGE; index++) {
      const currentLine = dataPage.filter((item) => item.line_v2 === index + 1);
      const surahFilter = dataPage.filter(
        (item) => item.location_v2 == `${pageNumber}:${index + 1}:0`
      )[0];

      const forceEmptyLines =
        (pageNumber === 1 && index + 1 > 8) ||
        (pageNumber === 2 && index + 1 > 7);

      if (forceEmptyLines) {
        outputHTML += `<div class="line"></div>`;
      } else if (surahFilter) {
        const surah = surahsData[surahFilter.chapter_id - 1];
        outputHTML += `
          <div class="header-line">
            <span class="surah-header" >ò</span>
            <span class="surah-name">${surah?.name_code}</span>
          </div>`;
      } else if (currentLine.length === 0) {
        outputHTML += `<div class="besmallah">ó</div>`;
      } else {
        outputHTML += `<div class="verse-line">`;
        currentLine.forEach((item) => {
          const isPlaying = soundsPlayingArr.includes(item);
          outputHTML += `
            <span 
              class="verse-text" 
              style="color: ${isPlaying ? textColor : "black"};
                     background-color: ${
                       isPlaying ? textBgColor : "transparent"
                     };
                     font-size: 5.8vw;
"
                   
              onclick="handleVerseClick('${item.id}')">
              ${item.code_v2}
            </span>`;
        });
        outputHTML += `</div>`;
      }
    }
    return outputHTML;
  };

  const htmlContent = `
    <html>
      <head>
        <style>
          @font-face {
            font-family: 'SurahNames';
          src: url('data:font/ttf;base64,${base64BSML}') format('truetype');
          }
         @font-face {
            font-family: 'QCF-${pageNumber}';
          src: url('data:font/ttf;base64,${base64Font}') format('truetype');
          }
          body {
            margin: 0;
            font-family: 'QCF-${pageNumber}', sans-serif;
            display: flex;
            flex-direction: column;
            margin: 30px;
            background-color:${pageColor};
          }
          .line, .verse-line, .bismillah-line {
            display: flex;
            flex-direction: row-reverse;
            justify-content: ${
              pageNumber == 2 || pageNumber == 1 || pageNumber == 604
                ? "center"
                : "space-between"
            };
            align-items: flex-start;
            width: 100%;
            white-space: nowrap;
            height:6.5vh;
          }

          .header-line{
          display: flex;
          position:relative;
          justify-content:center;
          }

          .header-line, .bismillah-line {
            text-align: center;
            position:relative;
            height:6.5vh;
          }
       
          .surah-header {
            font-size: 10vw;
            font-family:'SurahNames', sans-serif;
            text-align: center;
            margin-top: ${pageNumber == 1 ? "-5vh" : "-3.5vh"};

          }

        .besmallah {
            font-size: 8vw;
            font-family:'SurahNames', sans-serif;
            text-align: center;
            height:${windowHeight / 7}px

        }
          .surah-name {
            font-size: 6vw;
            font-family: 'SurahNames', sans-serif;
            position:absolute;
            top: ${pageNumber == 1 ? "-20%" : "0%"};
          }  
        
        </style>
        <script>
          function handleVerseClick(verseId) {
            window.ReactNativeWebView.postMessage(verseId);
          }
        </script>
      </head>
      <body>${getQuranHTML()}</body>
    </html>`;

  const onMessage = async (event: any) => {
    const verseId = event.nativeEvent.data;
    const itemVerse = dataPage.find((verse) => verse.id === parseInt(verseId));
    if (itemVerse) {
      await handleListen(itemVerse);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        onMessage={onMessage}
        startInLoadingState={true}
        style={styles.webView}
      />
    </View>
  );
};

export default PageQuranWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: "100%",
    height: "100%",
  },
});

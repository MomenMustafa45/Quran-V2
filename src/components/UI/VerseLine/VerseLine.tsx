import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import VerseText from "../VerseText/VerseText";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { QuranVerse } from "../../../lib/types/quranWordType";

type VerseLineProps = {
  line: any[];
  pageNumber: number;
  handleListen: any;
  soundsPlayingArr: QuranVerse[];
  widthDimension: number;
  windowHeight: number;
};

const VerseLine = ({
  line,
  pageNumber,
  handleListen,
  soundsPlayingArr,
  widthDimension,
  windowHeight,
}: VerseLineProps) => {
  const textColor = useAppSelector((state) => state.textColor.color);
  const textBgColor = useAppSelector((state) => state.textBgColor.color);

  const [textWidths, setTextWidths] = useState<number[]>([]);
  const [dynamicFontSize, setDynamicFontSize] = useState(
    widthDimension * 0.05 // Initial font size calculation
  );

  const widthOfLine = widthDimension - 20;

  useEffect(() => {
    if (textWidths.length === line.length) {
      const totalTextWidth = textWidths.reduce((sum, width) => sum + width, 0);

      if (totalTextWidth < widthOfLine) {
        const scaleFactor = widthOfLine / totalTextWidth;
        setDynamicFontSize((prevFontSize) => prevFontSize * scaleFactor);
      }
    }
  }, [textWidths]);

  return (
    <View
      style={[
        styles.lineContainer,
        {
          justifyContent:
            pageNumber === 1 || pageNumber === 2 ? "center" : "flex-start",
          height: (windowHeight - 40 - 56 - 30) / 15,
        },
      ]}
    >
      {line[0].header ? (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>ò</Text>
          <Text style={styles.headerName}>{line[0].name_code}</Text>
        </View>
      ) : line[0].bismillah ? (
        <Text style={styles.bismillahText}>ó</Text>
      ) : (
        line.map((item: any, index: number) => (
          <View
            key={index}
            onLayout={(event) => {
              const { width } = event.nativeEvent.layout;
              if (width) {
                setTextWidths((prevWidths) => [...prevWidths, width]);
              }
            }}
          >
            <VerseText
              item={item}
              pageNumber={pageNumber}
              listenHandler={handleListen}
              color={soundsPlayingArr.includes(item) ? textColor : "black"}
              bgColor={
                soundsPlayingArr.includes(item) ? textBgColor : "transparent"
              }
              fontSize={dynamicFontSize}
              lineHeight={windowHeight * 0.061}
            />
          </View>
        ))
      )}
    </View>
  );
};

export default VerseLine;

const styles = StyleSheet.create({
  lineContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerContainer: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  headerText: {
    fontFamily: "surahNames",
    fontSize: 22,
  },
  headerName: {
    fontFamily: "surahNames",
    fontSize: 17,
    position: "absolute",
    top: "25%",
  },
  bismillahText: {
    fontFamily: "surahNames",
    fontSize: 17,
    textAlign: "center",
    width: "100%",
  },
});

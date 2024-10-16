import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { QuranVerse } from "../../../lib/types/quranWordType";
import { ActivityIndicator } from "react-native";
import useFonts from "../../../hooks/useFonts";

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
    <View className="flex-1 bg-slate-200 justify-between">
      {lineNumbers.map((lineNumber) => (
        <View
          key={lineNumber}
          className="flex-row-reverse w-full justify-between"
        >
          {dataPage
            .filter((item) => item.line_number === lineNumber)
            .map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    console.log(item);
                  }}
                >
                  <Text
                    style={[
                      styles.customText,
                      { fontFamily: `QCF-${pageNumber}` },
                    ]}
                  >
                    {item.code_v2}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      ))}
    </View>
  );
};

export default PageQuran;

const styles = StyleSheet.create({
  customText: {
    fontSize: 17,
    color: "#000",
    padding: 1,
  },
});

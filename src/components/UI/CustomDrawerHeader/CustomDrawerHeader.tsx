import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import TextReg from "../Texts/TextReg";
import { LinearGradient } from "expo-linear-gradient";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { openSurahModal } from "../../../store/reducers/surahIndex";
import { openJuzModal } from "../../../store/reducers/juzIndexSlice";
import { handleBookmark } from "../../../services/bookmarkServices";
import { surahsData } from "../../../lib/utils/surahData";
import { parts } from "../../../lib/utils/partData";
import TextBold from "../Texts/TextBold";

const CustomDrawerHeader = () => {
  const pageIndex = useAppSelector((state) => state.pageIndex.value);
  const surahIndex = useAppSelector((state) => state.surahIndex.value);
  const juzIndex = useAppSelector((state) => state.juzIndex.value);
  const dispatch = useAppDispatch();

  const surahModalOpen = () => {
    dispatch(openSurahModal());
  };
  const juzModalOpen = () => {
    dispatch(openJuzModal());
  };

  return (
    <View
      style={{
        position: "relative",
        flexDirection: "row",
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: "space-between",
        height: 56,
        alignItems: "center",
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "#08AD4A",
          "#3ACEB3",
          "#0CB697",
          "#08AD4A",
          "#08AD4A",
          "#08AD4A",
          "#08AD4A",
          "#08AD4A",
          "#08AD4A",
        ]}
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }} // End on the right
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <TouchableOpacity onPress={juzModalOpen}>
        <Entypo name="menu" size={22} color="white" />
      </TouchableOpacity>
      <View>
        <TextReg styles={{ fontSize: 12, color: "white" }}>
          <>الجزء {parts[juzIndex ? juzIndex - 1 : 0].title}</>
        </TextReg>
      </View>
      <TextBold styles={{ color: "white", fontSize: 18 }}>
        مصحف المسلمين
      </TextBold>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "surahNames",
            paddingTop: 5,
            color: "white",
            fontSize: 16,
          }}
        >
          {surahsData[surahIndex ? surahIndex - 1 : 0]?.name_code} \
        </Text>
        <TouchableOpacity
          onPress={() => handleBookmark(pageIndex)}
          style={{ marginLeft: 5 }}
        >
          <Feather name="bookmark" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 5 }} onPress={surahModalOpen}>
          <Entypo name="menu" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerHeader;

import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import TextReg from "../Texts/TextReg";
import { LinearGradient } from "expo-linear-gradient";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { openSurahModal } from "../../../store/reducers/surahIndex";
import { openJuzModal } from "../../../store/reducers/juzIndexSlice";
import { handleBookmark } from "../../../services/bookmarkServices";

const CustomDrawerHeader = () => {
  const pageIndex = useAppSelector((state) => state.pageIndex.value);
  const dispatch = useAppDispatch();

  const surahModalOpen = () => {
    dispatch(openSurahModal());
  };
  const juzModalOpen = () => {
    dispatch(openJuzModal());
  };

  return (
    <View className=" relative flex flex-row px-3 justify-between h-10 items-center">
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
      <TextReg styles="text-white">مصحف المسلمين</TextReg>
      <View className="flex-row items-center">
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

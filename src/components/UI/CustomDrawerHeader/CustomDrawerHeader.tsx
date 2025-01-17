import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
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

type CustomDrawerHeaderProps = {
  isGettingMoreAudios: boolean;
};

const CustomDrawerHeader = ({
  isGettingMoreAudios,
}: CustomDrawerHeaderProps) => {
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
      <View
        style={{
          width: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextReg styles={{ fontSize: 12, color: "white" }}>
          <>الجزء</>
        </TextReg>
        <TextReg styles={{ fontSize: 10, color: "white" }}>
          <>{juzIndex ? juzIndex : 1}</>
        </TextReg>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextBold styles={styles.moshafTitle}>مصحف المسلمين</TextBold>
        {isGettingMoreAudios && (
          <View style={styles.audioLoading}>
            <ActivityIndicator size="small" color="#fff" />
            <TextBold styles={{ fontSize: 8, color: "white" }}>
              جاري تحميل الصوتيات...
            </TextBold>
          </View>
        )}
      </View>
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

const styles = StyleSheet.create({
  audioLoading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  moshafTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CustomDrawerHeader;

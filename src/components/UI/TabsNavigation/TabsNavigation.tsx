import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextSemiBold from "../Texts/TextSemiBold";
import { RootNavigationParamList } from "../../../navigation/Stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { surahsData } from "../IndexModal/utils/surahData";
import { Image } from "react-native";
import ColorIcon from "../../../../assets/images/colorIcon.svg";
import MoshafIcon from "../../../../assets/images/moshafIcon.svg";
import ColorModal from "../ColorModal/ColorModal";

const LEVEL_SOUND_KEY = "levelSound";
const MAX_LEVEL = 3;

type TabsNavigationProps = DrawerNavigationProp<RootNavigationParamList>;

type TabsNavigationProp = {
  setModalSearch: () => void;
  indexOfPage?: number;
};

const TabsNavigation = ({
  setModalSearch,
  indexOfPage,
}: TabsNavigationProp) => {
  const [levelSound, setLevelSound] = useState("1");
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const [bgModalVisible, setBgModalVisible] = useState(false);
  const navigation = useNavigation<TabsNavigationProps>();
  const route = useRoute();

  // Helper function to get the current level sound from AsyncStorage
  const getStoredLevelSound = async () => {
    try {
      const storedLevel = await AsyncStorage.getItem(LEVEL_SOUND_KEY);
      return storedLevel ? parseInt(storedLevel, 10) : 1;
    } catch (error) {
      console.error("Error retrieving level sound from storage:", error);
      return 1;
    }
  };

  // Update level sound and store it in AsyncStorage
  const updateLevelSound = async (newLevel: number) => {
    try {
      await AsyncStorage.setItem(LEVEL_SOUND_KEY, newLevel.toString());
      setLevelSound(newLevel.toString());
    } catch (error) {
      console.error("Error updating level sound in storage:", error);
    }
  };

  // Handle press to cycle through levels and store the new level
  const handlePressLevel = useCallback(async () => {
    try {
      const currentLevel = await getStoredLevelSound();
      const newLevel = currentLevel < MAX_LEVEL ? currentLevel + 1 : 1;
      updateLevelSound(newLevel);
    } catch (error) {
      console.error("Error handling level press:", error);
    }
  }, []);

  // Fetch the initial level sound on component mount
  useEffect(() => {
    (async () => {
      const storedLevel = await getStoredLevelSound();
      setLevelSound(storedLevel.toString());
    })();
  }, []);

  return (
    <View className="mt-auto w-full flex flex-row justify-center items-center px-4 py-3 h-14">
      <View className="flex-row flex-1 justify-around">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MoshafIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="settings" size={24} color={"#159C3E"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
          <Feather name="bookmark" size={24} color={"#159C3E"} />
        </TouchableOpacity>
      </View>

      <View className="flex items-center py-1">
        <Text style={{ fontFamily: "surahNames", textAlign: "center" }}>
          {surahsData[indexOfPage ? indexOfPage - 1 : 0]?.name_code} \
        </Text>
        <Text style={{ fontFamily: "surahNames", textAlign: "center" }}>
          ﰸ ﰹ
        </Text>
      </View>

      <View className="flex-1 flex-row items-center justify-between px-4">
        <TouchableOpacity
          onPress={() => {
            setColorModalVisible(true);
          }}
        >
          <ColorIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBgModalVisible(true);
          }}
        >
          <ColorIcon />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex items-center text"
          onPress={handlePressLevel}
        >
          <Feather name="headphones" size={24} color="#159C3E" />
          <TextSemiBold styles="text-xs text-text-primary-green">
            {levelSound}
          </TextSemiBold>
        </TouchableOpacity>
      </View>

      {/* modal text */}
      <ColorModal
        modalVisible={colorModalVisible}
        setModalVisible={setColorModalVisible}
        type="text"
      />
      {/* modal bg */}
      <ColorModal
        modalVisible={bgModalVisible}
        setModalVisible={setBgModalVisible}
        type="bg"
      />
    </View>
  );
};

export default TabsNavigation;

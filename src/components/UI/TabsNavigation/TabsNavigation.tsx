import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextSemiBold from "../Texts/TextSemiBold";
import { RootNavigationParamList } from "../../../navigation/Stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const LEVEL_SOUND_KEY = "levelSound";
const MAX_LEVEL = 3;

type TabsNavigationProps = DrawerNavigationProp<RootNavigationParamList>;

const TabsNavigation = () => {
  const [levelSound, setLevelSound] = useState("1");
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
    <View className="mt-auto w-full flex flex-row justify-center items-center px-5 py-3">
      <View className="flex-row flex-1 justify-around">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="mosque"
            size={24}
            color={route.name === "Home" ? "#159C3E" : "#8789A3"}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="settings"
            size={24}
            color={route.name === "Settings" ? "#159C3E" : "#8789A3"}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
          <Feather
            name="bookmark"
            size={24}
            color={route.name === "Bookmark" ? "#159C3E" : "#8789A3"}
          />
        </TouchableOpacity>
      </View>
      {/* search */}
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Feather
            name="search"
            size={24}
            color={route.name === "Bookmark" ? "#159C3E" : "#8789A3"}
          />
        </TouchableOpacity>
      </View>
      {/* search */}

      <View className="flex-1">
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
    </View>
  );
};

export default TabsNavigation;

import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextSemiBold from "../Texts/TextSemiBold";
import { RootNavigationParamList } from "../../../navigation/Stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import ColorIcon from "../../../../assets/images/colorIcon.svg";
import BgColorIcon from "../../../../assets/icons/bg-text-color2.svg";
import MoshafIcon from "../../../../assets/images/moshafIcon.svg";
import BookRightIcon from "../../../../assets/icons/right-book.svg";
import BookLeftIcon from "../../../../assets/icons/left-book.svg";
import ColorModal from "../ColorModal/ColorModal";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import TextBold from "../Texts/TextBold";
import { openIndexModal } from "../../../store/reducers/pageIndexSlice";
import { StyleSheet } from "react-native";
import PageColorModal from "../PageColorModal/PageColorModal";

const LEVEL_SOUND_KEY = "levelSound";
const MAX_LEVEL = 3;

type TabsNavigationProps = DrawerNavigationProp<RootNavigationParamList>;

const TabsNavigation = () => {
  const [levelSound, setLevelSound] = useState("1");
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const [pageBgColor, setPageBgColor] = useState(false);
  const navigation = useNavigation<TabsNavigationProps>();
  const index = useAppSelector((state) => state.pageIndex.value);
  const dispatch = useAppDispatch();
  const pageIndex = index ? 604 - index : 1;

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
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather name="settings" size={24} color={"#159C3E"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MoshafIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
          <Feather name="bookmark" size={24} color={"#159C3E"} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.pageIndexButton}
          onPress={() => {
            dispatch(openIndexModal());
          }}
        >
          <TextBold styles={{ fontSize: 12, color: "black" }}>
            {pageIndex.toString()}
          </TextBold>
          {pageIndex % 2 == 0 ? <BookLeftIcon /> : <BookRightIcon />}
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            setPageBgColor(true);
          }}
        >
          <ColorIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setColorModalVisible(true);
          }}
        >
          <BgColorIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.soundButton} onPress={handlePressLevel}>
          <Feather name="headphones" size={24} color="#159C3E" />
          <TextSemiBold styles={{ fontSize: 12, color: "#34a853" }}>
            {levelSound}
          </TextSemiBold>
        </TouchableOpacity>
      </View>

      {/* modal text */}
      <ColorModal
        modalVisible={colorModalVisible}
        setModalVisible={setColorModalVisible}
      />
      {/* modal bg */}
      <PageColorModal
        modalVisible={pageBgColor}
        setModalVisible={setPageBgColor}
      />
    </View>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 56,
  },
  navContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  pageIndexButton: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#159C3E",
    width: 40,
    height: "100%",
    borderRadius: 8,
  },
  pageIndexText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  soundButton: {
    alignItems: "center",
  },
  soundText: {
    fontSize: 12,
    color: "#159C3E",
  },
});

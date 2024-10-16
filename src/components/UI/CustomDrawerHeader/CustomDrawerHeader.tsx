import {
  View,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import TextReg from "../Texts/TextReg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootNavigationParamList } from "../../../navigation/Stack";

type DrawerContentProps = DrawerNavigationProp<RootNavigationParamList>;

type CustomDrawerHeaderProps = {
  setJuzModal: () => void;

  setModalVisibleSurah: () => void;
  bookmarkHandler: () => void;
};

const CustomDrawerHeader = ({
  setModalVisibleSurah,
  bookmarkHandler,
  setJuzModal,
}: CustomDrawerHeaderProps) => {
  const navigation = useNavigation<DrawerContentProps>();

  return (
    <View className=" relative flex flex-row px-3 justify-between h-14 items-center">
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
      <TouchableOpacity onPress={setJuzModal}>
        <Entypo name="menu" size={22} color="white" />
      </TouchableOpacity>
      <TextReg styles="text-white">مصحف المسلمين</TextReg>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={bookmarkHandler} style={{ marginLeft: 5 }}>
          <Feather name="bookmark" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={setModalVisibleSurah}
        >
          <Entypo name="menu" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerHeader;

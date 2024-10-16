import { View, Text, Image, ImageBackground, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import TextBold from "../components/UI/Texts/TextBold";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { RootNavigationParamList } from "../navigation/Stack";
import { StackNavigationProp } from "@react-navigation/stack";

type SplashScreenNavigationProp = StackNavigationProp<
  RootNavigationParamList,
  "Splash"
>;

const Splash = () => {
  const navigate = useNavigation<SplashScreenNavigationProp>();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      navigate.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: "Drawer" }] })
      );
    }, 4000);

    return () => clearTimeout(timeout); // Clear timeout when component unmounts
  }, [fadeAnim, scaleAnim, navigate]);

  return (
    <View className="flex-1 relative">
      <View className="absolute top-0 left-0 w-full h-full bg-[#024F41] justify-center items-center">
        <ImageBackground
          source={require("../../assets/images/cover.png")}
          resizeMode="cover"
          className="flex-1 w-full"
        />
      </View>

      <View className="flex flex-1 items-center justify-center">
        {/* Apply the fade and scale animations to the image */}
        <Animated.Image
          source={require("../../assets/images/moshaf.png")}
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        />
        {/* Apply fade animation to text */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <TextBold styles="text-text-color">مصحف المسلمين</TextBold>
        </Animated.View>
      </View>
    </View>
  );
};

export default Splash;

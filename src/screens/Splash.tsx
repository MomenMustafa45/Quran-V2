import { View, ImageBackground, Animated } from "react-native";
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

  // const getMoshafSelected = async () => {
  //   try {
  //     const selectedMoshaf = await AsyncStorage.getItem("mohsaf");
  //     if (selectedMoshaf) {
  //       navigate.dispatch(
  //         CommonActions.reset({ index: 0, routes: [{ name: "Drawer" }] })
  //       );
  //     } else {
  //       navigate.dispatch(
  //         CommonActions.reset({ index: 0, routes: [{ name: "Landing" }] })
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const isMoshafSelected = Animated.parallel([
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
    <View style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#024F41",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={require("../../assets/images/cover.png")}
          resizeMode="cover"
          style={{ flex: 1, width: "100%" }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
          <TextBold styles={{ color: "#074a3e" }}>مصحف المسلمين</TextBold>
        </Animated.View>
      </View>
    </View>
  );
};

export default Splash;

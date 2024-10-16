import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/Stack";
import useFonts from "./src/hooks/useFonts";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, View } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadResourcesAsync = async () => {
    await useFonts(["Cairo-Regular", "Cairo-Bold", "Cairo-SemiBold"]);
  };

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await loadResourcesAsync();
        setIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    };

    loadFonts();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

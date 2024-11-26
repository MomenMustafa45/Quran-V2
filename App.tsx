import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/Stack";
import useFonts from "./src/hooks/useFonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ActivityIndicator,
  StatusBar,
  View,
  I18nManager,
  AppRegistry,
} from "react-native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadResourcesAsync = async () => {
    await useFonts([
      "Cairo-Regular",
      "Cairo-Bold",
      "Cairo-SemiBold",
      "QCF-BSML",
    ]);
  };

  useEffect(() => {
    // Force LTR layout direction and prevent RTL
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);

      // Restart the app programmatically
      setTimeout(() => {
        const RootComponent = require("./App").default;
        AppRegistry.registerComponent("main", () => RootComponent);
      }, 100);
    } else {
      // Load fonts after enforcing layout direction
      const loadFonts = async () => {
        try {
          await loadResourcesAsync();
          setIsReady(true);
        } catch (e) {
          console.warn(e);
        }
      };

      loadFonts();
    }
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
        <Toast />
      </Provider>
    </SafeAreaProvider>
  );
}

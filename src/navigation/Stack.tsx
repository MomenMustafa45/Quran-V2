import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import DrawerNavigation from "./Drawer";
import LandingScreen from "../screens/LandingScreen";

export type RootNavigationParamList = {
  navigate(arg0: string, arg1: { pageNumber: number }): unknown;
  Splash: undefined;
  Home: undefined;
  Bookmark: undefined;
  Settings: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;

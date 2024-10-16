import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import DrawerNavigation from "./Drawer";

export type RootNavigationParamList = {
  navigate(arg0: string, arg1: { pageNumber: number }): unknown;
  Splash: undefined;
  Home: undefined;
  Bookmark: undefined;
  Settings: undefined;
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
        name="Drawer"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;

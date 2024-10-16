import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Bookmark from "../screens/Bookmark";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
    </Tab.Navigator>
  );
}

export default TabNavigation;

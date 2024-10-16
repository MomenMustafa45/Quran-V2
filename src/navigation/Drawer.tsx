import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import DrawerContent from "../components/UI/DrawerContent/DrawerContent";
import Bookmark from "../screens/Bookmark";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => {
        return (
          <>
            <DrawerContent />
          </>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerTitle: "الصفح المحفوظة",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
          headerStyle: { backgroundColor: "#08AD4A" },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: "الإعدادات",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
          headerStyle: { backgroundColor: "#08AD4A" },
          headerTintColor: "#fff",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

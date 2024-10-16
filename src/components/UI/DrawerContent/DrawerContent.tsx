import React, { useEffect } from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootNavigationParamList } from "../../../navigation/Stack";

type DrawerContentProps = DrawerNavigationProp<RootNavigationParamList>;

const DrawerContent = () => {
  const navigation = useNavigation<DrawerContentProps>();
  const [activeRoute, setActiveRoute] = React.useState<number | undefined>(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (e) => {
      const route = e.data.state.routes[e.data.state.index].state?.index;

      setActiveRoute(route);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <DrawerItem
        style={{ backgroundColor: activeRoute == 0 ? "#08AD4A" : "white" }}
        label={"القران"}
        onPress={() => navigation.navigate("Home")}
        labelStyle={{
          color: activeRoute == 0 ? "white" : "#08AD4A",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
        }}
      />
      <DrawerItem
        style={{ backgroundColor: activeRoute == 1 ? "#08AD4A" : "white" }}
        label={"الصفح المحفوظة"}
        onPress={() => navigation.navigate("Bookmark")}
        labelStyle={{
          color: activeRoute == 1 ? "white" : "#08AD4A",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
        }}
      />
      <DrawerItem
        style={{ backgroundColor: activeRoute == 2 ? "#08AD4A" : "white" }}
        label={"الإعدادات"}
        onPress={() => {}}
        labelStyle={{
          color: activeRoute == 2 ? "white" : "#08AD4A",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
        }}
      />
    </>
  );
};

export default DrawerContent;

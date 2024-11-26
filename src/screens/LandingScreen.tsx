import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationParamList } from "../navigation/Stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LandingScreen = () => {
  type TabsNavigationProps = DrawerNavigationProp<RootNavigationParamList>;

  const navigation = useNavigation<TabsNavigationProps>();

  const imagesData = [
    {
      id: "2",
      text: "مصحف المدينة شعبة",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Shopaa.png"),
      downloadMoshaf: false,
    },

    {
      id: "1",
      text: "مصحف المدينة حفص",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Hafs.png"),
      downloadMoshaf: true,
    },
    {
      id: "4",
      text: "مصحف المدينة أردو",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Ordo.png"),
      downloadMoshaf: false,
    },

    {
      id: "3",
      text: "مصحف المدينة الدوري",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Dory.png"),
      downloadMoshaf: false,
    },
    {
      id: "6",
      text: "مصحف المدينة ورش",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah_Warsh.png"),
      downloadMoshaf: false,
    },

    {
      id: "5",
      text: "مصحف المدينة قالون",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Qalon.png"),
      downloadMoshaf: false,
    },
  ];

  const handleNavigateToHome = async () => {
    try {
      await AsyncStorage.setItem("mohsaf", "madena");
      navigation.navigate("Drawer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={imagesData}
        numColumns={2}
        ItemSeparatorComponent={() => (
          <View style={{ height: 20, width: 10 }} />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={handleNavigateToHome}
            accessibilityLabel={`مصحف ${item.text}`}
            style={{ width: "49%" }}
            disabled={item.id != "1"}
          >
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                {!item.downloadMoshaf && (
                  <TouchableOpacity>
                    <Image
                      style={styles.smallImg}
                      source={require("../../assets/images/LandingImages/cloud-download 1.png")}
                    />
                  </TouchableOpacity>
                )}
                <Text style={styles.cardTitle}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LandingScreen;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderColor: "#ffe2b7",
    borderWidth: 2,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
  },
  smallImg: {
    width: 20,
    height: 20,
  },
});

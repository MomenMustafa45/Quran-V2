import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationParamList } from "../navigation/Stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
const LandingScreen = () => {
type TabsNavigationProps = DrawerNavigationProp<RootNavigationParamList>;

  const navigation = useNavigation<TabsNavigationProps>();

  const imagesData = [
    {
      id: "2",
      text: "مصحف المدينة شعبة",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Shopaa.png"),
    },

    {
      id: "1",
      text: "مصحف المدينة حفص",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Hafs.png"),
    },
    {
      id: "4",
      text: "مصحف المدينة أردو",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Ordo.png"),
    },

    {
      id: "3",
      text: "مصحف المدينة الدوري",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Dory.png"),
    },
    {
      id: "6",
      text: "مصحف المدينة ورش",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah_Warsh.png"),
    },

    {
      id: "5",
      text: "مصحف المدينة قالون",
      image: require("../../assets/images/LandingImages/Mushaf_AlMadinah-Qalon.png"),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {imagesData.map((item) => (
          <TouchableOpacity
            key={item.id}
           onPress={() => navigation.navigate("Home")}
            accessibilityLabel={`مصحف ${item.text}`}
          >
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {item.text}
                  {/* <TouchableOpacity >
                  <Image
                    style={styles.smallImg}
                    source={require("../../assets/images/LandingImages/cloud-download 1.png")}
                  />
                </TouchableOpacity> */}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  smallImg: {
    width: 20,
    height: 20,
  },
});

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const LandingScreen = () => {
  const imagesData = [
    { id: '1', text: 'مصحف المدينة قالون', image: require('../../assets/images/LandingImages/1 (1) 1.png') },
    { id: '2', text: 'مصحف المدينة الدوري', image: require('../../assets/images/LandingImages/1 (2) 1.png') },
    { id: '3', text: 'مصحف المدينة حفص', image: require('../../assets/images/LandingImages/1 89.png') },
    { id: '4', text: 'مصحف المدينة أردو', image: require('../../assets/images/LandingImages/8b5deb3776b18fc13bc1683469f745a0 1.png') },
    { id: '5', text: 'مصحف المدينة ورش', image: require('../../assets/images/LandingImages/Mushaf_AlMadinah_Warsh_549 1.png') },
    { id: '6', text: 'مصحف المدينة شعبة', image: require('../../assets/images/LandingImages/تنزيل 1.png') },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {imagesData.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => console.log(`تم الضغط على ${item.text}`)} accessibilityLabel={`مصحف ${item.text}`}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.text}</Text>
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
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

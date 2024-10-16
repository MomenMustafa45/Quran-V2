import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import TabsNavigation from "../components/UI/TabsNavigation/TabsNavigation";

const Settings = () => {
  const [selectedLevel, setSelectedLevel] = useState("1"); // Default level is 1
  const [selectedSurah, setSelectedSurah] = useState("1"); // Default surah is 1

  // Dummy list of surahs for now, you can replace it with actual surah data
  const surahs = [
    { id: "1", name: "الفاتحة" },
    { id: "2", name: "البقرة" },
    { id: "3", name: "ال عمران" },
    // Add more surahs as needed
  ];

  const handleDownloadAllAudio = () => {
    console.log("Downloading audio for all Quran surahs...");
    // Implement the logic to download all audio
  };

  const handleDownloadSurahAudio = () => {
    console.log(`Downloading audio for surah ID ${selectedSurah}...`);
    // Implement the logic to download audio for the selected surah
  };

  return (
    <>
      <View style={styles.container}>
        {/* Select Listen Words Level */}
        <View style={styles.settingItem}>
          <Text style={styles.label}>أختر مستوي استماع الاية:</Text>
          <Picker
            selectedValue={selectedLevel}
            onValueChange={(itemValue) => setSelectedLevel(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="المستوي الاول" value="1" />
            <Picker.Item label="المستوي الثاني" value="2" />
            <Picker.Item label="المستوي الثالث" value="3" />
          </Picker>
        </View>

        {/* Download Audio for Selected Surah */}
        <View style={styles.settingItem}>
          <Text style={styles.label}>تحميل صوتيات السور:</Text>
          <Picker
            selectedValue={selectedSurah}
            onValueChange={(itemValue) => setSelectedSurah(itemValue)}
            style={styles.picker}
          >
            {surahs.map((surah) => (
              <Picker.Item key={surah.id} label={surah.name} value={surah.id} />
            ))}
          </Picker>
        </View>
        <View>
          <Button
            title="تحميل"
            color="#08AD4A"
            onPress={handleDownloadSurahAudio}
          />
        </View>
      </View>
      <TabsNavigation />
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  settingItem: {
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#08AD4A",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    borderBottomColor: "#08AD4A",
    borderBottomWidth: 1,
  },
});

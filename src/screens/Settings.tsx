import React, { useCallback, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import TabsNavigation from "../components/UI/TabsNavigation/TabsNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTextBgColor } from "../store/reducers/textbgColor";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setPageColor } from "../store/reducers/pageColorSlice";

const Settings = () => {
  const [selectedLevel, setSelectedLevel] = useState("1");
  const [selectedWordColor, setSelectedWordColor] = useState("");
  const [selectedWordBgColor, setSelectedWordBgColor] = useState("");
  const [selectedPageColor, setSelectedPageColor] = useState("");

  const dispatch = useAppDispatch();

  const wordsColor = [
    { id: "1", name: "اللون الاخضر", value: "#98FF98" },
    { id: "2", name: "اللون الاحمر", value: "#DC143C" },
    { id: "3", name: "اللون الاصفر", value: "#FFD700" },
    { id: "4", name: "اللون البنفسجي", value: "#7851A9" },
  ];

  const LEVEL_SOUND_KEY = "levelSound";
  // Handle press to cycle through levels and store the new level
  const handlePressLevel = async (item: number) => {
    try {
      setSelectedLevel(item.toString());
      await AsyncStorage.setItem(LEVEL_SOUND_KEY, item.toString());
    } catch (error) {
      console.error("Error handling level press:", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* Select Listen Words Level */}
        <View style={styles.settingItem}>
          <Text style={styles.label}>أختر مستوي استماع الاية:</Text>
          <Picker
            selectedValue={selectedLevel}
            onValueChange={(itemValue) => {
              handlePressLevel(parseInt(itemValue));
            }}
            style={styles.picker}
          >
            <Picker.Item label="المستوي الاول" value="1" />
            <Picker.Item label="المستوي الثاني" value="2" />
            <Picker.Item label="المستوي الثالث" value="3" />
          </Picker>
        </View>

        {/* choose word color */}
        <View style={styles.settingItem}>
          <Text style={styles.label}>اختيار لون الكلمة</Text>
          <Picker
            selectedValue={selectedWordColor}
            onValueChange={async (itemValue) => {
              await AsyncStorage.setItem("text-bg", itemValue);
              dispatch(setTextBgColor(itemValue));
              setSelectedWordColor(itemValue);
            }}
            style={styles.picker}
          >
            {wordsColor.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.value} />
            ))}
          </Picker>
        </View>
        {/* choose word bg color */}
        <View style={styles.settingItem}>
          <Text style={styles.label}>اختيار خلفية الكلمة</Text>
          <Picker
            selectedValue={selectedWordBgColor}
            onValueChange={async (itemValue) => {
              await AsyncStorage.setItem("text-bg", itemValue);
              dispatch(setTextBgColor(itemValue));
              setSelectedWordBgColor(itemValue);
            }}
            style={styles.picker}
          >
            {wordsColor.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.value} />
            ))}
          </Picker>
        </View>

        {/* choose Page bg color */}
        <View style={styles.settingItem}>
          <Text style={styles.label}>اختيار خلفية الصفحة</Text>
          <Picker
            selectedValue={selectedPageColor}
            onValueChange={async (itemValue) => {
              await AsyncStorage.setItem("page-color", itemValue);
              dispatch(setPageColor(itemValue));
              setSelectedPageColor(itemValue);
            }}
            style={styles.picker}
          >
            <Picker.Item label={"اللون الافتراضي"} value={"white"} />
            {wordsColor.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.value} />
            ))}
          </Picker>
        </View>

        <View>
          <Button title="حفظ" color="#08AD4A" />
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

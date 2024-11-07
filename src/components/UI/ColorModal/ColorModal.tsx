import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setTextBgColor } from "../../../store/reducers/textbgColor";
import { setTextColor } from "../../../store/reducers/textSoundColor";
type ColorModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  type: "text" | "bg";
};

const ColorModal = ({
  modalVisible,
  setModalVisible,
  type,
}: ColorModalProps) => {
  const [selectValue, setSelectedValue] = useState("");
  const dispatch = useAppDispatch();
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modalContainer}
      useNativeDriver={true}
    >
      <View style={styles.modalContent}>
        <Text style={styles.label}>
          {type == "text" ? "لون" : "لون خلفية"} الكلمة
        </Text>
        <Picker
          selectedValue={selectValue}
          onValueChange={async (itemValue) => {
            setSelectedValue(itemValue);
            if (type == "bg") {
              await AsyncStorage.setItem("text-bg", itemValue);
              dispatch(setTextBgColor(itemValue));
            } else {
              await AsyncStorage.setItem("text-color", itemValue);
              dispatch(setTextColor(itemValue));
            }
          }}
          style={styles.picker}
        >
          <Picker.Item label="اللون الاخضر" value="#98FF98" />
          <Picker.Item label="اللون الاحمر" value="#DC143C" />
          <Picker.Item label="اللون الاصفر" value="#FFD700" />
          <Picker.Item label="اللون البنفسجي" value="#7851A9" />
        </Picker>
      </View>
    </Modal>
  );
};

export default ColorModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    display: "flex",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 2,
  },
});

import { Button, Text, View } from "react-native";
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
};

const PageColorModal = ({ modalVisible, setModalVisible }: ColorModalProps) => {
  const [selectWordBgColor, setSelectWordBgColor] = useState("");
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
        {/* Page bg color */}
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text style={styles.label}>لون خلفية الصفحة</Text>
          <Picker
            selectedValue={selectWordBgColor}
            onValueChange={(itemValue) => {
              setSelectWordBgColor(itemValue);
            }}
            style={styles.picker}
          >
            <Picker.Item
              style={{ fontSize: 10 }}
              label="الاخضر"
              value="#98FF98"
            />
            <Picker.Item
              style={{ fontSize: 10 }}
              label="الاحمر"
              value="#DC143C"
            />
            <Picker.Item
              style={{ fontSize: 10 }}
              label="الاصفر"
              value="#FFD700"
            />
            <Picker.Item
              style={{ fontSize: 10 }}
              label="البنفسجي"
              value="#7851A9"
            />
          </Picker>
        </View>
        {/*  */}
        <View>
          <Button
            title="حفظ"
            color="#08AD4A"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PageColorModal;

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
    textAlign: "center",
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 2,
  },
});

import { Button, Text, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";

type ColorModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

const ColorModal = ({ modalVisible, setModalVisible }: ColorModalProps) => {
  const [selectWordBgColor, setSelectWordBgColor] = useState("");
  const [selectWordColor, setSelectWordColor] = useState("");
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          {/* word bg color */}
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              borderRightColor: "#08AD4A",
            }}
          >
            <Text style={styles.label}>لون خلفية الكلمة</Text>
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
          {/* word color */}

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>لون الكلمة</Text>
            <Picker
              selectedValue={selectWordColor}
              onValueChange={(itemValue) => {
                setSelectWordColor(itemValue);
              }}
              style={styles.picker}
            >
              <Picker.Item
                label="الاخضر"
                value="#98FF98"
                style={{ fontSize: 10 }}
              />
              <Picker.Item
                label="الاحمر"
                value="#DC143C"
                style={{ fontSize: 10 }}
              />
              <Picker.Item
                label="الاصفر"
                value="#FFD700"
                style={{ fontSize: 10 }}
              />
              <Picker.Item
                label="البنفسجي"
                value="#7851A9"
                style={{ fontSize: 10 }}
              />
            </Picker>
          </View>
          {/*  */}
        </View>
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
    textAlign: "center",
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 2,
  },
});

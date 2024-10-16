import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextReg from "../Texts/TextReg";
import TextBold from "../Texts/TextBold";
import { surahsData } from "./utils/surahData";
import { parts } from "./utils/partData";

type IndexModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  goToPage: (index: number) => void;
};

const IndexModal = ({
  modalVisible,
  setModalVisible,
  goToPage,
}: IndexModalProps) => {
  const [indexNumber, setIndexNumber] = useState("");

  const handlePressButton = () => {
    const indexNumberParsed = parseInt(indexNumber);
    if (indexNumber && indexNumberParsed > 0 && indexNumberParsed <= 604) {
      goToPage(indexNumberParsed);
      setModalVisible(false);
      setIndexNumber("");
    } else {
      Alert.alert("الرقم يجب ان يكون صحيح");
    }
  };

  // Use useCallback to avoid re-creating the function
  const handleIndexButton = useCallback(
    (item: number) => {
      goToPage(item);
      setModalVisible(false);
    },
    [goToPage, setModalVisible]
  );

  const renderSurahItem = useCallback(
    ({
      item,
    }: {
      item: {
        id: number;
        revelation_place: string;
        name_arabic: string;
        start_page: number;
        end_page: number;
        verses_count: number;
      };
    }) => (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleIndexButton(item.start_page)}
      >
        <View className="items-center">
          <TextReg styles="mr-2 font-bold">{item.name_arabic}</TextReg>
          <TextReg styles="mr-2 font-bold">
            <>
              {item.end_page.toString()} - {item.start_page.toString()}
            </>
          </TextReg>
        </View>
        <MaterialCommunityIcons
          name="book-open-page-variant"
          size={24}
          color="#34a853"
        />
      </TouchableOpacity>
    ),
    [handleIndexButton]
  );

  const renderPartItem = useCallback(
    ({
      item,
    }: {
      item: { startPage: number; part: number; endPage: number; title: string };
    }) => (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleIndexButton(item.startPage)}
      >
        <View className="items-center">
          <TextReg styles="mr-2 font-bold">{item.title.toString()}</TextReg>
          <TextReg styles="mr-2 font-bold">
            <>
              {item.part.toString()} - {item.endPage.toString()}
            </>
          </TextReg>
        </View>
        <MaterialCommunityIcons
          name="circle-slice-3"
          size={24}
          color="#34a853"
        />
      </TouchableOpacity>
    ),
    [handleIndexButton]
  );

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        {/* Page Number Input */}
        <View style={styles.inputSection}>
          <TextInput
            onChangeText={setIndexNumber}
            placeholder="ادخل رقم الصفحة"
            inputMode="numeric"
            value={indexNumber}
            style={{ textAlign: "right" }}
            className="border border-text-primary-green py-1 px-2 rounded mb-2"
          />
          <TouchableOpacity
            onPress={handlePressButton}
            className="bg-text-primary-green items-center rounded py-2"
          >
            <TextBold styles="text-white"> اذهب للصفحة</TextBold>
          </TouchableOpacity>
        </View>

        {/* Surahs List */}
        <View style={styles.listSection}>
          <TextBold styles="text-center mt-4 text-text-primary-green text-lg">
            سور القران الكريم
          </TextBold>
          <FlatList
            data={surahsData}
            renderItem={renderSurahItem}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </View>

        {/* Parts List */}
        <View style={styles.listSection}>
          <TextBold styles="text-center mt-4 text-text-primary-green text-lg">
            الجزء
          </TextBold>
          <FlatList
            data={parts}
            renderItem={renderPartItem}
            keyExtractor={(item) => item.part.toString()}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </View>
      </View>
    </Modal>
  );
};

export default IndexModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalContent: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
    padding: 20,
    display: "flex",
  },
  inputSection: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingBottom: 10,
  },
  listSection: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginTop: 10,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#34a853",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

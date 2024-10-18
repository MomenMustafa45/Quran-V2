import React, { useCallback } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextReg from "../Texts/TextReg";
import TextBold from "../Texts/TextBold";
import { surahsData } from "../IndexModal/utils/surahData";

type IndexModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  goToPage: (index: number) => void;
};

const SurahsModal = ({
  modalVisible,
  setModalVisible,
  goToPage,
}: IndexModalProps) => {
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


const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => handleIndexButton(item.start_page)}>
    <View >
      <View style={styles.listItem}>
        <TextReg>{item.start_page}</TextReg>
        <TextReg>{item.name_arabic}</TextReg>
      </View>
    </View>
  </TouchableOpacity>


  ); return (
    <Modal
      isVisible={modalVisible}
    animationIn="slideInRight" 
  animationOut="slideOutRight"
      backdropOpacity={0.5}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
        <TextReg >رقم الصفحة</TextReg>
          <TextReg >السورة</TextReg>
        </View>
        <FlatList
          data={surahsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Modal>
  );
  };
  
  export default SurahsModal;
  const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
   
    width: "70%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: "auto",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
  },
  listItem: {
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#34a853",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#34A853",
    height: 50,
    padding: 10,
  },
});

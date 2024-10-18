import React, { useCallback } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextReg from "../Texts/TextReg";
import TextBold from "../Texts/TextBold";
import { parts } from "../IndexModal/utils/partData";

type IndexModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  goToPage: (index: number) => void;
};

const JuzModal = ({
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


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleIndexButton(item.startPage)}>
      <View>
        <View style={styles.listItem}>
          <TextReg>
            <>{item.startPage}</>
          </TextReg>

          <TextReg>{item.title}</TextReg>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      backdropOpacity={0.5}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <TextReg>رقم الصفحة</TextReg>

          <TextReg>الجزء</TextReg>
        </View>
        <FlatList
          data={parts}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Modal>
  );
};

export default JuzModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: 300,
    marginBottom: "auto",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
   
  },
  listSection: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#34a853",
 
    marginTop: 10,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#34a853",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#34A853",
    height: 50,
    padding: 10,
  },
});

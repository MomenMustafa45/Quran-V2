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

export default JuzModal;

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

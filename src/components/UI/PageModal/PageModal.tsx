import React, { memo, useCallback, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import TextReg from "../Texts/TextReg";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  closeIndexModal,
  pageIndexHandler,
} from "../../../store/reducers/pageIndexSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextBold from "../Texts/TextBold";
import Toast from "react-native-toast-message";

type IndexModalProps = {
  goToPage: (index: number) => void;
};

const PageModal = ({ goToPage }: IndexModalProps) => {
  const modalVisible = useAppSelector(
    (state) => state.pageIndex.indexModalVisible
  );
  const [inputValue, setInputValue] = useState("0");

  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeIndexModal());
  };

  const handleIndexButton = (item: number) => {
    goToPage(item);
    dispatch(closeIndexModal());
  };

  const goBtnHandler = () => {
    if (parseInt(inputValue) > 0 && parseInt(inputValue) <= 604) {
      goToPage(parseInt(inputValue));
      dispatch(closeIndexModal());
      dispatch(
        pageIndexHandler(parseInt((604 - parseInt(inputValue)).toString()))
      );
    } else {
      dispatch(closeIndexModal());
      Toast.show({
        type: "error",
        text1: "يجب ادخال رقم الصفحة بين 1 الي 604",
        position: "bottom",
        visibilityTime: 2000,
      });
    }
  };

  const pages = useMemo(
    () => Array.from({ length: 604 }, (_, index) => `${index + 1}`),
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: (typeof pages)[0] }) => (
      <TouchableOpacity
        onPress={() => {
          dispatch(
            pageIndexHandler(parseInt((604 - parseInt(item)).toString()))
          );
          handleIndexButton(parseInt(item));
        }}
      >
        <View style={styles.listItem}>
          <TextReg>{item}</TextReg>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={24}
              color="#34A853"
            />
            <TextReg>
              <> .{item}</>
            </TextReg>
          </View>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={styles.modalContainer}
      useNativeDriver={true}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <TextBold styles={{ color: "white" }}>رقم الصفحة</TextBold>
        </View>
        <View style={styles.modalHeader}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#fee2e2",
                padding: 5,
                borderRadius: 5,
              }}
              onPress={() => {
                goBtnHandler();
              }}
            >
              <TextReg>ذهاب</TextReg>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={{ backgroundColor: "white", padding: 5, borderRadius: 5 }}
              placeholder="ادخل رقم الصفحة"
              keyboardType="number-pad"
              onChangeText={setInputValue}
            />
          </View>
        </View>

        <FlatList
          data={pages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          initialNumToRender={8}
          maxToRenderPerBatch={5}
        />
      </View>
    </Modal>
  );
};

export default memo(PageModal);

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  modalContent: {
    width: 250,
    height: "40%",
    backgroundColor: "white",
    display: "flex",
    bottom: 65,
    borderWidth: 5,
    borderColor: "#34A853",
    borderRadius: 5,
  },
  listItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#34a853",

    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#34A853",
    padding: 5,
    alignItems: "center",
    columnGap: 8,
  },
});

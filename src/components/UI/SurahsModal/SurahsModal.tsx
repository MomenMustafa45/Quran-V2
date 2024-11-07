import React, { useCallback, useMemo } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import TextReg from "../Texts/TextReg";
import { surahsData } from "../../../lib/utils/surahData";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { closeSurahModal } from "../../../store/reducers/surahIndex";

type IndexModalProps = {
  goToPage: (index: number) => void;
};

const SurahsModal = ({ goToPage }: IndexModalProps) => {
  const modalVisible = useAppSelector(
    (state) => state.surahIndex.surahModalVisible
  );

  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeSurahModal());
  };

  const handleIndexButton = (item: number) => {
    goToPage(item);
    dispatch(closeSurahModal());
  };

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: { start_page: number; name_arabic: string; name_code: string };
      index: number;
    }) => (
      <TouchableOpacity onPress={() => handleIndexButton(item.start_page)}>
        <View style={styles.listItem}>
          <TextReg>{item.start_page.toString()}</TextReg>
          <View className="flex-row">
            <Text style={{ fontFamily: "surahNames" }}>{item.name_code}</Text>
            <TextReg>
              <>.{index + 1}</>
            </TextReg>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [handleIndexButton]
  );

  // Memoized keyExtractor function
  const keyExtractor = useCallback(
    (_: { start_page: number; name_arabic: string }, index: number) =>
      index.toString(),
    []
  );

  // Memoize surahsData for performance, assuming it's static data
  const memoizedSurahsData = useMemo(() => surahsData, []);

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={styles.modalContainer}
      useNativeDriver={true}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <TextReg styles="text-white">رقم الصفحة</TextReg>
          <TextReg styles="text-white">السورة</TextReg>
        </View>
        <ScrollView>
          {memoizedSurahsData.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleIndexButton(item.start_page)}
              key={item.id}
            >
              <View style={styles.listItem}>
                <TextReg>{item.start_page.toString()}</TextReg>
                <View className="flex-row">
                  <Text style={{ fontFamily: "surahNames" }}>
                    {item.name_code}
                  </Text>
                  <TextReg>
                    <>.{index + 1}</>
                  </TextReg>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SurahsModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
  },
  modalContent: {
    width: 220,
    height: "100%",
    backgroundColor: "white",
    display: "flex",
  },
  listItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#34a853",
    borderLeftWidth: 5,
    borderLeftColor: "#34A853",
    paddingHorizontal: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#34A853",
    padding: 10,
  },
});

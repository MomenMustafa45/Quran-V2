import React, { useCallback, useMemo } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import TextReg from "../Texts/TextReg";
import { parts } from "../../../lib/utils/partData";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { closeJuzModal } from "../../../store/reducers/juzIndexSlice";

type IndexModalProps = {
  goToPage: (index: number) => void;
};

const JuzModal = ({ goToPage }: IndexModalProps) => {
  const modalVisible = useAppSelector(
    (state) => state.juzIndex.juzModalVisible
  );

  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeJuzModal());
  };
  // Use useCallback to avoid re-creating the function
  const handleIndexButton = (item: number) => {
    goToPage(item);
    dispatch(closeJuzModal());
  };

  // Memoize the renderItem function to avoid unnecessary re-renders
  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: { startPage: number; title: string };
      index: number;
    }) => (
      <TouchableOpacity onPress={() => handleIndexButton(item.startPage)}>
        <View style={styles.listItem}>
          <TextReg>{item.startPage.toString()}</TextReg>
          <TextReg>
            <>
              {index + 1}.{item.title}
            </>
          </TextReg>
        </View>
      </TouchableOpacity>
    ),
    [handleIndexButton]
  );
  // Memoized keyExtractor to avoid re-creating it
  const keyExtractor = useCallback(
    (_: {}, index: number) => index.toString(),
    []
  );

  // Memoize parts data to prevent re-computation
  const memoizedParts = useMemo(() => parts, []);

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <TextReg styles="text-white">رقم الصفحة</TextReg>
          <TextReg styles="text-white">الجزء</TextReg>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={memoizedParts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={10} // Render 10 items initially for smoother performance
          maxToRenderPerBatch={10} // Batch render 10 items at a time
          windowSize={5} // Reduce memory usage by managing offscreen rendering
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
    width: 220,
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
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#34a853",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRightWidth: 5,
    borderRightColor: "#34a853",
    paddingHorizontal: 10,
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#34A853",
    padding: 10,
    height: 40,
  },
});

import React, { useCallback, useMemo } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import TextReg from "../Texts/TextReg";
import { mushafFirstTenJuz } from "../../../lib/utils/partData";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { closeJuzModal } from "../../../store/reducers/juzIndexSlice";
import { pageIndexHandler } from "../../../store/reducers/pageIndexSlice";
import JuzItem from "./JuzItem/JuzItem";
import HeaderItem from "./JuzItem/HeaderItem";

type IndexModalProps = {
  goToPage: (index: number) => void;
};

export type MushafJuzs = (typeof mushafFirstTenJuz)[0];

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
    dispatch(pageIndexHandler(604 - item));
  };

  // Memoize parts data to prevent re-computation
  const memoizedParts = useMemo(() => mushafFirstTenJuz, []);

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={styles.modalContainer}
      useNativeDriver={true}
    >
      <View style={styles.modalContent}>
        <View style={[styles.modalHeader]}>
          <View style={{ flex: 4, flexDirection: "row" }}>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <HeaderItem text="نهاية" />
              <HeaderItem text="بدء " />
              <HeaderItem text="الربع" />
            </View>
            <View style={{ flex: 1 }}>
              <HeaderItem text="الحزب" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <HeaderItem text="الجزء" />
          </View>
        </View>
        {/* modal header */}
        <ScrollView>
          {memoizedParts.map((item) => (
            <JuzItem
              item={item}
              key={item.juzId}
              goToPage={handleIndexButton}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default JuzModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
  },
  modalContent: {
    width: "75%",
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
    backgroundColor: "#34A853",
    paddingVertical: 10,
  },
});

import Modal from "react-native-modal";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { checkForStoredSearchData } from "../../../services/searchServices";
import TextReg from "../Texts/TextReg";
import { SearchType } from "../../../lib/types/searchDataType";

type SearchModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  goToPage: (index: number) => void;
};

const SearchModal = ({
  modalVisible,
  setModalVisible,
  goToPage,
}: SearchModalProps) => {
  const [searchData, setSearchData] = useState<SearchType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [filteredData, setFilteredData] = useState<SearchType[]>([]);

  useEffect(() => {
    // Fetch stored or API data when the modal opens
    checkForStoredSearchData({
      setIsLoading: setIsLoadingData,
      setDataSearch: setSearchData,
    });
  }, []);

  // Function to handle search
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // Filter data based on search term (partial match)
      const searchedAyat = searchData.filter(
        (item) => item.text_imlaei_simple.includes(searchTerm) // Partial match
      );
      setFilteredData(searchedAyat);
    } else {
      setFilteredData([]); // If the input is empty, clear the results
    }
  };

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}></View>
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  modalContent: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    padding: 20,
    display: "flex",
  },
});

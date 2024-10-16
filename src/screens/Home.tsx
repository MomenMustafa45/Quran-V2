import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TabsNavigation from "../components/UI/TabsNavigation/TabsNavigation";
import TextReg from "../components/UI/Texts/TextReg";
import {
  checkForDownloadedAudio,
  fetchAndDownloadAudioForAllPages,
  loadWordsAndAudio,
} from "../services/audioServices";
import { WordVerseType } from "../lib/types/localVerseAndWordType";
import CustomDrawerHeader from "../components/UI/CustomDrawerHeader/CustomDrawerHeader";
import { saveBookmark } from "../services/bookmarkServices";
import { useRoute } from "@react-navigation/native";
import playSoundsFromPaths, { stopPlayback } from "../services/playSound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IndexModal from "../components/UI/IndexModal/IndexModal";
import JuzModal from "../components/UI/JuzModal/JuzModal";
import SurahsModal from "../components/UI/SurahsModal/SurahsModal";
import PageQuran from "../components/UI/PageQuran/PageQuran";
import { fetchAndStoreQuranPages } from "../services/quranPagesServices";
import * as FileSystem from "expo-file-system";
import SearchModal from "../components/UI/SearchModal/SearchModal";

export type VerseType = {
  chapter_number: number;
  id: number;
  img_coords: string;
  img_url: string;
  page_number: number;
  text_imlaei_simple: string;
  verse_number: number;
};

const width = Dimensions.get("window").width;
const Home = () => {
  const [quranPagesPaths, setQuranPagesPaths] = useState<string[]>([]);
  const [wordsVerses, setWordsVerses] = useState<WordVerseType[]>([]);
  const [pageData, setPageData] = useState<Record<string, any>>({});
  const [pageIndex, setPageIndex] = useState(1);

  // progress percentage
  const [progressImages, setProgressImages] = useState(0); // For progress bar
  const [gettingMoreAudiosProgress, setGettingMoreAudiosProgress] = useState(0);
  // loading status
  const [isLoadingImages, setIsLoadingImages] = useState(true); // For loading indicator
  const [isGettingMoreAudios, setIsGettingMoreAudios] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // modals

  const [surahModal, setSurahModal] = useState(false);
  const [juzModal, setJuzModal] = useState(false);
  const [modalVisibleSearch, setModalVisibleSearch] = useState(false);

  // ref
  const flatListRef = useRef<FlatList>(null);

  // route params
  const { params }: any = useRoute();

  const getTheData = async (verseId: number, page_number: number) => {
    const wordsData = await loadWordsAndAudio({ pageNumber: page_number });

    if (wordsData.length == 0) {
      const wordsData = await fetchAndDownloadAudioForAllPages({
        setIsLoadingAudios: setIsGettingMoreAudios,
        setProgressAudio: setGettingMoreAudiosProgress,
        startPage: page_number,
        TOTAL_PAGES: 1,
      });

      setWordsVerses([...wordsData]);
    } else {
      setWordsVerses([...wordsData]);
    }
  };

  const getTheDataFromPath = async (path: string) => {
    try {
      // Read the JSON file from the file path
      const pageData = await FileSystem.readAsStringAsync(path);
      return JSON.parse(pageData);
    } catch (error) {
      console.error(`Error reading data from ${path}:`, error);
      return null; // Return null or some fallback data
    }
  };

  useEffect(() => {
    // Fetch and store Quran pages when the app is first opened
    const loadQuranPages = async () => {
      try {
        const paths = await fetchAndStoreQuranPages(); // Get the array of file paths
        setQuranPagesPaths([...paths.reverse()]); // Set the paths to state
        // Load data for each page
        const dataPromises = paths.map((path) => getTheDataFromPath(path));
        const allPageData = await Promise.all(dataPromises);

        // Map paths to their corresponding data
        const pageDataMap: Record<string, any> = {};
        paths.forEach((path, index) => {
          pageDataMap[path] = allPageData[index];
        });

        setPageData(pageDataMap); // Store all page data
      } catch (error) {
        console.error("Error loading Quran pages:", error);
      } finally {
        setIsLoadingImages(false);
      }
    };

    loadQuranPages();
  }, []);

  // Fetch and download data
  useEffect(() => {
    if (wordsVerses.length <= 0) {
      getTheData(0, 1);
    }

    // for audio
    checkForDownloadedAudio({
      setIsLoadingAudios: setIsGettingMoreAudios,
      setProgressAudio: setGettingMoreAudiosProgress,
      TOTAL_PAGES: 1,
      startPage: 1,
    });
  }, []);

  // params scroll to wanted page
  useEffect(() => {
    if (params?.pageNumber) {
      scrollToIndex(params.pageNumber);
    }
  }, [params]);

  const handleBookmark = async (currentIndex: number) => {
    saveBookmark({ pageNumber: currentIndex }); // Saving bookmark with page number
  };

  // Function to scroll to a specific index in FlatList
  const scrollToIndex = (index: number) => {
    setIsScrolling(true);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: 604 - index, // index of the item to scroll to
        animated: false,
        viewPosition: 0.5, // this positions the item in the middle of the screen
      });
    }
    getTheData(0, index);
    setIsScrolling(false);
  };

  const handleWebViewMessage = useCallback(
    async (event: any, index: number) => {
      const message = event.nativeEvent.data;
      const levelNumber = await AsyncStorage.getItem("levelSound");
      try {
        if (levelNumber) {
          if (isGettingMoreAudios) {
            return;
          } else {
            const verseObject = JSON.parse(message);
            stopPlayback();
            if (levelNumber == "1") {
              playSoundsFromPaths([verseObject.local_audio_path]);
            } else if (levelNumber == "2") {
              const soundArr = wordsVerses.find(
                (item) => item.id == verseObject.id + 1
              );

              playSoundsFromPaths([
                verseObject.local_audio_path,
                soundArr?.local_audio_path,
              ]);
            } else {
              const soundArr = Array.from(
                new Set(
                  wordsVerses
                    .filter(
                      (item) =>
                        item.verse_id === verseObject.verse_id &&
                        item.local_audio_path != undefined
                    )
                    .map((item) => item.local_audio_path)
                )
              );

              playSoundsFromPaths([...soundArr]);
            }
          }
        }
      } catch (error) {
        console.warn("Failed to parse message:", message);
      }
    },
    [isGettingMoreAudios, wordsVerses]
  );

  if (isLoadingImages) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#159C3E" />
        <TextReg>جاري تحميل البيانات...</TextReg>
        <TextReg>
          <>{Math.floor(progressImages * 100)}%</>
        </TextReg>
      </View>
    );
  }

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    const data = pageData[item];

    if (!data) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#159C3E" />
        </View>
      );
    }

    return (
      <View className="w-screen p-2">
        <PageQuran dataPage={data} pageNumber={604 - index} />
      </View>
    );
  };

  return (
    <>
      <CustomDrawerHeader
        setJuzModal={() => setJuzModal(true)}
        setModalVisibleSurah={() => setSurahModal(true)}
        bookmarkHandler={() => handleBookmark(0)}
      />
      <View
        className=" relative flex-1 bg-white"
        style={{ direction: "rtl", height: "100%" }}
      >
        {isGettingMoreAudios && (
          <View className="w-full bg-[#159C3E] flex-row justify-center items-center">
            <ActivityIndicator size="small" color="#fff" />
            <TextReg styles="text-xs mx-2 text-white text-bold pt-1">
              جاري تحميل الصوتيات
            </TextReg>
          </View>
        )}
        <View className="flex-1">
          <FlatList
            pagingEnabled
            horizontal
            ref={flatListRef}
            directionalLockEnabled={false}
            onMomentumScrollEnd={async (event) => {
              const index = Math.floor(
                event.nativeEvent.contentOffset.x / width
              );
            }}
            data={quranPagesPaths}
            initialScrollIndex={603}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            keyExtractor={(item) => item}
            renderItem={renderItem}
            initialNumToRender={5}
            maxToRenderPerBatch={15}
            windowSize={5}
          />
        </View>
      </View>

      {/* juz modal */}
      <JuzModal
        goToPage={scrollToIndex}
        modalVisible={juzModal}
        setModalVisible={setJuzModal}
      />
      {/* surah modal */}
      <SurahsModal
        goToPage={scrollToIndex}
        modalVisible={surahModal}
        setModalVisible={setSurahModal}
      />
      {/* search */}
      <SearchModal
        goToPage={scrollToIndex}
        modalVisible={modalVisibleSearch}
        setModalVisible={setModalVisibleSearch}
      />
      <TabsNavigation setModalSearch={() => setModalVisibleSearch(true)} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: "red",
    padding: 0,
    height: "100%",
    width: width,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 0,
  },
  modalContent: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
});

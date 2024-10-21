import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TabsNavigation from "../components/UI/TabsNavigation/TabsNavigation";
import TextReg from "../components/UI/Texts/TextReg";
import {
  checkForDownloadedAudio,
  fetchAndDownloadAudioForAllPages,
} from "../services/audioServices";
import { WordVerseType } from "../lib/types/localVerseAndWordType";
import CustomDrawerHeader from "../components/UI/CustomDrawerHeader/CustomDrawerHeader";
import { saveBookmark } from "../services/bookmarkServices";
import { useRoute } from "@react-navigation/native";
import playSoundsFromPaths, { stopPlayback } from "../services/playSound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JuzModal from "../components/UI/JuzModal/JuzModal";
import SurahsModal from "../components/UI/SurahsModal/SurahsModal";
import PageQuran from "../components/UI/PageQuran/PageQuran";
import { fetchAndStoreQuranPages } from "../services/quranPagesServices";
import * as FileSystem from "expo-file-system";
import SearchModal from "../components/UI/SearchModal/SearchModal";
import { QuranVerse } from "../lib/types/quranWordType";
import frameImg from "../../assets/images/frame-mohaf3.png";

const width = Dimensions.get("window").width;

const Home = () => {
  const [quranPagesPaths, setQuranPagesPaths] = useState<string[]>([]);
  const [wordsVerses, setWordsVerses] = useState<WordVerseType[]>([]);
  const [pageData, setPageData] = useState<Record<string, any>>({});
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const [isGettingMoreAudios, setIsGettingMoreAudios] = useState(false);

  const [surahModal, setSurahModal] = useState(false);
  const [juzModal, setJuzModal] = useState(false);
  const [modalVisibleSearch, setModalVisibleSearch] = useState(false);

  const flatListRef = useRef<FlatList>(null);
  const { params }: any = useRoute();

  let currentIndex = quranPagesPaths.length - 1;
  const getTheDataFromPath = useCallback(async (path: string) => {
    try {
      const pageData = await FileSystem.readAsStringAsync(path);
      return JSON.parse(pageData);
    } catch (error) {
      console.error(`Error reading data from ${path}:`, error);
      return null;
    }
  }, []);

  useEffect(() => {
    const loadQuranPages = async () => {
      try {
        const paths = await fetchAndStoreQuranPages();
        setQuranPagesPaths([...paths.reverse()]);
        const dataPromises = paths.map((path) => getTheDataFromPath(path));
        const allPageData = await Promise.all(dataPromises);
        const pageDataMap = paths.reduce((map, path, index) => {
          map[path] = allPageData[index];
          return map;
        }, {} as Record<string, any>);
        setPageData(pageDataMap);
      } catch (error) {
        console.error("Error loading Quran pages:", error);
      } finally {
        setIsLoadingImages(false);
      }
    };

    loadQuranPages();
  }, [getTheDataFromPath]);

  useEffect(() => {
    if (wordsVerses?.length === 0) {
      // getTheData(1);
    }
    checkForDownloadedAudio({
      setIsLoadingAudios: setIsGettingMoreAudios,
      startPage: 1,
      TOTAL_PAGES: 1,
    });
  }, []);

  useEffect(() => {
    if (params?.pageNumber) {
      scrollToIndex(params.pageNumber);
    }
  }, [params]);

  const handleBookmark = async (currentIndex: number) => {
    saveBookmark({ pageNumber: currentIndex });
  };

  const scrollToIndex = useCallback((index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: 604 - index,
        animated: false,
        viewPosition: 0.5,
      });
    }
    // getTheData(index);
  }, []);

  const listenHandler = useCallback(
    async (
      quranVerseItem: QuranVerse,
      quranVerses: QuranVerse[],
      pageNumber: number
    ) => {
      const levelNumber = await AsyncStorage.getItem("levelSound");

      try {
        if (levelNumber) {
          stopPlayback();

          let soundArr: string[] = [];

          // Logic for different levels
          if (levelNumber === "1") {
            // Level 1: Only the pressed object's path
            soundArr = quranVerses
              .filter((item) => item.id === quranVerseItem.id && item.audio_url)
              .map(
                (item) =>
                  `file:///data/user/0/host.exp.exponent/files//w${item.id}-v${item.verse_id}-p${item.page_number}.mp3`
              );
          } else if (levelNumber === "2") {
            soundArr = quranVerses
              .filter(
                (item) =>
                  (item.id === quranVerseItem.id ||
                    item.id === quranVerseItem.id + 1) &&
                  item.audio_url
              )
              .map(
                (item) =>
                  `file:///data/user/0/host.exp.exponent/files//w${item.id}-v${item.verse_id}-p${item.page_number}.mp3`
              );
          } else if (levelNumber === "3") {
            // Level 3: All words that share the same verse_id
            soundArr = quranVerses
              .filter(
                (item) =>
                  item.verse_id === quranVerseItem.verse_id && item.audio_url
              )
              .map(
                (item) =>
                  `file:///data/user/0/host.exp.exponent/files//w${item.id}-v${item.verse_id}-p${item.page_number}.mp3`
              );
          }

          console.log("Sound paths:", soundArr);

          const missingFiles = [];

          // Check if each file exists
          for (const soundPath of soundArr) {
            const fileInfo = await FileSystem.getInfoAsync(soundPath);
            if (!fileInfo.exists) {
              console.log(`File does not exist: ${soundPath}`);
              missingFiles.push(soundPath); // Collect missing files
            } else {
              console.log(`File exists: ${soundPath}`);
            }
          }

          // If there are missing files, download them
          if (missingFiles.length > 0) {
            console.log("Downloading missing audio files...");
            await fetchAndDownloadAudioForAllPages({
              setIsLoadingAudios: setIsGettingMoreAudios,
              startPage: pageNumber,
              TOTAL_PAGES: 1,
            });
          }

          // After downloading, recheck all files and then play them
          const allFilesExist = await Promise.all(
            soundArr.map(async (soundPath) => {
              const fileInfo = await FileSystem.getInfoAsync(soundPath);
              return fileInfo.exists;
            })
          );

          if (allFilesExist.every((exists) => exists)) {
            console.log("All files are ready, playing sounds...");
            await playSoundsFromPaths(soundArr); // Play sounds
          } else {
            console.warn("Some files are still missing after download.");
          }
        }
      } catch (error) {
        console.warn("Error in listenHandler:", error);
      }
    },
    []
  );

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      const data = pageData[item];
      return data ? (
        <View style={styles.pageContainer}>
          <PageQuran
            dataPage={data}
            pageNumber={604 - index}
            listenHandler={listenHandler}
          />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#159C3E" />
        </View>
      );
    },
    [pageData]
  );

  if (isLoadingImages) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#159C3E" />
        <TextReg>جاري تحميل البيانات...</TextReg>
      </View>
    );
  }

  return (
    <>
      <CustomDrawerHeader
        setJuzModal={() => setJuzModal(true)}
        setModalVisibleSurah={() => setSurahModal(true)}
        bookmarkHandler={() => handleBookmark(currentIndex)}
      />
      <ImageBackground
        source={frameImg}
        resizeMode="stretch"
        style={styles.container}
      >
        {/* <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={frameImg}
            style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
          />
        </View> */}
        {isGettingMoreAudios && (
          <View style={styles.audioLoading}>
            <ActivityIndicator size="small" color="#fff" />
            <TextReg styles="text-xs mx-2 text-white text-bold pt-1">
              جاري تحميل الصوتيات
            </TextReg>
          </View>
        )}
        <FlatList
          pagingEnabled
          horizontal
          ref={flatListRef}
          data={quranPagesPaths}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          initialNumToRender={5}
          maxToRenderPerBatch={15}
          windowSize={5}
          onMomentumScrollEnd={async (event) => {
            const index = Math.floor(event.nativeEvent.contentOffset.x / width);
            currentIndex = index;
          }}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          initialScrollIndex={quranPagesPaths.length - 1}
        />
      </ImageBackground>

      <JuzModal
        goToPage={scrollToIndex}
        modalVisible={juzModal}
        setModalVisible={setJuzModal}
      />
      <SurahsModal
        goToPage={scrollToIndex}
        modalVisible={surahModal}
        setModalVisible={setSurahModal}
      />
      <SearchModal
        goToPage={scrollToIndex}
        modalVisible={modalVisibleSearch}
        setModalVisible={setModalVisibleSearch}
      />
      <TabsNavigation
        setModalSearch={() => setModalVisibleSearch(true)}
        indexOfPage={currentIndex}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "rtl",
    position: "relative",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioLoading: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 40,
    top: -16,
  },
  pageContainer: {
    width,
    padding: 2,
  },
});

import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setTextColor } from "../../store/reducers/textSoundColor";
import { setTextBgColor } from "../../store/reducers/textbgColor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setPageColor } from "../../store/reducers/pageColorSlice";

export const useGetColors = () => {
  const dispatch = useAppDispatch();

  const getColorsFromStorage = async () => {
    try {
      const textColor = await AsyncStorage.getItem("text-color");
      const textBgColor = await AsyncStorage.getItem("text-bg");
      const pageColor = await AsyncStorage.getItem("page-color");

      if (textColor) dispatch(setTextColor(textColor));
      if (textBgColor) dispatch(setTextBgColor(textBgColor));
      if (pageColor) dispatch(setPageColor(pageColor));
    } catch (error) {}
  };

  useEffect(() => {
    getColorsFromStorage();
  }, []);
};

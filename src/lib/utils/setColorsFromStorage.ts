import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setTextColor } from "../../store/reducers/textSoundColor";
import { setTextBgColor } from "../../store/reducers/textbgColor";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useGetColors = () => {
  const dispatch = useAppDispatch();

  const getColorsFromStorage = async () => {
    try {
      const textColor = await AsyncStorage.getItem("text-color");
      const textBgColor = await AsyncStorage.getItem("text-bg");
      if (textColor) dispatch(setTextColor(textColor));
      if (textBgColor) dispatch(setTextBgColor(textBgColor));
    } catch (error) {}
  };

  useEffect(() => {
    getColorsFromStorage();
  }, []);
};

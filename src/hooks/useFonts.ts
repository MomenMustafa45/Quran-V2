import * as Font from "expo-font";

const useFonts = async (fontNames: string[]) => {
  const fontsToLoad: any = {};
  fontNames.forEach((fontName) => {
    switch (fontName) {
      case "Cairo-Regular":
        fontsToLoad.cairoReg = require("../../assets/fonts/CairoRegular.ttf");
        break;
      case "Cairo-Bold":
        fontsToLoad.cairoBold = require("../../assets/fonts/CairoBold.ttf");
        break;
      case "Cairo-SemiBold":
        fontsToLoad.cairoSemiBold = require("../../assets/fonts/CairoSemiBold.ttf");
        break;
      case "QCF-BSML":
        fontsToLoad.surahNames = require("../../assets/fonts/QCF-BSML.ttf");
        break;
      default:
        fontsToLoad.surahNames = require("../../assets/fonts/QCF-BSML.ttf");
        break;
    }
  });
  return Font.loadAsync(fontsToLoad);
};

export default useFonts;

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

      case "QCF-1":
        fontsToLoad["QCF-1"] = require("../../assets/quran-fonts/QCF2001.ttf");
        break;
      case "QCF-2":
        fontsToLoad["QCF-2"] = require("../../assets/quran-fonts/QCF2002.ttf");
        break;
      case "QCF-3":
        fontsToLoad["QCF-3"] = require("../../assets/quran-fonts/QCF2003.ttf");
        break;
      case "QCF-4":
        fontsToLoad["QCF-4"] = require("../../assets/quran-fonts/QCF2004.ttf");
        break;
      case "QCF-5":
        fontsToLoad["QCF-5"] = require("../../assets/quran-fonts/QCF2005.ttf");
        break;
      case "QCF-6":
        fontsToLoad["QCF-6"] = require("../../assets/quran-fonts/QCF2006.ttf");
        break;
      case "QCF-7":
        fontsToLoad["QCF-7"] = require("../../assets/quran-fonts/QCF2007.ttf");
        break;
      case "QCF-8":
        fontsToLoad["QCF-8"] = require("../../assets/quran-fonts/QCF2008.ttf");
        break;
      case "QCF-9":
        fontsToLoad["QCF-9"] = require("../../assets/quran-fonts/QCF2009.ttf");
        break;
      case "QCF-10":
        fontsToLoad["QCF-10"] = require("../../assets/quran-fonts/QCF2010.ttf");
        break;
      case "QCF-11":
        fontsToLoad["QCF-11"] = require("../../assets/quran-fonts/QCF2011.ttf");
        break;
      case "QCF-12":
        fontsToLoad["QCF-12"] = require("../../assets/quran-fonts/QCF2012.ttf");
        break;
      case "QCF-13":
        fontsToLoad["QCF-13"] = require("../../assets/quran-fonts/QCF2013.ttf");
        break;
      case "QCF-14":
        fontsToLoad["QCF-14"] = require("../../assets/quran-fonts/QCF2014.ttf");
        break;
      case "QCF-15":
        fontsToLoad["QCF-15"] = require("../../assets/quran-fonts/QCF2015.ttf");
        break;
      case "QCF-16":
        fontsToLoad["QCF-16"] = require("../../assets/quran-fonts/QCF2016.ttf");
        break;
      case "QCF-17":
        fontsToLoad["QCF-17"] = require("../../assets/quran-fonts/QCF2017.ttf");
        break;
      case "QCF-18":
        fontsToLoad["QCF-18"] = require("../../assets/quran-fonts/QCF2018.ttf");
        break;
      case "QCF-19":
        fontsToLoad["QCF-19"] = require("../../assets/quran-fonts/QCF2019.ttf");
        break;
      case "QCF-20":
        fontsToLoad["QCF-20"] = require("../../assets/quran-fonts/QCF2020.ttf");
        break;
      case "QCF-21":
        fontsToLoad["QCF-21"] = require("../../assets/quran-fonts/QCF2021.ttf");
        break;
      case "QCF-22":
        fontsToLoad["QCF-22"] = require("../../assets/quran-fonts/QCF2022.ttf");
        break;
      case "QCF-23":
        fontsToLoad["QCF-23"] = require("../../assets/quran-fonts/QCF2023.ttf");
        break;
      case "QCF-24":
        fontsToLoad["QCF-24"] = require("../../assets/quran-fonts/QCF2024.ttf");
        break;
      case "QCF-25":
        fontsToLoad["QCF-25"] = require("../../assets/quran-fonts/QCF2025.ttf");
        break;
      case "QCF-26":
        fontsToLoad["QCF-26"] = require("../../assets/quran-fonts/QCF2026.ttf");
        break;
      case "QCF-27":
        fontsToLoad["QCF-27"] = require("../../assets/quran-fonts/QCF2027.ttf");
        break;
      case "QCF-28":
        fontsToLoad["QCF-28"] = require("../../assets/quran-fonts/QCF2028.ttf");
        break;
      case "QCF-29":
        fontsToLoad["QCF-29"] = require("../../assets/quran-fonts/QCF2029.ttf");
        break;
      case "QCF-30":
        fontsToLoad["QCF-30"] = require("../../assets/quran-fonts/QCF2030.ttf");
        break;
      case "QCF-31":
        fontsToLoad["QCF-31"] = require("../../assets/quran-fonts/QCF2031.ttf");
        break;
      case "QCF-32":
        fontsToLoad["QCF-32"] = require("../../assets/quran-fonts/QCF2032.ttf");
        break;
      case "QCF-33":
        fontsToLoad["QCF-33"] = require("../../assets/quran-fonts/QCF2033.ttf");
        break;
      case "QCF-34":
        fontsToLoad["QCF-34"] = require("../../assets/quran-fonts/QCF2034.ttf");
        break;
      case "QCF-35":
        fontsToLoad["QCF-35"] = require("../../assets/quran-fonts/QCF2035.ttf");
        break;
      case "QCF-36":
        fontsToLoad["QCF-36"] = require("../../assets/quran-fonts/QCF2036.ttf");
        break;
      case "QCF-37":
        fontsToLoad["QCF-37"] = require("../../assets/quran-fonts/QCF2037.ttf");
        break;
      case "QCF-38":
        fontsToLoad["QCF-38"] = require("../../assets/quran-fonts/QCF2038.ttf");
        break;
      case "QCF-39":
        fontsToLoad["QCF-39"] = require("../../assets/quran-fonts/QCF2039.ttf");
        break;
      case "QCF-40":
        fontsToLoad["QCF-40"] = require("../../assets/quran-fonts/QCF2040.ttf");
        break;
      case "QCF-41":
        fontsToLoad["QCF-41"] = require("../../assets/quran-fonts/QCF2041.ttf");
        break;
      case "QCF-42":
        fontsToLoad["QCF-42"] = require("../../assets/quran-fonts/QCF2042.ttf");
        break;
      case "QCF-43":
        fontsToLoad["QCF-43"] = require("../../assets/quran-fonts/QCF2043.ttf");
        break;
      case "QCF-44":
        fontsToLoad["QCF-44"] = require("../../assets/quran-fonts/QCF2044.ttf");
        break;
      case "QCF-45":
        fontsToLoad["QCF-45"] = require("../../assets/quran-fonts/QCF2045.ttf");
        break;
      case "QCF-46":
        fontsToLoad["QCF-46"] = require("../../assets/quran-fonts/QCF2046.ttf");
        break;
      case "QCF-47":
        fontsToLoad["QCF-47"] = require("../../assets/quran-fonts/QCF2047.ttf");
        break;
      case "QCF-48":
        fontsToLoad["QCF-48"] = require("../../assets/quran-fonts/QCF2048.ttf");
        break;
      case "QCF-49":
        fontsToLoad["QCF-49"] = require("../../assets/quran-fonts/QCF2049.ttf");
        break;
      case "QCF-50":
        fontsToLoad["QCF-50"] = require("../../assets/quran-fonts/QCF2050.ttf");
        break;
      case "QCF-51":
        fontsToLoad["QCF-51"] = require("../../assets/quran-fonts/QCF2051.ttf");
        break;
      case "QCF-52":
        fontsToLoad["QCF-52"] = require("../../assets/quran-fonts/QCF2052.ttf");
        break;
      case "QCF-53":
        fontsToLoad["QCF-53"] = require("../../assets/quran-fonts/QCF2053.ttf");
        break;
      case "QCF-54":
        fontsToLoad["QCF-54"] = require("../../assets/quran-fonts/QCF2054.ttf");
        break;
      case "QCF-55":
        fontsToLoad["QCF-55"] = require("../../assets/quran-fonts/QCF2055.ttf");
        break;
      case "QCF-56":
        fontsToLoad["QCF-56"] = require("../../assets/quran-fonts/QCF2056.ttf");
        break;
      case "QCF-57":
        fontsToLoad["QCF-57"] = require("../../assets/quran-fonts/QCF2057.ttf");
        break;
      case "QCF-58":
        fontsToLoad["QCF-58"] = require("../../assets/quran-fonts/QCF2058.ttf");
        break;
      case "QCF-59":
        fontsToLoad["QCF-59"] = require("../../assets/quran-fonts/QCF2059.ttf");
        break;
      case "QCF-60":
        fontsToLoad["QCF-60"] = require("../../assets/quran-fonts/QCF2060.ttf");
        break;
      case "QCF-61":
        fontsToLoad["QCF-61"] = require("../../assets/quran-fonts/QCF2061.ttf");
        break;
      case "QCF-62":
        fontsToLoad["QCF-62"] = require("../../assets/quran-fonts/QCF2062.ttf");
        break;
      case "QCF-63":
        fontsToLoad["QCF-63"] = require("../../assets/quran-fonts/QCF2063.ttf");
        break;
      case "QCF-64":
        fontsToLoad["QCF-64"] = require("../../assets/quran-fonts/QCF2064.ttf");
        break;
      case "QCF-65":
        fontsToLoad["QCF-65"] = require("../../assets/quran-fonts/QCF2065.ttf");
        break;
      case "QCF-66":
        fontsToLoad["QCF-66"] = require("../../assets/quran-fonts/QCF2066.ttf");
        break;
      case "QCF-67":
        fontsToLoad["QCF-67"] = require("../../assets/quran-fonts/QCF2067.ttf");
        break;
      case "QCF-68":
        fontsToLoad["QCF-68"] = require("../../assets/quran-fonts/QCF2068.ttf");
        break;
      case "QCF-69":
        fontsToLoad["QCF-69"] = require("../../assets/quran-fonts/QCF2069.ttf");
        break;
      case "QCF-70":
        fontsToLoad["QCF-70"] = require("../../assets/quran-fonts/QCF2070.ttf");
        break;
      case "QCF-71":
        fontsToLoad["QCF-71"] = require("../../assets/quran-fonts/QCF2071.ttf");
        break;
      case "QCF-72":
        fontsToLoad["QCF-72"] = require("../../assets/quran-fonts/QCF2072.ttf");
        break;
      case "QCF-73":
        fontsToLoad["QCF-73"] = require("../../assets/quran-fonts/QCF2073.ttf");
        break;
      case "QCF-74":
        fontsToLoad["QCF-74"] = require("../../assets/quran-fonts/QCF2074.ttf");
        break;
      case "QCF-75":
        fontsToLoad["QCF-75"] = require("../../assets/quran-fonts/QCF2075.ttf");
        break;
      case "QCF-76":
        fontsToLoad["QCF-76"] = require("../../assets/quran-fonts/QCF2076.ttf");
        break;
      case "QCF-77":
        fontsToLoad["QCF-77"] = require("../../assets/quran-fonts/QCF2077.ttf");
        break;
      case "QCF-78":
        fontsToLoad["QCF-78"] = require("../../assets/quran-fonts/QCF2078.ttf");
        break;
      case "QCF-79":
        fontsToLoad["QCF-79"] = require("../../assets/quran-fonts/QCF2079.ttf");
        break;
      case "QCF-80":
        fontsToLoad["QCF-80"] = require("../../assets/quran-fonts/QCF2080.ttf");
        break;
      case "QCF-81":
        fontsToLoad["QCF-81"] = require("../../assets/quran-fonts/QCF2081.ttf");
        break;
      case "QCF-82":
        fontsToLoad["QCF-82"] = require("../../assets/quran-fonts/QCF2082.ttf");
        break;
      case "QCF-83":
        fontsToLoad["QCF-83"] = require("../../assets/quran-fonts/QCF2083.ttf");
        break;
      case "QCF-84":
        fontsToLoad["QCF-84"] = require("../../assets/quran-fonts/QCF2084.ttf");
        break;
      case "QCF-85":
        fontsToLoad["QCF-85"] = require("../../assets/quran-fonts/QCF2085.ttf");
        break;
      case "QCF-86":
        fontsToLoad["QCF-86"] = require("../../assets/quran-fonts/QCF2086.ttf");
        break;
      case "QCF-87":
        fontsToLoad["QCF-87"] = require("../../assets/quran-fonts/QCF2087.ttf");
        break;
      case "QCF-88":
        fontsToLoad["QCF-88"] = require("../../assets/quran-fonts/QCF2088.ttf");
        break;
      case "QCF-89":
        fontsToLoad["QCF-89"] = require("../../assets/quran-fonts/QCF2089.ttf");
        break;
      case "QCF-90":
        fontsToLoad["QCF-90"] = require("../../assets/quran-fonts/QCF2090.ttf");
        break;
      case "QCF-91":
        fontsToLoad["QCF-91"] = require("../../assets/quran-fonts/QCF2091.ttf");
        break;
      case "QCF-92":
        fontsToLoad["QCF-92"] = require("../../assets/quran-fonts/QCF2092.ttf");
        break;
      case "QCF-93":
        fontsToLoad["QCF-93"] = require("../../assets/quran-fonts/QCF2093.ttf");
        break;
      case "QCF-94":
        fontsToLoad["QCF-94"] = require("../../assets/quran-fonts/QCF2094.ttf");
        break;
      case "QCF-95":
        fontsToLoad["QCF-95"] = require("../../assets/quran-fonts/QCF2095.ttf");
        break;
      case "QCF-96":
        fontsToLoad["QCF-96"] = require("../../assets/quran-fonts/QCF2096.ttf");
        break;
      case "QCF-97":
        fontsToLoad["QCF-97"] = require("../../assets/quran-fonts/QCF2097.ttf");
        break;
      case "QCF-98":
        fontsToLoad["QCF-98"] = require("../../assets/quran-fonts/QCF2098.ttf");
        break;
      case "QCF-99":
        fontsToLoad["QCF-99"] = require("../../assets/quran-fonts/QCF2099.ttf");
        break;
      case "QCF-100":
        fontsToLoad[
          "QCF-100"
        ] = require("../../assets/quran-fonts/QCF2100.ttf");
        break;
      case "QCF-101":
        fontsToLoad[
          "QCF-101"
        ] = require("../../assets/quran-fonts/QCF2101.ttf");
        break;
      case "QCF-102":
        fontsToLoad[
          "QCF-102"
        ] = require("../../assets/quran-fonts/QCF2102.ttf");
        break;
      case "QCF-103":
        fontsToLoad[
          "QCF-103"
        ] = require("../../assets/quran-fonts/QCF2103.ttf");
        break;
      case "QCF-104":
        fontsToLoad[
          "QCF-104"
        ] = require("../../assets/quran-fonts/QCF2104.ttf");
        break;
      case "QCF-105":
        fontsToLoad[
          "QCF-105"
        ] = require("../../assets/quran-fonts/QCF2105.ttf");
        break;
      case "QCF-106":
        fontsToLoad[
          "QCF-106"
        ] = require("../../assets/quran-fonts/QCF2106.ttf");
        break;
      case "QCF-107":
        fontsToLoad[
          "QCF-107"
        ] = require("../../assets/quran-fonts/QCF2107.ttf");
        break;
      case "QCF-108":
        fontsToLoad[
          "QCF-108"
        ] = require("../../assets/quran-fonts/QCF2108.ttf");
        break;
      case "QCF-109":
        fontsToLoad[
          "QCF-109"
        ] = require("../../assets/quran-fonts/QCF2109.ttf");
        break;
      case "QCF-110":
        fontsToLoad[
          "QCF-110"
        ] = require("../../assets/quran-fonts/QCF2110.ttf");
        break;
      case "QCF-111":
        fontsToLoad[
          "QCF-111"
        ] = require("../../assets/quran-fonts/QCF2111.ttf");
        break;
      case "QCF-112":
        fontsToLoad[
          "QCF-112"
        ] = require("../../assets/quran-fonts/QCF2112.ttf");
        break;
      case "QCF-113":
        fontsToLoad[
          "QCF-113"
        ] = require("../../assets/quran-fonts/QCF2113.ttf");
        break;
      case "QCF-114":
        fontsToLoad[
          "QCF-114"
        ] = require("../../assets/quran-fonts/QCF2114.ttf");
        break;
      case "QCF-115":
        fontsToLoad[
          "QCF-115"
        ] = require("../../assets/quran-fonts/QCF2115.ttf");
        break;
      case "QCF-116":
        fontsToLoad[
          "QCF-116"
        ] = require("../../assets/quran-fonts/QCF2116.ttf");
        break;
      case "QCF-117":
        fontsToLoad[
          "QCF-117"
        ] = require("../../assets/quran-fonts/QCF2117.ttf");
        break;
      case "QCF-118":
        fontsToLoad[
          "QCF-118"
        ] = require("../../assets/quran-fonts/QCF2118.ttf");
        break;
      case "QCF-119":
        fontsToLoad[
          "QCF-119"
        ] = require("../../assets/quran-fonts/QCF2119.ttf");
        break;
      case "QCF-120":
        fontsToLoad[
          "QCF-120"
        ] = require("../../assets/quran-fonts/QCF2120.ttf");
        break;
      case "QCF-121":
        fontsToLoad[
          "QCF-121"
        ] = require("../../assets/quran-fonts/QCF2121.ttf");
        break;
      case "QCF-122":
        fontsToLoad[
          "QCF-122"
        ] = require("../../assets/quran-fonts/QCF2122.ttf");
        break;
      case "QCF-123":
        fontsToLoad[
          "QCF-123"
        ] = require("../../assets/quran-fonts/QCF2123.ttf");
        break;
      case "QCF-124":
        fontsToLoad[
          "QCF-124"
        ] = require("../../assets/quran-fonts/QCF2124.ttf");
        break;
      case "QCF-125":
        fontsToLoad[
          "QCF-125"
        ] = require("../../assets/quran-fonts/QCF2125.ttf");
        break;
      case "QCF-126":
        fontsToLoad[
          "QCF-126"
        ] = require("../../assets/quran-fonts/QCF2126.ttf");
        break;
      case "QCF-127":
        fontsToLoad[
          "QCF-127"
        ] = require("../../assets/quran-fonts/QCF2127.ttf");
        break;
      case "QCF-128":
        fontsToLoad[
          "QCF-128"
        ] = require("../../assets/quran-fonts/QCF2128.ttf");
        break;
      case "QCF-129":
        fontsToLoad[
          "QCF-129"
        ] = require("../../assets/quran-fonts/QCF2129.ttf");
        break;
      case "QCF-130":
        fontsToLoad[
          "QCF-130"
        ] = require("../../assets/quran-fonts/QCF2130.ttf");
        break;
      case "QCF-131":
        fontsToLoad[
          "QCF-131"
        ] = require("../../assets/quran-fonts/QCF2131.ttf");
        break;
      case "QCF-132":
        fontsToLoad[
          "QCF-132"
        ] = require("../../assets/quran-fonts/QCF2132.ttf");
        break;
      case "QCF-133":
        fontsToLoad[
          "QCF-133"
        ] = require("../../assets/quran-fonts/QCF2133.ttf");
        break;
      case "QCF-134":
        fontsToLoad[
          "QCF-134"
        ] = require("../../assets/quran-fonts/QCF2134.ttf");
        break;
      case "QCF-135":
        fontsToLoad[
          "QCF-135"
        ] = require("../../assets/quran-fonts/QCF2135.ttf");
        break;
      case "QCF-136":
        fontsToLoad[
          "QCF-136"
        ] = require("../../assets/quran-fonts/QCF2136.ttf");
        break;
      case "QCF-137":
        fontsToLoad[
          "QCF-137"
        ] = require("../../assets/quran-fonts/QCF2137.ttf");
        break;
      case "QCF-138":
        fontsToLoad[
          "QCF-138"
        ] = require("../../assets/quran-fonts/QCF2138.ttf");
        break;
      case "QCF-139":
        fontsToLoad[
          "QCF-139"
        ] = require("../../assets/quran-fonts/QCF2139.ttf");
        break;
      case "QCF-140":
        fontsToLoad[
          "QCF-140"
        ] = require("../../assets/quran-fonts/QCF2140.ttf");
        break;
      case "QCF-141":
        fontsToLoad[
          "QCF-141"
        ] = require("../../assets/quran-fonts/QCF2141.ttf");
        break;
      case "QCF-142":
        fontsToLoad[
          "QCF-142"
        ] = require("../../assets/quran-fonts/QCF2142.ttf");
        break;
      case "QCF-143":
        fontsToLoad[
          "QCF-143"
        ] = require("../../assets/quran-fonts/QCF2143.ttf");
        break;
      case "QCF-144":
        fontsToLoad[
          "QCF-144"
        ] = require("../../assets/quran-fonts/QCF2144.ttf");
        break;
      case "QCF-145":
        fontsToLoad[
          "QCF-145"
        ] = require("../../assets/quran-fonts/QCF2145.ttf");
        break;
      case "QCF-146":
        fontsToLoad[
          "QCF-146"
        ] = require("../../assets/quran-fonts/QCF2146.ttf");
        break;
      case "QCF-147":
        fontsToLoad[
          "QCF-147"
        ] = require("../../assets/quran-fonts/QCF2147.ttf");
        break;
      case "QCF-148":
        fontsToLoad[
          "QCF-148"
        ] = require("../../assets/quran-fonts/QCF2148.ttf");
        break;
      case "QCF-149":
        fontsToLoad[
          "QCF-149"
        ] = require("../../assets/quran-fonts/QCF2149.ttf");
        break;
      case "QCF-150":
        fontsToLoad[
          "QCF-150"
        ] = require("../../assets/quran-fonts/QCF2150.ttf");
        break;
      case "QCF-151":
        fontsToLoad[
          "QCF-151"
        ] = require("../../assets/quran-fonts/QCF2151.ttf");
        break;
      case "QCF-152":
        fontsToLoad[
          "QCF-152"
        ] = require("../../assets/quran-fonts/QCF2152.ttf");
        break;
      case "QCF-153":
        fontsToLoad[
          "QCF-153"
        ] = require("../../assets/quran-fonts/QCF2153.ttf");
        break;
      case "QCF-154":
        fontsToLoad[
          "QCF-154"
        ] = require("../../assets/quran-fonts/QCF2154.ttf");
        break;
      case "QCF-155":
        fontsToLoad[
          "QCF-155"
        ] = require("../../assets/quran-fonts/QCF2155.ttf");
        break;
      case "QCF-156":
        fontsToLoad[
          "QCF-156"
        ] = require("../../assets/quran-fonts/QCF2156.ttf");
        break;
      case "QCF-157":
        fontsToLoad[
          "QCF-157"
        ] = require("../../assets/quran-fonts/QCF2157.ttf");
        break;
      case "QCF-158":
        fontsToLoad[
          "QCF-158"
        ] = require("../../assets/quran-fonts/QCF2158.ttf");
        break;
      case "QCF-159":
        fontsToLoad[
          "QCF-159"
        ] = require("../../assets/quran-fonts/QCF2159.ttf");
        break;
      case "QCF-160":
        fontsToLoad[
          "QCF-160"
        ] = require("../../assets/quran-fonts/QCF2160.ttf");
        break;
      case "QCF-161":
        fontsToLoad[
          "QCF-161"
        ] = require("../../assets/quran-fonts/QCF2161.ttf");
        break;
      case "QCF-162":
        fontsToLoad[
          "QCF-162"
        ] = require("../../assets/quran-fonts/QCF2162.ttf");
        break;
      case "QCF-163":
        fontsToLoad[
          "QCF-163"
        ] = require("../../assets/quran-fonts/QCF2163.ttf");
        break;
      case "QCF-164":
        fontsToLoad[
          "QCF-164"
        ] = require("../../assets/quran-fonts/QCF2164.ttf");
        break;
      case "QCF-165":
        fontsToLoad[
          "QCF-165"
        ] = require("../../assets/quran-fonts/QCF2165.ttf");
        break;
      case "QCF-166":
        fontsToLoad[
          "QCF-166"
        ] = require("../../assets/quran-fonts/QCF2166.ttf");
        break;
      case "QCF-167":
        fontsToLoad[
          "QCF-167"
        ] = require("../../assets/quran-fonts/QCF2167.ttf");
        break;
      case "QCF-168":
        fontsToLoad[
          "QCF-168"
        ] = require("../../assets/quran-fonts/QCF2168.ttf");
        break;
      case "QCF-169":
        fontsToLoad[
          "QCF-169"
        ] = require("../../assets/quran-fonts/QCF2169.ttf");
        break;
      case "QCF-170":
        fontsToLoad[
          "QCF-170"
        ] = require("../../assets/quran-fonts/QCF2170.ttf");
        break;
      case "QCF-171":
        fontsToLoad[
          "QCF-171"
        ] = require("../../assets/quran-fonts/QCF2171.ttf");
        break;
      case "QCF-172":
        fontsToLoad[
          "QCF-172"
        ] = require("../../assets/quran-fonts/QCF2172.ttf");
        break;
      case "QCF-173":
        fontsToLoad[
          "QCF-173"
        ] = require("../../assets/quran-fonts/QCF2173.ttf");
        break;
      case "QCF-174":
        fontsToLoad[
          "QCF-174"
        ] = require("../../assets/quran-fonts/QCF2174.ttf");
        break;
      case "QCF-175":
        fontsToLoad[
          "QCF-175"
        ] = require("../../assets/quran-fonts/QCF2175.ttf");
        break;
      case "QCF-176":
        fontsToLoad[
          "QCF-176"
        ] = require("../../assets/quran-fonts/QCF2176.ttf");
        break;
      case "QCF-177":
        fontsToLoad[
          "QCF-177"
        ] = require("../../assets/quran-fonts/QCF2177.ttf");
        break;
      case "QCF-178":
        fontsToLoad[
          "QCF-178"
        ] = require("../../assets/quran-fonts/QCF2178.ttf");
        break;
      case "QCF-179":
        fontsToLoad[
          "QCF-179"
        ] = require("../../assets/quran-fonts/QCF2179.ttf");
        break;
      case "QCF-180":
        fontsToLoad[
          "QCF-180"
        ] = require("../../assets/quran-fonts/QCF2180.ttf");
        break;
      case "QCF-181":
        fontsToLoad[
          "QCF-181"
        ] = require("../../assets/quran-fonts/QCF2181.ttf");
        break;
      case "QCF-182":
        fontsToLoad[
          "QCF-182"
        ] = require("../../assets/quran-fonts/QCF2182.ttf");
        break;
      case "QCF-183":
        fontsToLoad[
          "QCF-183"
        ] = require("../../assets/quran-fonts/QCF2183.ttf");
        break;
      case "QCF-184":
        fontsToLoad[
          "QCF-184"
        ] = require("../../assets/quran-fonts/QCF2184.ttf");
        break;
      case "QCF-185":
        fontsToLoad[
          "QCF-185"
        ] = require("../../assets/quran-fonts/QCF2185.ttf");
        break;
      case "QCF-186":
        fontsToLoad[
          "QCF-186"
        ] = require("../../assets/quran-fonts/QCF2186.ttf");
        break;
      case "QCF-187":
        fontsToLoad[
          "QCF-187"
        ] = require("../../assets/quran-fonts/QCF2187.ttf");
        break;
      case "QCF-188":
        fontsToLoad[
          "QCF-188"
        ] = require("../../assets/quran-fonts/QCF2188.ttf");
        break;
      case "QCF-189":
        fontsToLoad[
          "QCF-189"
        ] = require("../../assets/quran-fonts/QCF2189.ttf");
        break;
      case "QCF-190":
        fontsToLoad[
          "QCF-190"
        ] = require("../../assets/quran-fonts/QCF2190.ttf");
        break;
      case "QCF-191":
        fontsToLoad[
          "QCF-191"
        ] = require("../../assets/quran-fonts/QCF2191.ttf");
        break;
      case "QCF-192":
        fontsToLoad[
          "QCF-192"
        ] = require("../../assets/quran-fonts/QCF2192.ttf");
        break;
      case "QCF-193":
        fontsToLoad[
          "QCF-193"
        ] = require("../../assets/quran-fonts/QCF2193.ttf");
        break;
      case "QCF-194":
        fontsToLoad[
          "QCF-194"
        ] = require("../../assets/quran-fonts/QCF2194.ttf");
        break;
      case "QCF-195":
        fontsToLoad[
          "QCF-195"
        ] = require("../../assets/quran-fonts/QCF2195.ttf");
        break;
      case "QCF-196":
        fontsToLoad[
          "QCF-196"
        ] = require("../../assets/quran-fonts/QCF2196.ttf");
        break;
      case "QCF-197":
        fontsToLoad[
          "QCF-197"
        ] = require("../../assets/quran-fonts/QCF2197.ttf");
        break;
      case "QCF-198":
        fontsToLoad[
          "QCF-198"
        ] = require("../../assets/quran-fonts/QCF2198.ttf");
        break;
      case "QCF-199":
        fontsToLoad[
          "QCF-199"
        ] = require("../../assets/quran-fonts/QCF2199.ttf");
        break;
      case "QCF-200":
        fontsToLoad[
          "QCF-200"
        ] = require("../../assets/quran-fonts/QCF2200.ttf");
        break;
      case "QCF-201":
        fontsToLoad[
          "QCF-201"
        ] = require("../../assets/quran-fonts/QCF2201.ttf");
        break;
      case "QCF-202":
        fontsToLoad[
          "QCF-202"
        ] = require("../../assets/quran-fonts/QCF2202.ttf");
        break;
      case "QCF-203":
        fontsToLoad[
          "QCF-203"
        ] = require("../../assets/quran-fonts/QCF2203.ttf");
        break;
      case "QCF-204":
        fontsToLoad[
          "QCF-204"
        ] = require("../../assets/quran-fonts/QCF2204.ttf");
        break;
      case "QCF-205":
        fontsToLoad[
          "QCF-205"
        ] = require("../../assets/quran-fonts/QCF2205.ttf");
        break;
      case "QCF-206":
        fontsToLoad[
          "QCF-206"
        ] = require("../../assets/quran-fonts/QCF2206.ttf");
        break;
      case "QCF-207":
        fontsToLoad[
          "QCF-207"
        ] = require("../../assets/quran-fonts/QCF2207.ttf");
        break;
      case "QCF-208":
        fontsToLoad[
          "QCF-208"
        ] = require("../../assets/quran-fonts/QCF2208.ttf");
        break;
      case "QCF-209":
        fontsToLoad[
          "QCF-209"
        ] = require("../../assets/quran-fonts/QCF2209.ttf");
        break;
      case "QCF-210":
        fontsToLoad[
          "QCF-210"
        ] = require("../../assets/quran-fonts/QCF2210.ttf");
        break;
      case "QCF-211":
        fontsToLoad[
          "QCF-211"
        ] = require("../../assets/quran-fonts/QCF2211.ttf");
        break;
      case "QCF-212":
        fontsToLoad[
          "QCF-212"
        ] = require("../../assets/quran-fonts/QCF2212.ttf");
        break;
      case "QCF-213":
        fontsToLoad[
          "QCF-213"
        ] = require("../../assets/quran-fonts/QCF2213.ttf");
        break;
      case "QCF-214":
        fontsToLoad[
          "QCF-214"
        ] = require("../../assets/quran-fonts/QCF2214.ttf");
        break;
      case "QCF-215":
        fontsToLoad[
          "QCF-215"
        ] = require("../../assets/quran-fonts/QCF2215.ttf");
        break;
      case "QCF-216":
        fontsToLoad[
          "QCF-216"
        ] = require("../../assets/quran-fonts/QCF2216.ttf");
        break;
      case "QCF-217":
        fontsToLoad[
          "QCF-217"
        ] = require("../../assets/quran-fonts/QCF2217.ttf");
        break;
      case "QCF-218":
        fontsToLoad[
          "QCF-218"
        ] = require("../../assets/quran-fonts/QCF2218.ttf");
        break;
      case "QCF-219":
        fontsToLoad[
          "QCF-219"
        ] = require("../../assets/quran-fonts/QCF2219.ttf");
        break;
      case "QCF-220":
        fontsToLoad[
          "QCF-220"
        ] = require("../../assets/quran-fonts/QCF2220.ttf");
        break;
      case "QCF-221":
        fontsToLoad[
          "QCF-221"
        ] = require("../../assets/quran-fonts/QCF2221.ttf");
        break;
      case "QCF-222":
        fontsToLoad[
          "QCF-222"
        ] = require("../../assets/quran-fonts/QCF2222.ttf");
        break;
      case "QCF-223":
        fontsToLoad[
          "QCF-223"
        ] = require("../../assets/quran-fonts/QCF2223.ttf");
        break;
      case "QCF-224":
        fontsToLoad[
          "QCF-224"
        ] = require("../../assets/quran-fonts/QCF2224.ttf");
        break;
      case "QCF-225":
        fontsToLoad[
          "QCF-225"
        ] = require("../../assets/quran-fonts/QCF2225.ttf");
        break;
      case "QCF-226":
        fontsToLoad[
          "QCF-226"
        ] = require("../../assets/quran-fonts/QCF2226.ttf");
        break;
      case "QCF-227":
        fontsToLoad[
          "QCF-227"
        ] = require("../../assets/quran-fonts/QCF2227.ttf");
        break;
      case "QCF-228":
        fontsToLoad[
          "QCF-228"
        ] = require("../../assets/quran-fonts/QCF2228.ttf");
        break;
      case "QCF-229":
        fontsToLoad[
          "QCF-229"
        ] = require("../../assets/quran-fonts/QCF2229.ttf");
        break;
      case "QCF-230":
        fontsToLoad[
          "QCF-230"
        ] = require("../../assets/quran-fonts/QCF2230.ttf");
        break;
      case "QCF-231":
        fontsToLoad[
          "QCF-231"
        ] = require("../../assets/quran-fonts/QCF2231.ttf");
        break;
      case "QCF-232":
        fontsToLoad[
          "QCF-232"
        ] = require("../../assets/quran-fonts/QCF2232.ttf");
        break;
      case "QCF-233":
        fontsToLoad[
          "QCF-233"
        ] = require("../../assets/quran-fonts/QCF2233.ttf");
        break;
      case "QCF-234":
        fontsToLoad[
          "QCF-234"
        ] = require("../../assets/quran-fonts/QCF2234.ttf");
        break;
      case "QCF-235":
        fontsToLoad[
          "QCF-235"
        ] = require("../../assets/quran-fonts/QCF2235.ttf");
        break;
      case "QCF-236":
        fontsToLoad[
          "QCF-236"
        ] = require("../../assets/quran-fonts/QCF2236.ttf");
        break;
      case "QCF-237":
        fontsToLoad[
          "QCF-237"
        ] = require("../../assets/quran-fonts/QCF2237.ttf");
        break;
      case "QCF-238":
        fontsToLoad[
          "QCF-238"
        ] = require("../../assets/quran-fonts/QCF2238.ttf");
        break;
      case "QCF-239":
        fontsToLoad[
          "QCF-239"
        ] = require("../../assets/quran-fonts/QCF2239.ttf");
        break;
      case "QCF-240":
        fontsToLoad[
          "QCF-240"
        ] = require("../../assets/quran-fonts/QCF2240.ttf");
        break;
      case "QCF-241":
        fontsToLoad[
          "QCF-241"
        ] = require("../../assets/quran-fonts/QCF2241.ttf");
        break;
      case "QCF-242":
        fontsToLoad[
          "QCF-242"
        ] = require("../../assets/quran-fonts/QCF2242.ttf");
        break;
      case "QCF-243":
        fontsToLoad[
          "QCF-243"
        ] = require("../../assets/quran-fonts/QCF2243.ttf");
        break;
      case "QCF-244":
        fontsToLoad[
          "QCF-244"
        ] = require("../../assets/quran-fonts/QCF2244.ttf");
        break;
      case "QCF-245":
        fontsToLoad[
          "QCF-245"
        ] = require("../../assets/quran-fonts/QCF2245.ttf");
        break;
      case "QCF-246":
        fontsToLoad[
          "QCF-246"
        ] = require("../../assets/quran-fonts/QCF2246.ttf");
        break;
      case "QCF-247":
        fontsToLoad[
          "QCF-247"
        ] = require("../../assets/quran-fonts/QCF2247.ttf");
        break;
      case "QCF-248":
        fontsToLoad[
          "QCF-248"
        ] = require("../../assets/quran-fonts/QCF2248.ttf");
        break;
      case "QCF-249":
        fontsToLoad[
          "QCF-249"
        ] = require("../../assets/quran-fonts/QCF2249.ttf");
        break;
      case "QCF-250":
        fontsToLoad[
          "QCF-250"
        ] = require("../../assets/quran-fonts/QCF2250.ttf");
        break;
      case "QCF-251":
        fontsToLoad[
          "QCF-251"
        ] = require("../../assets/quran-fonts/QCF2251.ttf");
        break;
      case "QCF-252":
        fontsToLoad[
          "QCF-252"
        ] = require("../../assets/quran-fonts/QCF2252.ttf");
        break;
      case "QCF-253":
        fontsToLoad[
          "QCF-253"
        ] = require("../../assets/quran-fonts/QCF2253.ttf");
        break;
      case "QCF-254":
        fontsToLoad[
          "QCF-254"
        ] = require("../../assets/quran-fonts/QCF2254.ttf");
        break;
      case "QCF-255":
        fontsToLoad[
          "QCF-255"
        ] = require("../../assets/quran-fonts/QCF2255.ttf");
        break;
      case "QCF-256":
        fontsToLoad[
          "QCF-256"
        ] = require("../../assets/quran-fonts/QCF2256.ttf");
        break;
      case "QCF-257":
        fontsToLoad[
          "QCF-257"
        ] = require("../../assets/quran-fonts/QCF2257.ttf");
        break;
      case "QCF-258":
        fontsToLoad[
          "QCF-258"
        ] = require("../../assets/quran-fonts/QCF2258.ttf");
        break;
      case "QCF-259":
        fontsToLoad[
          "QCF-259"
        ] = require("../../assets/quran-fonts/QCF2259.ttf");
        break;
      case "QCF-260":
        fontsToLoad[
          "QCF-260"
        ] = require("../../assets/quran-fonts/QCF2260.ttf");
        break;
      case "QCF-261":
        fontsToLoad[
          "QCF-261"
        ] = require("../../assets/quran-fonts/QCF2261.ttf");
        break;
      case "QCF-262":
        fontsToLoad[
          "QCF-262"
        ] = require("../../assets/quran-fonts/QCF2262.ttf");
        break;
      case "QCF-263":
        fontsToLoad[
          "QCF-263"
        ] = require("../../assets/quran-fonts/QCF2263.ttf");
        break;
      case "QCF-264":
        fontsToLoad[
          "QCF-264"
        ] = require("../../assets/quran-fonts/QCF2264.ttf");
        break;
      case "QCF-265":
        fontsToLoad[
          "QCF-265"
        ] = require("../../assets/quran-fonts/QCF2265.ttf");
        break;
      case "QCF-266":
        fontsToLoad[
          "QCF-266"
        ] = require("../../assets/quran-fonts/QCF2266.ttf");
        break;
      case "QCF-267":
        fontsToLoad[
          "QCF-267"
        ] = require("../../assets/quran-fonts/QCF2267.ttf");
        break;
      case "QCF-268":
        fontsToLoad[
          "QCF-268"
        ] = require("../../assets/quran-fonts/QCF2268.ttf");
        break;
      case "QCF-269":
        fontsToLoad[
          "QCF-269"
        ] = require("../../assets/quran-fonts/QCF2269.ttf");
        break;
      case "QCF-270":
        fontsToLoad[
          "QCF-270"
        ] = require("../../assets/quran-fonts/QCF2270.ttf");
        break;
      case "QCF-271":
        fontsToLoad[
          "QCF-271"
        ] = require("../../assets/quran-fonts/QCF2271.ttf");
        break;
      case "QCF-272":
        fontsToLoad[
          "QCF-272"
        ] = require("../../assets/quran-fonts/QCF2272.ttf");
        break;
      case "QCF-273":
        fontsToLoad[
          "QCF-273"
        ] = require("../../assets/quran-fonts/QCF2273.ttf");
        break;
      case "QCF-274":
        fontsToLoad[
          "QCF-274"
        ] = require("../../assets/quran-fonts/QCF2274.ttf");
        break;
      case "QCF-275":
        fontsToLoad[
          "QCF-275"
        ] = require("../../assets/quran-fonts/QCF2275.ttf");
        break;
      case "QCF-276":
        fontsToLoad[
          "QCF-276"
        ] = require("../../assets/quran-fonts/QCF2276.ttf");
        break;
      case "QCF-277":
        fontsToLoad[
          "QCF-277"
        ] = require("../../assets/quran-fonts/QCF2277.ttf");
        break;
      case "QCF-278":
        fontsToLoad[
          "QCF-278"
        ] = require("../../assets/quran-fonts/QCF2278.ttf");
        break;
      case "QCF-279":
        fontsToLoad[
          "QCF-279"
        ] = require("../../assets/quran-fonts/QCF2279.ttf");
        break;
      case "QCF-280":
        fontsToLoad[
          "QCF-280"
        ] = require("../../assets/quran-fonts/QCF2280.ttf");
        break;
      case "QCF-281":
        fontsToLoad[
          "QCF-281"
        ] = require("../../assets/quran-fonts/QCF2281.ttf");
        break;
      case "QCF-282":
        fontsToLoad[
          "QCF-282"
        ] = require("../../assets/quran-fonts/QCF2282.ttf");
        break;
      case "QCF-283":
        fontsToLoad[
          "QCF-283"
        ] = require("../../assets/quran-fonts/QCF2283.ttf");
        break;
      case "QCF-284":
        fontsToLoad[
          "QCF-284"
        ] = require("../../assets/quran-fonts/QCF2284.ttf");
        break;
      case "QCF-285":
        fontsToLoad[
          "QCF-285"
        ] = require("../../assets/quran-fonts/QCF2285.ttf");
        break;
      case "QCF-286":
        fontsToLoad[
          "QCF-286"
        ] = require("../../assets/quran-fonts/QCF2286.ttf");
        break;
      case "QCF-287":
        fontsToLoad[
          "QCF-287"
        ] = require("../../assets/quran-fonts/QCF2287.ttf");
        break;
      case "QCF-288":
        fontsToLoad[
          "QCF-288"
        ] = require("../../assets/quran-fonts/QCF2288.ttf");
        break;
      case "QCF-289":
        fontsToLoad[
          "QCF-289"
        ] = require("../../assets/quran-fonts/QCF2289.ttf");
        break;
      case "QCF-290":
        fontsToLoad[
          "QCF-290"
        ] = require("../../assets/quran-fonts/QCF2290.ttf");
        break;
      case "QCF-291":
        fontsToLoad[
          "QCF-291"
        ] = require("../../assets/quran-fonts/QCF2291.ttf");
        break;
      case "QCF-292":
        fontsToLoad[
          "QCF-292"
        ] = require("../../assets/quran-fonts/QCF2292.ttf");
        break;
      case "QCF-293":
        fontsToLoad[
          "QCF-293"
        ] = require("../../assets/quran-fonts/QCF2293.ttf");
        break;
      case "QCF-294":
        fontsToLoad[
          "QCF-294"
        ] = require("../../assets/quran-fonts/QCF2294.ttf");
        break;
      case "QCF-295":
        fontsToLoad[
          "QCF-295"
        ] = require("../../assets/quran-fonts/QCF2295.ttf");
        break;
      case "QCF-296":
        fontsToLoad[
          "QCF-296"
        ] = require("../../assets/quran-fonts/QCF2296.ttf");
        break;
      case "QCF-297":
        fontsToLoad[
          "QCF-297"
        ] = require("../../assets/quran-fonts/QCF2297.ttf");
        break;
      case "QCF-298":
        fontsToLoad[
          "QCF-298"
        ] = require("../../assets/quran-fonts/QCF2298.ttf");
        break;
      case "QCF-299":
        fontsToLoad[
          "QCF-299"
        ] = require("../../assets/quran-fonts/QCF2299.ttf");
        break;
      case "QCF-300":
        fontsToLoad[
          "QCF-300"
        ] = require("../../assets/quran-fonts/QCF2300.ttf");
        break;
      case "QCF-301":
        fontsToLoad[
          "QCF-301"
        ] = require("../../assets/quran-fonts/QCF2301.ttf");
        break;
      case "QCF-302":
        fontsToLoad[
          "QCF-302"
        ] = require("../../assets/quran-fonts/QCF2302.ttf");
        break;
      case "QCF-303":
        fontsToLoad[
          "QCF-303"
        ] = require("../../assets/quran-fonts/QCF2303.ttf");
        break;
      case "QCF-304":
        fontsToLoad[
          "QCF-304"
        ] = require("../../assets/quran-fonts/QCF2304.ttf");
        break;
      case "QCF-305":
        fontsToLoad[
          "QCF-305"
        ] = require("../../assets/quran-fonts/QCF2305.ttf");
        break;
      case "QCF-306":
        fontsToLoad[
          "QCF-306"
        ] = require("../../assets/quran-fonts/QCF2306.ttf");
        break;
      case "QCF-307":
        fontsToLoad[
          "QCF-307"
        ] = require("../../assets/quran-fonts/QCF2307.ttf");
        break;
      case "QCF-308":
        fontsToLoad[
          "QCF-308"
        ] = require("../../assets/quran-fonts/QCF2308.ttf");
        break;
      case "QCF-309":
        fontsToLoad[
          "QCF-309"
        ] = require("../../assets/quran-fonts/QCF2309.ttf");
        break;
      case "QCF-310":
        fontsToLoad[
          "QCF-310"
        ] = require("../../assets/quran-fonts/QCF2310.ttf");
        break;
      case "QCF-311":
        fontsToLoad[
          "QCF-311"
        ] = require("../../assets/quran-fonts/QCF2311.ttf");
        break;
      case "QCF-312":
        fontsToLoad[
          "QCF-312"
        ] = require("../../assets/quran-fonts/QCF2312.ttf");
        break;
      case "QCF-313":
        fontsToLoad[
          "QCF-313"
        ] = require("../../assets/quran-fonts/QCF2313.ttf");
        break;
      case "QCF-314":
        fontsToLoad[
          "QCF-314"
        ] = require("../../assets/quran-fonts/QCF2314.ttf");
        break;
      case "QCF-315":
        fontsToLoad[
          "QCF-315"
        ] = require("../../assets/quran-fonts/QCF2315.ttf");
        break;
      case "QCF-316":
        fontsToLoad[
          "QCF-316"
        ] = require("../../assets/quran-fonts/QCF2316.ttf");
        break;
      case "QCF-317":
        fontsToLoad[
          "QCF-317"
        ] = require("../../assets/quran-fonts/QCF2317.ttf");
        break;
      case "QCF-318":
        fontsToLoad[
          "QCF-318"
        ] = require("../../assets/quran-fonts/QCF2318.ttf");
        break;
      case "QCF-319":
        fontsToLoad[
          "QCF-319"
        ] = require("../../assets/quran-fonts/QCF2319.ttf");
        break;
      case "QCF-320":
        fontsToLoad[
          "QCF-320"
        ] = require("../../assets/quran-fonts/QCF2320.ttf");
        break;
      case "QCF-321":
        fontsToLoad[
          "QCF-321"
        ] = require("../../assets/quran-fonts/QCF2321.ttf");
        break;
      case "QCF-322":
        fontsToLoad[
          "QCF-322"
        ] = require("../../assets/quran-fonts/QCF2322.ttf");
        break;
      case "QCF-323":
        fontsToLoad[
          "QCF-323"
        ] = require("../../assets/quran-fonts/QCF2323.ttf");
        break;
      case "QCF-324":
        fontsToLoad[
          "QCF-324"
        ] = require("../../assets/quran-fonts/QCF2324.ttf");
        break;
      case "QCF-325":
        fontsToLoad[
          "QCF-325"
        ] = require("../../assets/quran-fonts/QCF2325.ttf");
        break;
      case "QCF-326":
        fontsToLoad[
          "QCF-326"
        ] = require("../../assets/quran-fonts/QCF2326.ttf");
        break;
      case "QCF-327":
        fontsToLoad[
          "QCF-327"
        ] = require("../../assets/quran-fonts/QCF2327.ttf");
        break;
      case "QCF-328":
        fontsToLoad[
          "QCF-328"
        ] = require("../../assets/quran-fonts/QCF2328.ttf");
        break;
      case "QCF-329":
        fontsToLoad[
          "QCF-329"
        ] = require("../../assets/quran-fonts/QCF2329.ttf");
        break;
      case "QCF-330":
        fontsToLoad[
          "QCF-330"
        ] = require("../../assets/quran-fonts/QCF2330.ttf");
        break;
      case "QCF-331":
        fontsToLoad[
          "QCF-331"
        ] = require("../../assets/quran-fonts/QCF2331.ttf");
        break;
      case "QCF-332":
        fontsToLoad[
          "QCF-332"
        ] = require("../../assets/quran-fonts/QCF2332.ttf");
        break;
      case "QCF-333":
        fontsToLoad[
          "QCF-333"
        ] = require("../../assets/quran-fonts/QCF2333.ttf");
        break;
      case "QCF-334":
        fontsToLoad[
          "QCF-334"
        ] = require("../../assets/quran-fonts/QCF2334.ttf");
        break;
      case "QCF-335":
        fontsToLoad[
          "QCF-335"
        ] = require("../../assets/quran-fonts/QCF2335.ttf");
        break;
      case "QCF-336":
        fontsToLoad[
          "QCF-336"
        ] = require("../../assets/quran-fonts/QCF2336.ttf");
        break;
      case "QCF-337":
        fontsToLoad[
          "QCF-337"
        ] = require("../../assets/quran-fonts/QCF2337.ttf");
        break;
      case "QCF-338":
        fontsToLoad[
          "QCF-338"
        ] = require("../../assets/quran-fonts/QCF2338.ttf");
        break;
      case "QCF-339":
        fontsToLoad[
          "QCF-339"
        ] = require("../../assets/quran-fonts/QCF2339.ttf");
        break;
      case "QCF-340":
        fontsToLoad[
          "QCF-340"
        ] = require("../../assets/quran-fonts/QCF2340.ttf");
        break;
      case "QCF-341":
        fontsToLoad[
          "QCF-341"
        ] = require("../../assets/quran-fonts/QCF2341.ttf");
        break;
      case "QCF-342":
        fontsToLoad[
          "QCF-342"
        ] = require("../../assets/quran-fonts/QCF2342.ttf");
        break;
      case "QCF-343":
        fontsToLoad[
          "QCF-343"
        ] = require("../../assets/quran-fonts/QCF2343.ttf");
        break;
      case "QCF-344":
        fontsToLoad[
          "QCF-344"
        ] = require("../../assets/quran-fonts/QCF2344.ttf");
        break;
      case "QCF-345":
        fontsToLoad[
          "QCF-345"
        ] = require("../../assets/quran-fonts/QCF2345.ttf");
        break;
      case "QCF-346":
        fontsToLoad[
          "QCF-346"
        ] = require("../../assets/quran-fonts/QCF2346.ttf");
        break;
      case "QCF-347":
        fontsToLoad[
          "QCF-347"
        ] = require("../../assets/quran-fonts/QCF2347.ttf");
        break;
      case "QCF-348":
        fontsToLoad[
          "QCF-348"
        ] = require("../../assets/quran-fonts/QCF2348.ttf");
        break;
      case "QCF-349":
        fontsToLoad[
          "QCF-349"
        ] = require("../../assets/quran-fonts/QCF2349.ttf");
        break;
      case "QCF-350":
        fontsToLoad[
          "QCF-350"
        ] = require("../../assets/quran-fonts/QCF2350.ttf");
        break;
      case "QCF-351":
        fontsToLoad[
          "QCF-351"
        ] = require("../../assets/quran-fonts/QCF2351.ttf");
        break;
      case "QCF-352":
        fontsToLoad[
          "QCF-352"
        ] = require("../../assets/quran-fonts/QCF2352.ttf");
        break;
      case "QCF-353":
        fontsToLoad[
          "QCF-353"
        ] = require("../../assets/quran-fonts/QCF2353.ttf");
        break;
      case "QCF-354":
        fontsToLoad[
          "QCF-354"
        ] = require("../../assets/quran-fonts/QCF2354.ttf");
        break;
      case "QCF-355":
        fontsToLoad[
          "QCF-355"
        ] = require("../../assets/quran-fonts/QCF2355.ttf");
        break;
      case "QCF-356":
        fontsToLoad[
          "QCF-356"
        ] = require("../../assets/quran-fonts/QCF2356.ttf");
        break;
      case "QCF-357":
        fontsToLoad[
          "QCF-357"
        ] = require("../../assets/quran-fonts/QCF2357.ttf");
        break;
      case "QCF-358":
        fontsToLoad[
          "QCF-358"
        ] = require("../../assets/quran-fonts/QCF2358.ttf");
        break;
      case "QCF-359":
        fontsToLoad[
          "QCF-359"
        ] = require("../../assets/quran-fonts/QCF2359.ttf");
        break;
      case "QCF-360":
        fontsToLoad[
          "QCF-360"
        ] = require("../../assets/quran-fonts/QCF2360.ttf");
        break;
      case "QCF-361":
        fontsToLoad[
          "QCF-361"
        ] = require("../../assets/quran-fonts/QCF2361.ttf");
        break;
      case "QCF-362":
        fontsToLoad[
          "QCF-362"
        ] = require("../../assets/quran-fonts/QCF2362.ttf");
        break;
      case "QCF-363":
        fontsToLoad[
          "QCF-363"
        ] = require("../../assets/quran-fonts/QCF2363.ttf");
        break;
      case "QCF-364":
        fontsToLoad[
          "QCF-364"
        ] = require("../../assets/quran-fonts/QCF2364.ttf");
        break;
      case "QCF-365":
        fontsToLoad[
          "QCF-365"
        ] = require("../../assets/quran-fonts/QCF2365.ttf");
        break;
      case "QCF-366":
        fontsToLoad[
          "QCF-366"
        ] = require("../../assets/quran-fonts/QCF2366.ttf");
        break;
      case "QCF-367":
        fontsToLoad[
          "QCF-367"
        ] = require("../../assets/quran-fonts/QCF2367.ttf");
        break;
      case "QCF-368":
        fontsToLoad[
          "QCF-368"
        ] = require("../../assets/quran-fonts/QCF2368.ttf");
        break;
      case "QCF-369":
        fontsToLoad[
          "QCF-369"
        ] = require("../../assets/quran-fonts/QCF2369.ttf");
        break;
      case "QCF-370":
        fontsToLoad[
          "QCF-370"
        ] = require("../../assets/quran-fonts/QCF2370.ttf");
        break;
      case "QCF-371":
        fontsToLoad[
          "QCF-371"
        ] = require("../../assets/quran-fonts/QCF2371.ttf");
        break;
      case "QCF-372":
        fontsToLoad[
          "QCF-372"
        ] = require("../../assets/quran-fonts/QCF2372.ttf");
        break;
      case "QCF-373":
        fontsToLoad[
          "QCF-373"
        ] = require("../../assets/quran-fonts/QCF2373.ttf");
        break;
      case "QCF-374":
        fontsToLoad[
          "QCF-374"
        ] = require("../../assets/quran-fonts/QCF2374.ttf");
        break;
      case "QCF-375":
        fontsToLoad[
          "QCF-375"
        ] = require("../../assets/quran-fonts/QCF2375.ttf");
        break;
      case "QCF-376":
        fontsToLoad[
          "QCF-376"
        ] = require("../../assets/quran-fonts/QCF2376.ttf");
        break;
      case "QCF-377":
        fontsToLoad[
          "QCF-377"
        ] = require("../../assets/quran-fonts/QCF2377.ttf");
        break;
      case "QCF-378":
        fontsToLoad[
          "QCF-378"
        ] = require("../../assets/quran-fonts/QCF2378.ttf");
        break;
      case "QCF-379":
        fontsToLoad[
          "QCF-379"
        ] = require("../../assets/quran-fonts/QCF2379.ttf");
        break;
      case "QCF-380":
        fontsToLoad[
          "QCF-380"
        ] = require("../../assets/quran-fonts/QCF2380.ttf");
        break;
      case "QCF-381":
        fontsToLoad[
          "QCF-381"
        ] = require("../../assets/quran-fonts/QCF2381.ttf");
        break;
      case "QCF-382":
        fontsToLoad[
          "QCF-382"
        ] = require("../../assets/quran-fonts/QCF2382.ttf");
        break;
      case "QCF-383":
        fontsToLoad[
          "QCF-383"
        ] = require("../../assets/quran-fonts/QCF2383.ttf");
        break;
      case "QCF-384":
        fontsToLoad[
          "QCF-384"
        ] = require("../../assets/quran-fonts/QCF2384.ttf");
        break;
      case "QCF-385":
        fontsToLoad[
          "QCF-385"
        ] = require("../../assets/quran-fonts/QCF2385.ttf");
        break;
      case "QCF-386":
        fontsToLoad[
          "QCF-386"
        ] = require("../../assets/quran-fonts/QCF2386.ttf");
        break;
      case "QCF-387":
        fontsToLoad[
          "QCF-387"
        ] = require("../../assets/quran-fonts/QCF2387.ttf");
        break;
      case "QCF-388":
        fontsToLoad[
          "QCF-388"
        ] = require("../../assets/quran-fonts/QCF2388.ttf");
        break;
      case "QCF-389":
        fontsToLoad[
          "QCF-389"
        ] = require("../../assets/quran-fonts/QCF2389.ttf");
        break;
      case "QCF-390":
        fontsToLoad[
          "QCF-390"
        ] = require("../../assets/quran-fonts/QCF2390.ttf");
        break;
      case "QCF-391":
        fontsToLoad[
          "QCF-391"
        ] = require("../../assets/quran-fonts/QCF2391.ttf");
        break;
      case "QCF-392":
        fontsToLoad[
          "QCF-392"
        ] = require("../../assets/quran-fonts/QCF2392.ttf");
        break;
      case "QCF-393":
        fontsToLoad[
          "QCF-393"
        ] = require("../../assets/quran-fonts/QCF2393.ttf");
        break;
      case "QCF-394":
        fontsToLoad[
          "QCF-394"
        ] = require("../../assets/quran-fonts/QCF2394.ttf");
        break;
      case "QCF-395":
        fontsToLoad[
          "QCF-395"
        ] = require("../../assets/quran-fonts/QCF2395.ttf");
        break;
      case "QCF-396":
        fontsToLoad[
          "QCF-396"
        ] = require("../../assets/quran-fonts/QCF2396.ttf");
        break;
      case "QCF-397":
        fontsToLoad[
          "QCF-397"
        ] = require("../../assets/quran-fonts/QCF2397.ttf");
        break;
      case "QCF-398":
        fontsToLoad[
          "QCF-398"
        ] = require("../../assets/quran-fonts/QCF2398.ttf");
        break;
      case "QCF-399":
        fontsToLoad[
          "QCF-399"
        ] = require("../../assets/quran-fonts/QCF2399.ttf");
        break;
      case "QCF-400":
        fontsToLoad[
          "QCF-400"
        ] = require("../../assets/quran-fonts/QCF2400.ttf");
        break;
      case "QCF-401":
        fontsToLoad[
          "QCF-401"
        ] = require("../../assets/quran-fonts/QCF2401.ttf");
        break;
      case "QCF-402":
        fontsToLoad[
          "QCF-402"
        ] = require("../../assets/quran-fonts/QCF2402.ttf");
        break;
      case "QCF-403":
        fontsToLoad[
          "QCF-403"
        ] = require("../../assets/quran-fonts/QCF2403.ttf");
        break;
      case "QCF-404":
        fontsToLoad[
          "QCF-404"
        ] = require("../../assets/quran-fonts/QCF2404.ttf");
        break;
      case "QCF-405":
        fontsToLoad[
          "QCF-405"
        ] = require("../../assets/quran-fonts/QCF2405.ttf");
        break;
      case "QCF-406":
        fontsToLoad[
          "QCF-406"
        ] = require("../../assets/quran-fonts/QCF2406.ttf");
        break;
      case "QCF-407":
        fontsToLoad[
          "QCF-407"
        ] = require("../../assets/quran-fonts/QCF2407.ttf");
        break;
      case "QCF-408":
        fontsToLoad[
          "QCF-408"
        ] = require("../../assets/quran-fonts/QCF2408.ttf");
        break;
      case "QCF-409":
        fontsToLoad[
          "QCF-409"
        ] = require("../../assets/quran-fonts/QCF2409.ttf");
        break;
      case "QCF-410":
        fontsToLoad[
          "QCF-410"
        ] = require("../../assets/quran-fonts/QCF2410.ttf");
        break;
      case "QCF-411":
        fontsToLoad[
          "QCF-411"
        ] = require("../../assets/quran-fonts/QCF2411.ttf");
        break;
      case "QCF-412":
        fontsToLoad[
          "QCF-412"
        ] = require("../../assets/quran-fonts/QCF2412.ttf");
        break;
      case "QCF-413":
        fontsToLoad[
          "QCF-413"
        ] = require("../../assets/quran-fonts/QCF2413.ttf");
        break;
      case "QCF-414":
        fontsToLoad[
          "QCF-414"
        ] = require("../../assets/quran-fonts/QCF2414.ttf");
        break;
      case "QCF-415":
        fontsToLoad[
          "QCF-415"
        ] = require("../../assets/quran-fonts/QCF2415.ttf");
        break;
      case "QCF-416":
        fontsToLoad[
          "QCF-416"
        ] = require("../../assets/quran-fonts/QCF2416.ttf");
        break;
      case "QCF-417":
        fontsToLoad[
          "QCF-417"
        ] = require("../../assets/quran-fonts/QCF2417.ttf");
        break;
      case "QCF-418":
        fontsToLoad[
          "QCF-418"
        ] = require("../../assets/quran-fonts/QCF2418.ttf");
        break;
      case "QCF-419":
        fontsToLoad[
          "QCF-419"
        ] = require("../../assets/quran-fonts/QCF2419.ttf");
        break;
      case "QCF-420":
        fontsToLoad[
          "QCF-420"
        ] = require("../../assets/quran-fonts/QCF2420.ttf");
        break;
      case "QCF-421":
        fontsToLoad[
          "QCF-421"
        ] = require("../../assets/quran-fonts/QCF2421.ttf");
        break;
      case "QCF-422":
        fontsToLoad[
          "QCF-422"
        ] = require("../../assets/quran-fonts/QCF2422.ttf");
        break;
      case "QCF-423":
        fontsToLoad[
          "QCF-423"
        ] = require("../../assets/quran-fonts/QCF2423.ttf");
        break;
      case "QCF-424":
        fontsToLoad[
          "QCF-424"
        ] = require("../../assets/quran-fonts/QCF2424.ttf");
        break;
      case "QCF-425":
        fontsToLoad[
          "QCF-425"
        ] = require("../../assets/quran-fonts/QCF2425.ttf");
        break;
      case "QCF-426":
        fontsToLoad[
          "QCF-426"
        ] = require("../../assets/quran-fonts/QCF2426.ttf");
        break;
      case "QCF-427":
        fontsToLoad[
          "QCF-427"
        ] = require("../../assets/quran-fonts/QCF2427.ttf");
        break;
      case "QCF-428":
        fontsToLoad[
          "QCF-428"
        ] = require("../../assets/quran-fonts/QCF2428.ttf");
        break;
      case "QCF-429":
        fontsToLoad[
          "QCF-429"
        ] = require("../../assets/quran-fonts/QCF2429.ttf");
        break;
      case "QCF-430":
        fontsToLoad[
          "QCF-430"
        ] = require("../../assets/quran-fonts/QCF2430.ttf");
        break;
      case "QCF-431":
        fontsToLoad[
          "QCF-431"
        ] = require("../../assets/quran-fonts/QCF2431.ttf");
        break;
      case "QCF-432":
        fontsToLoad[
          "QCF-432"
        ] = require("../../assets/quran-fonts/QCF2432.ttf");
        break;
      case "QCF-433":
        fontsToLoad[
          "QCF-433"
        ] = require("../../assets/quran-fonts/QCF2433.ttf");
        break;
      case "QCF-434":
        fontsToLoad[
          "QCF-434"
        ] = require("../../assets/quran-fonts/QCF2434.ttf");
        break;
      case "QCF-435":
        fontsToLoad[
          "QCF-435"
        ] = require("../../assets/quran-fonts/QCF2435.ttf");
        break;
      case "QCF-436":
        fontsToLoad[
          "QCF-436"
        ] = require("../../assets/quran-fonts/QCF2436.ttf");
        break;
      case "QCF-437":
        fontsToLoad[
          "QCF-437"
        ] = require("../../assets/quran-fonts/QCF2437.ttf");
        break;
      case "QCF-438":
        fontsToLoad[
          "QCF-438"
        ] = require("../../assets/quran-fonts/QCF2438.ttf");
        break;
      case "QCF-439":
        fontsToLoad[
          "QCF-439"
        ] = require("../../assets/quran-fonts/QCF2439.ttf");
        break;
      case "QCF-440":
        fontsToLoad[
          "QCF-440"
        ] = require("../../assets/quran-fonts/QCF2440.ttf");
        break;
      case "QCF-441":
        fontsToLoad[
          "QCF-441"
        ] = require("../../assets/quran-fonts/QCF2441.ttf");
        break;
      case "QCF-442":
        fontsToLoad[
          "QCF-442"
        ] = require("../../assets/quran-fonts/QCF2442.ttf");
        break;
      case "QCF-443":
        fontsToLoad[
          "QCF-443"
        ] = require("../../assets/quran-fonts/QCF2443.ttf");
        break;
      case "QCF-444":
        fontsToLoad[
          "QCF-444"
        ] = require("../../assets/quran-fonts/QCF2444.ttf");
        break;
      case "QCF-445":
        fontsToLoad[
          "QCF-445"
        ] = require("../../assets/quran-fonts/QCF2445.ttf");
        break;
      case "QCF-446":
        fontsToLoad[
          "QCF-446"
        ] = require("../../assets/quran-fonts/QCF2446.ttf");
        break;
      case "QCF-447":
        fontsToLoad[
          "QCF-447"
        ] = require("../../assets/quran-fonts/QCF2447.ttf");
        break;
      case "QCF-448":
        fontsToLoad[
          "QCF-448"
        ] = require("../../assets/quran-fonts/QCF2448.ttf");
        break;
      case "QCF-449":
        fontsToLoad[
          "QCF-449"
        ] = require("../../assets/quran-fonts/QCF2449.ttf");
        break;
      case "QCF-450":
        fontsToLoad[
          "QCF-450"
        ] = require("../../assets/quran-fonts/QCF2450.ttf");
        break;
      case "QCF-451":
        fontsToLoad[
          "QCF-451"
        ] = require("../../assets/quran-fonts/QCF2451.ttf");
        break;
      case "QCF-452":
        fontsToLoad[
          "QCF-452"
        ] = require("../../assets/quran-fonts/QCF2452.ttf");
        break;
      case "QCF-453":
        fontsToLoad[
          "QCF-453"
        ] = require("../../assets/quran-fonts/QCF2453.ttf");
        break;
      case "QCF-454":
        fontsToLoad[
          "QCF-454"
        ] = require("../../assets/quran-fonts/QCF2454.ttf");
        break;
      case "QCF-455":
        fontsToLoad[
          "QCF-455"
        ] = require("../../assets/quran-fonts/QCF2455.ttf");
        break;
      case "QCF-456":
        fontsToLoad[
          "QCF-456"
        ] = require("../../assets/quran-fonts/QCF2456.ttf");
        break;
      case "QCF-457":
        fontsToLoad[
          "QCF-457"
        ] = require("../../assets/quran-fonts/QCF2457.ttf");
        break;
      case "QCF-458":
        fontsToLoad[
          "QCF-458"
        ] = require("../../assets/quran-fonts/QCF2458.ttf");
        break;
      case "QCF-459":
        fontsToLoad[
          "QCF-459"
        ] = require("../../assets/quran-fonts/QCF2459.ttf");
        break;
      case "QCF-460":
        fontsToLoad[
          "QCF-460"
        ] = require("../../assets/quran-fonts/QCF2460.ttf");
        break;
      case "QCF-461":
        fontsToLoad[
          "QCF-461"
        ] = require("../../assets/quran-fonts/QCF2461.ttf");
        break;
      case "QCF-462":
        fontsToLoad[
          "QCF-462"
        ] = require("../../assets/quran-fonts/QCF2462.ttf");
        break;
      case "QCF-463":
        fontsToLoad[
          "QCF-463"
        ] = require("../../assets/quran-fonts/QCF2463.ttf");
        break;
      case "QCF-464":
        fontsToLoad[
          "QCF-464"
        ] = require("../../assets/quran-fonts/QCF2464.ttf");
        break;
      case "QCF-465":
        fontsToLoad[
          "QCF-465"
        ] = require("../../assets/quran-fonts/QCF2465.ttf");
        break;
      case "QCF-466":
        fontsToLoad[
          "QCF-466"
        ] = require("../../assets/quran-fonts/QCF2466.ttf");
        break;
      case "QCF-467":
        fontsToLoad[
          "QCF-467"
        ] = require("../../assets/quran-fonts/QCF2467.ttf");
        break;
      case "QCF-468":
        fontsToLoad[
          "QCF-468"
        ] = require("../../assets/quran-fonts/QCF2468.ttf");
        break;
      case "QCF-469":
        fontsToLoad[
          "QCF-469"
        ] = require("../../assets/quran-fonts/QCF2469.ttf");
        break;
      case "QCF-470":
        fontsToLoad[
          "QCF-470"
        ] = require("../../assets/quran-fonts/QCF2470.ttf");
        break;
      case "QCF-471":
        fontsToLoad[
          "QCF-471"
        ] = require("../../assets/quran-fonts/QCF2471.ttf");
        break;
      case "QCF-472":
        fontsToLoad[
          "QCF-472"
        ] = require("../../assets/quran-fonts/QCF2472.ttf");
        break;
      case "QCF-473":
        fontsToLoad[
          "QCF-473"
        ] = require("../../assets/quran-fonts/QCF2473.ttf");
        break;
      case "QCF-474":
        fontsToLoad[
          "QCF-474"
        ] = require("../../assets/quran-fonts/QCF2474.ttf");
        break;
      case "QCF-475":
        fontsToLoad[
          "QCF-475"
        ] = require("../../assets/quran-fonts/QCF2475.ttf");
        break;
      case "QCF-476":
        fontsToLoad[
          "QCF-476"
        ] = require("../../assets/quran-fonts/QCF2476.ttf");
        break;
      case "QCF-477":
        fontsToLoad[
          "QCF-477"
        ] = require("../../assets/quran-fonts/QCF2477.ttf");
        break;
      case "QCF-478":
        fontsToLoad[
          "QCF-478"
        ] = require("../../assets/quran-fonts/QCF2478.ttf");
        break;
      case "QCF-479":
        fontsToLoad[
          "QCF-479"
        ] = require("../../assets/quran-fonts/QCF2479.ttf");
        break;
      case "QCF-480":
        fontsToLoad[
          "QCF-480"
        ] = require("../../assets/quran-fonts/QCF2480.ttf");
        break;
      case "QCF-481":
        fontsToLoad[
          "QCF-481"
        ] = require("../../assets/quran-fonts/QCF2481.ttf");
        break;
      case "QCF-482":
        fontsToLoad[
          "QCF-482"
        ] = require("../../assets/quran-fonts/QCF2482.ttf");
        break;
      case "QCF-483":
        fontsToLoad[
          "QCF-483"
        ] = require("../../assets/quran-fonts/QCF2483.ttf");
        break;
      case "QCF-484":
        fontsToLoad[
          "QCF-484"
        ] = require("../../assets/quran-fonts/QCF2484.ttf");
        break;
      case "QCF-485":
        fontsToLoad[
          "QCF-485"
        ] = require("../../assets/quran-fonts/QCF2485.ttf");
        break;
      case "QCF-486":
        fontsToLoad[
          "QCF-486"
        ] = require("../../assets/quran-fonts/QCF2486.ttf");
        break;
      case "QCF-487":
        fontsToLoad[
          "QCF-487"
        ] = require("../../assets/quran-fonts/QCF2487.ttf");
        break;
      case "QCF-488":
        fontsToLoad[
          "QCF-488"
        ] = require("../../assets/quran-fonts/QCF2488.ttf");
        break;
      case "QCF-489":
        fontsToLoad[
          "QCF-489"
        ] = require("../../assets/quran-fonts/QCF2489.ttf");
        break;
      case "QCF-490":
        fontsToLoad[
          "QCF-490"
        ] = require("../../assets/quran-fonts/QCF2490.ttf");
        break;
      case "QCF-491":
        fontsToLoad[
          "QCF-491"
        ] = require("../../assets/quran-fonts/QCF2491.ttf");
        break;
      case "QCF-492":
        fontsToLoad[
          "QCF-492"
        ] = require("../../assets/quran-fonts/QCF2492.ttf");
        break;
      case "QCF-493":
        fontsToLoad[
          "QCF-493"
        ] = require("../../assets/quran-fonts/QCF2493.ttf");
        break;
      case "QCF-494":
        fontsToLoad[
          "QCF-494"
        ] = require("../../assets/quran-fonts/QCF2494.ttf");
        break;
      case "QCF-495":
        fontsToLoad[
          "QCF-495"
        ] = require("../../assets/quran-fonts/QCF2495.ttf");
        break;
      case "QCF-496":
        fontsToLoad[
          "QCF-496"
        ] = require("../../assets/quran-fonts/QCF2496.ttf");
        break;
      case "QCF-497":
        fontsToLoad[
          "QCF-497"
        ] = require("../../assets/quran-fonts/QCF2497.ttf");
        break;
      case "QCF-498":
        fontsToLoad[
          "QCF-498"
        ] = require("../../assets/quran-fonts/QCF2498.ttf");
        break;
      case "QCF-499":
        fontsToLoad[
          "QCF-499"
        ] = require("../../assets/quran-fonts/QCF2499.ttf");
        break;
      case "QCF-500":
        fontsToLoad[
          "QCF-500"
        ] = require("../../assets/quran-fonts/QCF2500.ttf");
        break;
      case "QCF-501":
        fontsToLoad[
          "QCF-501"
        ] = require("../../assets/quran-fonts/QCF2501.ttf");
        break;
      case "QCF-502":
        fontsToLoad[
          "QCF-502"
        ] = require("../../assets/quran-fonts/QCF2502.ttf");
        break;
      case "QCF-503":
        fontsToLoad[
          "QCF-503"
        ] = require("../../assets/quran-fonts/QCF2503.ttf");
        break;
      case "QCF-504":
        fontsToLoad[
          "QCF-504"
        ] = require("../../assets/quran-fonts/QCF2504.ttf");
        break;
      case "QCF-505":
        fontsToLoad[
          "QCF-505"
        ] = require("../../assets/quran-fonts/QCF2505.ttf");
        break;
      case "QCF-506":
        fontsToLoad[
          "QCF-506"
        ] = require("../../assets/quran-fonts/QCF2506.ttf");
        break;
      case "QCF-507":
        fontsToLoad[
          "QCF-507"
        ] = require("../../assets/quran-fonts/QCF2507.ttf");
        break;
      case "QCF-508":
        fontsToLoad[
          "QCF-508"
        ] = require("../../assets/quran-fonts/QCF2508.ttf");
        break;
      case "QCF-509":
        fontsToLoad[
          "QCF-509"
        ] = require("../../assets/quran-fonts/QCF2509.ttf");
        break;
      case "QCF-510":
        fontsToLoad[
          "QCF-510"
        ] = require("../../assets/quran-fonts/QCF2510.ttf");
        break;
      case "QCF-511":
        fontsToLoad[
          "QCF-511"
        ] = require("../../assets/quran-fonts/QCF2511.ttf");
        break;
      case "QCF-512":
        fontsToLoad[
          "QCF-512"
        ] = require("../../assets/quran-fonts/QCF2512.ttf");
        break;
      case "QCF-513":
        fontsToLoad[
          "QCF-513"
        ] = require("../../assets/quran-fonts/QCF2513.ttf");
        break;
      case "QCF-514":
        fontsToLoad[
          "QCF-514"
        ] = require("../../assets/quran-fonts/QCF2514.ttf");
        break;
      case "QCF-515":
        fontsToLoad[
          "QCF-515"
        ] = require("../../assets/quran-fonts/QCF2515.ttf");
        break;
      case "QCF-516":
        fontsToLoad[
          "QCF-516"
        ] = require("../../assets/quran-fonts/QCF2516.ttf");
        break;
      case "QCF-517":
        fontsToLoad[
          "QCF-517"
        ] = require("../../assets/quran-fonts/QCF2517.ttf");
        break;
      case "QCF-518":
        fontsToLoad[
          "QCF-518"
        ] = require("../../assets/quran-fonts/QCF2518.ttf");
        break;
      case "QCF-519":
        fontsToLoad[
          "QCF-519"
        ] = require("../../assets/quran-fonts/QCF2519.ttf");
        break;
      case "QCF-520":
        fontsToLoad[
          "QCF-520"
        ] = require("../../assets/quran-fonts/QCF2520.ttf");
        break;
      case "QCF-521":
        fontsToLoad[
          "QCF-521"
        ] = require("../../assets/quran-fonts/QCF2521.ttf");
        break;
      case "QCF-522":
        fontsToLoad[
          "QCF-522"
        ] = require("../../assets/quran-fonts/QCF2522.ttf");
        break;
      case "QCF-523":
        fontsToLoad[
          "QCF-523"
        ] = require("../../assets/quran-fonts/QCF2523.ttf");
        break;
      case "QCF-524":
        fontsToLoad[
          "QCF-524"
        ] = require("../../assets/quran-fonts/QCF2524.ttf");
        break;
      case "QCF-525":
        fontsToLoad[
          "QCF-525"
        ] = require("../../assets/quran-fonts/QCF2525.ttf");
        break;
      case "QCF-526":
        fontsToLoad[
          "QCF-526"
        ] = require("../../assets/quran-fonts/QCF2526.ttf");
        break;
      case "QCF-527":
        fontsToLoad[
          "QCF-527"
        ] = require("../../assets/quran-fonts/QCF2527.ttf");
        break;
      case "QCF-528":
        fontsToLoad[
          "QCF-528"
        ] = require("../../assets/quran-fonts/QCF2528.ttf");
        break;
      case "QCF-529":
        fontsToLoad[
          "QCF-529"
        ] = require("../../assets/quran-fonts/QCF2529.ttf");
        break;
      case "QCF-530":
        fontsToLoad[
          "QCF-530"
        ] = require("../../assets/quran-fonts/QCF2530.ttf");
        break;
      case "QCF-531":
        fontsToLoad[
          "QCF-531"
        ] = require("../../assets/quran-fonts/QCF2531.ttf");
        break;
      case "QCF-532":
        fontsToLoad[
          "QCF-532"
        ] = require("../../assets/quran-fonts/QCF2532.ttf");
        break;
      case "QCF-533":
        fontsToLoad[
          "QCF-533"
        ] = require("../../assets/quran-fonts/QCF2533.ttf");
        break;
      case "QCF-534":
        fontsToLoad[
          "QCF-534"
        ] = require("../../assets/quran-fonts/QCF2534.ttf");
        break;
      case "QCF-535":
        fontsToLoad[
          "QCF-535"
        ] = require("../../assets/quran-fonts/QCF2535.ttf");
        break;
      case "QCF-536":
        fontsToLoad[
          "QCF-536"
        ] = require("../../assets/quran-fonts/QCF2536.ttf");
        break;
      case "QCF-537":
        fontsToLoad[
          "QCF-537"
        ] = require("../../assets/quran-fonts/QCF2537.ttf");
        break;
      case "QCF-538":
        fontsToLoad[
          "QCF-538"
        ] = require("../../assets/quran-fonts/QCF2538.ttf");
        break;
      case "QCF-539":
        fontsToLoad[
          "QCF-539"
        ] = require("../../assets/quran-fonts/QCF2539.ttf");
        break;
      case "QCF-540":
        fontsToLoad[
          "QCF-540"
        ] = require("../../assets/quran-fonts/QCF2540.ttf");
        break;
      case "QCF-541":
        fontsToLoad[
          "QCF-541"
        ] = require("../../assets/quran-fonts/QCF2541.ttf");
        break;
      case "QCF-542":
        fontsToLoad[
          "QCF-542"
        ] = require("../../assets/quran-fonts/QCF2542.ttf");
        break;
      case "QCF-543":
        fontsToLoad[
          "QCF-543"
        ] = require("../../assets/quran-fonts/QCF2543.ttf");
        break;
      case "QCF-544":
        fontsToLoad[
          "QCF-544"
        ] = require("../../assets/quran-fonts/QCF2544.ttf");
        break;
      case "QCF-545":
        fontsToLoad[
          "QCF-545"
        ] = require("../../assets/quran-fonts/QCF2545.ttf");
        break;
      case "QCF-546":
        fontsToLoad[
          "QCF-546"
        ] = require("../../assets/quran-fonts/QCF2546.ttf");
        break;
      case "QCF-547":
        fontsToLoad[
          "QCF-547"
        ] = require("../../assets/quran-fonts/QCF2547.ttf");
        break;
      case "QCF-548":
        fontsToLoad[
          "QCF-548"
        ] = require("../../assets/quran-fonts/QCF2548.ttf");
        break;
      case "QCF-549":
        fontsToLoad[
          "QCF-549"
        ] = require("../../assets/quran-fonts/QCF2549.ttf");
        break;
      case "QCF-550":
        fontsToLoad[
          "QCF-550"
        ] = require("../../assets/quran-fonts/QCF2550.ttf");
        break;
      case "QCF-551":
        fontsToLoad[
          "QCF-551"
        ] = require("../../assets/quran-fonts/QCF2551.ttf");
        break;
      case "QCF-552":
        fontsToLoad[
          "QCF-552"
        ] = require("../../assets/quran-fonts/QCF2552.ttf");
        break;
      case "QCF-553":
        fontsToLoad[
          "QCF-553"
        ] = require("../../assets/quran-fonts/QCF2553.ttf");
        break;
      case "QCF-554":
        fontsToLoad[
          "QCF-554"
        ] = require("../../assets/quran-fonts/QCF2554.ttf");
        break;
      case "QCF-555":
        fontsToLoad[
          "QCF-555"
        ] = require("../../assets/quran-fonts/QCF2555.ttf");
        break;
      case "QCF-556":
        fontsToLoad[
          "QCF-556"
        ] = require("../../assets/quran-fonts/QCF2556.ttf");
        break;
      case "QCF-557":
        fontsToLoad[
          "QCF-557"
        ] = require("../../assets/quran-fonts/QCF2557.ttf");
        break;
      case "QCF-558":
        fontsToLoad[
          "QCF-558"
        ] = require("../../assets/quran-fonts/QCF2558.ttf");
        break;
      case "QCF-559":
        fontsToLoad[
          "QCF-559"
        ] = require("../../assets/quran-fonts/QCF2559.ttf");
        break;
      case "QCF-560":
        fontsToLoad[
          "QCF-560"
        ] = require("../../assets/quran-fonts/QCF2560.ttf");
        break;
      case "QCF-561":
        fontsToLoad[
          "QCF-561"
        ] = require("../../assets/quran-fonts/QCF2561.ttf");
        break;
      case "QCF-562":
        fontsToLoad[
          "QCF-562"
        ] = require("../../assets/quran-fonts/QCF2562.ttf");
        break;
      case "QCF-563":
        fontsToLoad[
          "QCF-563"
        ] = require("../../assets/quran-fonts/QCF2563.ttf");
        break;
      case "QCF-564":
        fontsToLoad[
          "QCF-564"
        ] = require("../../assets/quran-fonts/QCF2564.ttf");
        break;
      case "QCF-565":
        fontsToLoad[
          "QCF-565"
        ] = require("../../assets/quran-fonts/QCF2565.ttf");
        break;
      case "QCF-566":
        fontsToLoad[
          "QCF-566"
        ] = require("../../assets/quran-fonts/QCF2566.ttf");
        break;
      case "QCF-567":
        fontsToLoad[
          "QCF-567"
        ] = require("../../assets/quran-fonts/QCF2567.ttf");
        break;
      case "QCF-568":
        fontsToLoad[
          "QCF-568"
        ] = require("../../assets/quran-fonts/QCF2568.ttf");
        break;
      case "QCF-569":
        fontsToLoad[
          "QCF-569"
        ] = require("../../assets/quran-fonts/QCF2569.ttf");
        break;
      case "QCF-570":
        fontsToLoad[
          "QCF-570"
        ] = require("../../assets/quran-fonts/QCF2570.ttf");
        break;
      case "QCF-571":
        fontsToLoad[
          "QCF-571"
        ] = require("../../assets/quran-fonts/QCF2571.ttf");
        break;
      case "QCF-572":
        fontsToLoad[
          "QCF-572"
        ] = require("../../assets/quran-fonts/QCF2572.ttf");
        break;
      case "QCF-573":
        fontsToLoad[
          "QCF-573"
        ] = require("../../assets/quran-fonts/QCF2573.ttf");
        break;
      case "QCF-574":
        fontsToLoad[
          "QCF-574"
        ] = require("../../assets/quran-fonts/QCF2574.ttf");
        break;
      case "QCF-575":
        fontsToLoad[
          "QCF-575"
        ] = require("../../assets/quran-fonts/QCF2575.ttf");
        break;
      case "QCF-576":
        fontsToLoad[
          "QCF-576"
        ] = require("../../assets/quran-fonts/QCF2576.ttf");
        break;
      case "QCF-577":
        fontsToLoad[
          "QCF-577"
        ] = require("../../assets/quran-fonts/QCF2577.ttf");
        break;
      case "QCF-578":
        fontsToLoad[
          "QCF-578"
        ] = require("../../assets/quran-fonts/QCF2578.ttf");
        break;
      case "QCF-579":
        fontsToLoad[
          "QCF-579"
        ] = require("../../assets/quran-fonts/QCF2579.ttf");
        break;
      case "QCF-580":
        fontsToLoad[
          "QCF-580"
        ] = require("../../assets/quran-fonts/QCF2580.ttf");
        break;
      case "QCF-581":
        fontsToLoad[
          "QCF-581"
        ] = require("../../assets/quran-fonts/QCF2581.ttf");
        break;
      case "QCF-582":
        fontsToLoad[
          "QCF-582"
        ] = require("../../assets/quran-fonts/QCF2582.ttf");
        break;
      case "QCF-583":
        fontsToLoad[
          "QCF-583"
        ] = require("../../assets/quran-fonts/QCF2583.ttf");
        break;
      case "QCF-584":
        fontsToLoad[
          "QCF-584"
        ] = require("../../assets/quran-fonts/QCF2584.ttf");
        break;
      case "QCF-585":
        fontsToLoad[
          "QCF-585"
        ] = require("../../assets/quran-fonts/QCF2585.ttf");
        break;
      case "QCF-586":
        fontsToLoad[
          "QCF-586"
        ] = require("../../assets/quran-fonts/QCF2586.ttf");
        break;
      case "QCF-587":
        fontsToLoad[
          "QCF-587"
        ] = require("../../assets/quran-fonts/QCF2587.ttf");
        break;
      case "QCF-588":
        fontsToLoad[
          "QCF-588"
        ] = require("../../assets/quran-fonts/QCF2588.ttf");
        break;
      case "QCF-589":
        fontsToLoad[
          "QCF-589"
        ] = require("../../assets/quran-fonts/QCF2589.ttf");
        break;
      case "QCF-590":
        fontsToLoad[
          "QCF-590"
        ] = require("../../assets/quran-fonts/QCF2590.ttf");
        break;
      case "QCF-591":
        fontsToLoad[
          "QCF-591"
        ] = require("../../assets/quran-fonts/QCF2591.ttf");
        break;
      case "QCF-592":
        fontsToLoad[
          "QCF-592"
        ] = require("../../assets/quran-fonts/QCF2592.ttf");
        break;
      case "QCF-593":
        fontsToLoad[
          "QCF-593"
        ] = require("../../assets/quran-fonts/QCF2593.ttf");
        break;
      case "QCF-594":
        fontsToLoad[
          "QCF-594"
        ] = require("../../assets/quran-fonts/QCF2594.ttf");
        break;
      case "QCF-595":
        fontsToLoad[
          "QCF-595"
        ] = require("../../assets/quran-fonts/QCF2595.ttf");
        break;
      case "QCF-596":
        fontsToLoad[
          "QCF-596"
        ] = require("../../assets/quran-fonts/QCF2596.ttf");
        break;
      case "QCF-597":
        fontsToLoad[
          "QCF-597"
        ] = require("../../assets/quran-fonts/QCF2597.ttf");
        break;
      case "QCF-598":
        fontsToLoad[
          "QCF-598"
        ] = require("../../assets/quran-fonts/QCF2598.ttf");
        break;
      case "QCF-599":
        fontsToLoad[
          "QCF-599"
        ] = require("../../assets/quran-fonts/QCF2599.ttf");
        break;
      case "QCF-600":
        fontsToLoad[
          "QCF-600"
        ] = require("../../assets/quran-fonts/QCF2600.ttf");
        break;
      case "QCF-601":
        fontsToLoad[
          "QCF-601"
        ] = require("../../assets/quran-fonts/QCF2601.ttf");
        break;
      case "QCF-602":
        fontsToLoad[
          "QCF-602"
        ] = require("../../assets/quran-fonts/QCF2602.ttf");
        break;
      case "QCF-603":
        fontsToLoad[
          "QCF-603"
        ] = require("../../assets/quran-fonts/QCF2603.ttf");
        break;
      case "QCF-604":
        fontsToLoad[
          "QCF-604"
        ] = require("../../assets/quran-fonts/QCF2604.ttf");
        break;
      default:
        fontsToLoad["QCF-1"] = require("../../assets/quran-fonts/QCF2001.ttf");
        break;
    }
  });
  return Font.loadAsync(fontsToLoad);
};

export default useFonts;

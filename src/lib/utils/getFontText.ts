import { fontMappings } from "./fontMappings";

export const loadBase64Font = async (
  pageNumber: number
): Promise<string | null> => {
  try {
    return fontMappings[2000 + pageNumber];
  } catch (error) {
    console.error("Error loading base64 font:", error);
    return null;
  }
};

export const loadHeaderFont = () => {
  return fontMappings["BSML"];
};

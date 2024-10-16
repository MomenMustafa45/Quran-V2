// Helper function to generate font mappings dynamically
const generateFontMappings = () => {
  const fontsObj = {};

  for (let i = 1; i <= 604; i++) {
    const fontKey = `QCF-${i}`;
    const fontFile = `../../assets/quran-fonts/QCF${2000 + i}.ttf`;

    // Dynamically require each font file
    fontsObj[fontKey] = `${fontFile}`;
  }

  return fontsObj;
};

console.log(generateFontMappings());

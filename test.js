// ConvertFontToBase64.js
// const fs = require("fs");
// const path = require("path");

// const start = 2001;
// const end = 2604;
// const outputFile = path.join(__dirname, "fontMappings.ts");

// let fileContent = `// Auto-generated fontMappings.ts\n\nexport const fontMappings = {\n`;

// for (let i = start; i <= end; i++) {
//   fileContent += `  ${i}: require("../../../assets/quran-fonts/${i}.ts").font,\n`;
// }

// fileContent += `};\n`;

// fs.writeFileSync(outputFile, fileContent, "utf8");

// console.log(`fontMappings.ts has been generated successfully!`);

// (async function processFonts() {
//   for (let index = 1; index <= 604; index++) {
//     const fontIndex = 2000 + index; // Calculate the font index for each file
//     const filePath = `assets/quran-fonts/QCF${fontIndex}.ttf`;

//     try {
//       const data = await fs.promises.readFile(filePath);
//       const base64 = data.toString("base64");
//       fontObject[fontIndex] = base64;
//       console.log(`Processed font ${fontIndex}`);
//     } catch (err) {
//       console.error(`Error processing font ${fontIndex}:`, err);
//     }
//   }

//   // Once all fonts are processed, write the object to test.ts
//   const outputContent = `export default ${JSON.stringify(
//     fontObject,
//     null,
//     2
//   )};`;

//   fs.writeFile("test.ts", outputContent, (err) => {
//     if (err) {
//       console.error("Error writing test.ts:", err);
//     } else {
//       console.log("test.ts created successfully with all font data.");
//     }
//   });
// })();

// for (let index = 1; index <= 604; index++) {
//   const fontIndex = 2000 + index;
//   const filePath = `assets/quran-fonts/QCF${fontIndex}.ttf`;

//   fs.readFile(filePath, (err, data) => {
//     if (err) throw err;
//     const base64 = data.toString("base64");

//     // Content of each .ts file
//     const tsContent = `export default { font: "${base64}" };`;

//     // Write each .ts file with the base64 encoded data
//     fs.writeFile(`assets/quran-fonts/${fontIndex}.ts`, tsContent, (err) => {
//       if (err) throw err;
//       console.log(`Created file ${fontIndex}.ts`);
//     });
//   });
// }

// for (let index = 1; index <= 604; index++) {
//   fs.readFile(`assets/quran-fonts/QCF${2000 + index}.ttf`, (err, data) => {
//     if (err) throw err;
//     const base64 = data.toString("base64");
//     fs.writeFile(
//       `assets/quran-fonts/${2000 + index}.ts`,
//       base64,
//       (er, data) => {
//         if (err) throw err;
//         console.log("done created file");
//       }
//     );
//     console.log("done");
//   });
// }

// fs.readFile(`assets/quran-fonts/QCF2004.ttf`, (err, data) => {
//   if (err) throw err;
//   const base64 = data.toString("base64");
//   fs.writeFile("assets/quran-fonts/2004.txt", base64, (er, data) => {
//     if (err) throw err;
//     console.log("done created file");
//   });
//   console.log("done");
// });

// const writeObjFontfunction = () => {
//   const obj = {};
//   for (let index = 1; index <= 604; index++) {
//     fs.readFile(`assets/quran-fonts/${2000 + index}.txt`, (err, data) => {
//       if (err) throw err;
//       const base64 = data.toString("base64");
//       fs.writeFile(
//         `assets/quran-fonts/${2000 + index}.txt`,
//         base64,
//         (er, data) => {
//           if (err) throw err;
//           console.log("done created file");
//         }
//       );
//       console.log("done");
//     });
//   }
// };

"use strict";
const vocals = [
  "a",
  "à",
  "á",
  "e",
  "è",
  "é",
  "i",
  "ì",
  "í",
  "o",
  "ò",
  "ó",
  "u",
  "ù",
  "ú",
];

startApp();

function startApp() {
  let text = prompt("Introduce un texto");
  document.write(`El texto "${text}"
  posee ${countVocals(text)} vocales`);
}

function countVocals(text) {
  let vocalsCounter = 0;

  for (let index = 0; index < text.length; index++) {
    if (isVocal(text[index])) {
      ++vocalsCounter;
    }
  }
  return vocalsCounter;
}

function isVocal(letter) {
  return vocals.includes(letter.toLowerCase());
}

"use strict";
const vocals = [
  "a",
  "à",
  "á",
  "ä",
  "e",
  "è",
  "é",
  "ë",
  "i",
  "ì",
  "í",
  "ï",
  "o",
  "ò",
  "ó",
  "ö",
  "u",
  "ù",
  "ú",
  "ü",
];

startApp();

function startApp() {
  let text = prompt("Introduzca una cadena");
  let postionFirstVocal = getPositionFirstVocal(text);
  document.write(`${text}`);
  document.write("<br>");
  if (postionFirstVocal != null) {
    document.write(
      `La primera vocal se encuentra en la posición: ${postionFirstVocal}`
    );
    return;
  }
  document.write("El texto no posee vocales");
}

function getPositionFirstVocal(text) {
  for (let i = 0; i < text.length; i++) {
    if (isVocal(text[i])) {
      return i;
    }
  }
  return null;
}

function isVocal(letter) {
  return vocals.includes(letter.toLowerCase());
}

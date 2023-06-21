"use strict";
const openSeparator = "(";
const closeSeparator = ")";

// los dos tienen () -> (....)
// solo tiene uno ( -> (...
// solo tiene ) -> ""
// no tiene nada -> ""

starApp();

function starApp() {
  let text = prompt("Introduzca una cadena");
  document.write(`La cadena a mostrar es ${extractTextInsideSeparator(text)}`);
}

function extractTextInsideSeparator(text) {
  let indexOpenSeparator = getSeparatorIndex(text, openSeparator);
  if (hasBothSeparator(text) && isOpenSeparatorFirst(text)) {
    return text.substring(
      indexOpenSeparator,
      getSeparatorIndex(text, closeSeparator) + 1
    );
  }

  if (text.includes(openSeparator)) {
    return text.substring(indexOpenSeparator, text.length);
  }
  return "";
}

function hasBothSeparator(text) {
  return (
    getSeparatorIndex(text, openSeparator) != null &&
    getSeparatorIndex(text, closeSeparator) != null
  );
}

function isOpenSeparatorFirst(text) {
  return (
    getSeparatorIndex(text, openSeparator) <
    getSeparatorIndex(text, closeSeparator)
  );
}

function getSeparatorIndex(text, separator) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] == separator) {
      return i;
    }
  }
  return null;
}

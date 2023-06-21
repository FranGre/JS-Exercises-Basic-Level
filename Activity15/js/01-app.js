"use strict";

const separator = "-";

let text = prompt("Introduzca un texto");
document.write(`${addSeparatorToText(text)}`);

function addSeparatorToText(text) {
  let textWithSeparator = "";
  for (let index = 0; index < text.length; index++) {
    textWithSeparator += handleChar(index, text);
  }
  return deleteLastChar(textWithSeparator);
}

function handleChar(index, text) {
  if (text[index] == " ") {
    return " " + separator;
  }
  return text[index].concat(separator);
}

function deleteLastChar(text) {
  return text.substring(0, text.length - 1);
}

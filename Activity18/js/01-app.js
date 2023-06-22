"use strict";

startApp();

function startApp() {
  let text = prompt("Introduce una cadena");
  document.write(`${reverseText(text)}`);
}

function reverseText(text) {
  let textReversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    textReversed += text[i];
  }
  return textReversed;
}

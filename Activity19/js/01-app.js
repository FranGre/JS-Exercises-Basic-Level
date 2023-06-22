"use strict";

startApp();

function startApp() {
  let text = prompt("Introduce una cadena");
  document.write(`${text} : ${reverseText(text)}`);
  document.write("<br>");
  document.write(`¿Es palídromo? ${isPalidromo(text) ? "Yes" : "Nope"} `);
}

function isPalidromo(text) {
  const strFormatted = text.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = reverseText(strFormatted);

  return strFormatted === strReversed;
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

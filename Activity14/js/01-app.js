"use strict";

let text = askString("Introduzca un texto");
document.write(`${text.toUpperCase()}`);

function askString(msg) {
  return prompt(msg);
}

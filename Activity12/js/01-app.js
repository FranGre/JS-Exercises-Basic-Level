"use strict";

const maxResults = 14;

for (let attempt = 1; attempt <= maxResults; attempt++) {
  document.write(`Resultado ${attempt}: ${generateResult()}`);
  document.write("<br>");
}

function generateResult() {
  let randomNumber = generateRandomFromRange(1, 3);
  const results = {
    1: "1",
    2: "X",
    3: "2",
  };
  return results[randomNumber];
}

function generateRandomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

"use strict";

const maxResults = 14;

const probability1 = 6;
const probabilityX = 3;
const probability2 = 1;

const valueOne = "1";
const valueX = "X";
const valueXNumber = 3;
const valueTwo = "2";

for (let attempt = 1; attempt <= maxResults; attempt++) {
  document.write(`Resultado ${attempt}: ${generateResult()}`);
  document.write("<br>");
}

function generateResult() {
  let randomNumberWithProbability = generateRandomFromRangeWithProbability();
  const results = {
    1: valueOne,
    2: valueX,
    3: valueTwo,
  };
  return results[randomNumberWithProbability];
}

function generateRandomFromRangeWithProbability() {
  let numbersWithProbability = generateArrayBasedProbabilities();
  let position = Math.floor(Math.random() * numbersWithProbability.length);
  return numbersWithProbability[position];
}

function generateArrayBasedProbabilities() {
  let array = [];

  array = pushValues(array, probability1, valueOne);
  array = pushValues(array, probabilityX, valueXNumber);
  array = pushValues(array, probability2, valueTwo);
  return array;
}

function pushValues(array, probability, value) {
  for (let i = 1; i <= probability; i++) {
    array.push(value);
  }
  return array;
}

const attemps = 3;
const minValue = 1;
const maxValue = 99;

document.write(
  `${generateThreeRandomNumbersWithoutDuplicates(maxValue, minValue)}`
);

function generateThreeRandomNumbersWithoutDuplicates(maxValue, minValue) {
  do {
    let arrayRandom = generateThreeRandomNumbers(maxValue, minValue);
    if (!hasDuplicates(arrayRandom)) {
      return arrayRandom;
    }
    alert(`${arrayRandom}`);
    alert("Existen valores duplicados");
  } while (true);
}

function generateThreeRandomNumbers(max, min) {
  let randomNumbers = [];
  for (let i = 1; i <= attemps; i++) {
    randomNumbers.push(generateRandomNumber(max, min));
  }
  return randomNumbers;
}

function generateRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hasDuplicates(arr) {
  return arr.some(function (item) {
    return arr.indexOf(item) !== arr.lastIndexOf(item);
  });
}

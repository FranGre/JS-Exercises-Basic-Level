const four = 4;
const nine = 9;
const five = 5;

for (let i = 1; i <= 500; i++) {
  handleMultiples(i);
}

function isMultipleFour(number) {
  return number % four == 0;
}

function isMultipleNine(number) {
  return number % nine == 0;
}

function isMultipleFive(number) {
  return number % five == 0;
}

function handleMultiples(number) {
  document.write(`${number}`);
  if (isMultipleFour(number)) {
    document.write(` (Múltiplo de ${four})`);
  }
  if (isMultipleNine(number)) {
    document.write(` (Múltiplo de ${nine})`);
  }
  if (isMultipleFive(number)) {
    document.write("<br>");
    document.write(` -----`);
  }
  document.write("<br>");
}

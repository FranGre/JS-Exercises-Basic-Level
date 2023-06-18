do {
  let number = prompt("Introduce un número");
  if (isNumber(number)) {
    if (isValidNumber(number)) {
      for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
          document.write(`${j} `);
        }
        document.write("<br>");
      }
      break;
    }
  }
  alert("Solo se admiten números enteros del 1 al 50");
} while (true);

function isNumber(number) {
  return Number.parseInt(number) == number;
}

function isValidNumber(number) {
  return number >= 1 && number <= 50;
}

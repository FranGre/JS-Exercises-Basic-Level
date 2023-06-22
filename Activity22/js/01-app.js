"use strict";

const maxRange = 100;
const minRange = 1;

startApp();

function startApp() {
  let routeMax = askInt("Introduzca un número");
  document.write(`La suma es: ${calculateFibonacci(routeMax)}`);
}

function calculateFibonacci(routeMax) {
  if (routeMax <= 1) return routeMax;

  let prev2 = 0;
  let prev1 = 1;
  let result = 0;

  for (let i = 2; i <= routeMax; i++) {
    result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }

  return result;
}

function askInt(text) {
  do {
    let number = prompt(text);
    if (isInt(number) && isValidRange(number)) {
      return number;
    }
    alert(`Debes introducir un número entre ${minRange} y ${maxRange}`);
  } while (true);
}

function isValidRange(number) {
  return number >= minRange && number <= maxRange;
}

function isInt(number) {
  return Number.parseInt(number) == number;
}

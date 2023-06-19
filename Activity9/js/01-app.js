const totalAttempts = 3;

let attemps = 1;
let oldestAge = 0;
let nameOldestAge;
let ageBefore;
do {
  let age = askAge();
  let name = askName();
  oldestAge = Math.max(ageBefore, age);
  ageBefore = age;
} while (++attemps <= totalAttempts);
alert(`${oldestAge}`);

function askAge() {
  let age = askInt();
  if (!isInt(age)) {
    alert("Solo se admiten numeros enteros");
    return;
  }
  if (!isValidRangeAge(age)) {
    alert("La edad debe ser entre 1 y a 120, ambos incluidos");
    return;
  }
  return Number.parseInt(age);
}

function isValidRangeAge(age) {
  return age >= 1 && age <= 120;
}

function askInt() {
  return prompt("Introduzca su edad");
}

function isInt(age) {
  return Number.parseInt(age) == age;
}

function askName() {
  let name = prompt("Introduzca su nombre");
  if (!hasNumbers(name)) {
    return name;
  }
  alert("El nombre no puede contener números");
}

function hasNumbers(name) {
  return /\d/.test(name);
}

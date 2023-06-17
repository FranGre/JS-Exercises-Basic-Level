let number;
let suma = 0;

do {
  number = prompt("Introduzca un número");
  if (isNumber(number)) {
    number = Number.parseFloat(number);
    suma += number;
  } else {
    alert("No es un número");
  }
} while (confirm("¿Quiere seguir introduciendo números?"));
document.write(`La suma total es ${suma}`);

function isNumber(number) {
  return Number(number) == number;
}

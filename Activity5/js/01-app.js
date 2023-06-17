const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";

do {
  let dniWithoutLetter = prompt("Inserte su dni");
  try {
    if (!isValidDni(dniWithoutLetter)) {
      throw new DniInvalid("El dni tener 8 números, del 00000001 al 99999999");
    }
    alert(
      `Su dni es ${(dniWithoutLetter, calculateDniLetter(dniWithoutLetter))}`
    );
  } catch (error) {
    alert(error.message);
  }
} while (confirm("¿Quieres calcular la letra de otro dni?"));

function isValidDni(dni) {
  return isValidSize(dni) && isValidRange(dni);
}

function isValidSize(dni) {
  return dni.toString().length == 8;
}

function isValidRange(dni) {
  return dni >= 1 && dni <= 99999999;
}

function DniInvalid(message) {
  const error = new Error(message);
  return error;
}

function calculateDniLetter(dni) {
  let indexDni = dni % 23;
  return dniLetters.charAt(indexDni);
}

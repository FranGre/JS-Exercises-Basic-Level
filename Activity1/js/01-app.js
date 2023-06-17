const mayorEdad = 18;

let edad = prompt("Que edad tienes?");

try {
  if (!isParseableToNumber(edad)) {
    throw new AgeTypeNotAllowed("Solo admite números");
  }

  canDrive(edad);
} catch (e) {
  console.log("Error", e.message);
}

function isParseableToNumber(numberStr) {
  return Number(numberStr) == numberStr;
}

function canDrive(edad) {
  if (isAdult(edad)) {
    document.write("Puedes conducir");
  } else {
    document.write("No puedes conducir");
  }
}

function isAdult(edad) {
  return edad >= mayorEdad;
}

function AgeTypeNotAllowed(message) {
  const error = new Error(message);
  return error;
}

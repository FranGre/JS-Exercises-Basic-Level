const muyDeficiente = 3;
const insuficiente = 5;
const suficiente = 6;
const bien = 7;
const notable = 9;
const sobresaliente = 10;

do {
  let nota = prompt("Introduzca su nota");
  try {
    if (!isNumber(nota)) {
      throw new NoteTypeNotAllowed("Error, solo admite números");
    }
    alert(handleNota(nota));
    let askContinue = prompt("Quieres continuar? S/N");
    if (!isContinue(askContinue)) {
      break;
    }
  } catch (e) {
    alert(e.message);
  }
} while (true);

function isNumber(nota) {
  return Number(nota) == nota;
}

function handleNota(nota) {
  let notaMessage;
  if (nota >= 0 && nota < muyDeficiente) {
    notaMessage = `Muy deficiente ${nota}`;
  } else if (nota >= muyDeficiente && nota < insuficiente) {
    notaMessage = `Insuficiente ${nota}`;
  } else if (nota >= insuficiente && nota < suficiente) {
    notaMessage = `Suficiente ${nota}`;
  } else if (nota >= suficiente && nota < bien) {
    notaMessage = `Bien ${nota}`;
  } else if (nota >= bien && nota < notable) {
    notaMessage = `Notable ${nota}`;
  } else if (nota >= notable && nota <= sobresaliente) {
    notaMessage = `Sobresaliente ${nota}`;
  } else {
    notaMessage = "Nota inválida";
  }
  return notaMessage;
}

function isContinue(finish) {
  return finish.toUpperCase() == "S";
}

function NoteTypeNotAllowed(message) {
  const error = new Error(message);
  return error;
}

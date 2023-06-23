"use strict";

const options = ["piedra", "papel", "tijera"];
const idPiedra = 0;
const idPapel = 1;
const idTijera = 2;

startApp();

function startApp() {
  do {
    let playerUserOption = askOption("¿Qué desea sacar?");
    let playerMachineOption = generateRandomOption();
    alert(`El jugador sacó -> ${playerUserOption}
    La máquina sacó -> ${playerMachineOption}`);
    let winner = handleOptions(playerUserOption, playerMachineOption);
    alert(`Ganó ${winner}`);
  } while (confirm("¿Quieres jugar de nuevo?"));
}

function handleOptions(userOption, machineOption) {
  if (userOption == machineOption) {
    return "Empate";
  }
  if (winsPiedra(userOption, machineOption)) {
    return options[0];
  }

  if (winsPaper(userOption, machineOption)) {
    return options[1];
  }

  if (winsTijera(userOption, machineOption)) {
    return options[2];
  }
}

function askOption(text) {
  do {
    let option = prompt(text);

    if (options.includes(option)) {
      return option;
    }

    alert(`Solo admite ${options.toString()}`);
  } while (true);
}

function generateRandomOption() {
  let randomNumber = generateRandomNumberIntervale(options.length - 1, 0);
  return options[randomNumber];
}

function generateRandomNumberIntervale(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winsPaper(userOption, machineOption) {
  return (
    (userOption == options[idPapel] || machineOption == options[idPapel]) &&
    (userOption == options[idPiedra] || machineOption == options[idPiedra])
  );
}

function winsPiedra(userOption, machineOption) {
  return (
    (userOption == options[idPiedra] || machineOption == options[idPiedra]) &&
    (userOption == options[idTijera] || machineOption == options[idTijera])
  );
}

function winsTijera(userOption, machineOption) {
  return (
    (userOption == options[idTijera] || machineOption == options[idTijera]) &&
    (userOption == options[idPapel] || machineOption == options[idPapel])
  );
}

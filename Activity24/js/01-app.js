"use strict";

starApp();

function starApp() {
  let title = prompt("Introduzca el titulo de la receta");
  let servers = prompt("Introduzca el número de raciones");
  let ingredientes = prompt(
    "Introduzca que ingredientes lleva separados por una ,"
  );

  if (!isInt(servers)) {
    alert("Las raciones deben ser un número entero");
    return;
  }

  if (servers <= 0) {
    alert("Debe haber como mínimo una ración");
    return;
  }

  const recipe = new Recipe(title, servers, ingredientes.split(","));

  console.log(recipe);
}

function Recipe(title, servings, ingredientes) {
  this.title = title;
  this.servings = servings;
  this.ingredientes = ingredientes;
}

function isInt(number) {
  return Number.parseInt(number) == number;
}

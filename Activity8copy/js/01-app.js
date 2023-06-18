const one = 1;

let rows = askInt("Introduzca el numero de filas");
if (!isNumberPositive(rows)) {
  alert(`El número de filas debe ser igual o mayor que ${one}`);
}
let cells = askInt("Introduzca el numero de columnas");
if (!isNumberPositive(cells)) {
  alert(`El número debe ser igual o mayor que ${one}`);
}
addTable(rows, cells);

function askInt(message) {
  do {
    let number = prompt(message);
    if (isInt(number)) {
      return Number.parseInt(number);
    }
    alert("Solo se admiten números enteros");
  } while (true);
}

function isNumberPositive(number) {
  return number >= one;
}

function isInt(number) {
  return Number.parseInt(number) == number;
}

function addTable(rows, cells) {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement("TABLE");
  table.border = "1";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);

  let inremento = 1;
  for (var i = 1; i <= rows; i++) {
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 1; j <= cells; j++) {
      var td = document.createElement("TD");
      td.width = "75";
      td.appendChild(document.createTextNode(`${inremento}`));
      ++inremento;
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}

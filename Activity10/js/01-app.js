for (let i = 1; i <= 5; i++) {
  document.write(`${generateRandom(1, 3)}`);
  document.write("<br>");
}

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

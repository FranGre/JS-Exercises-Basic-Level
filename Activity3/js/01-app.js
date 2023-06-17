let cadenaConcatenada = "";

do {
  let word = prompt("Introduzca una palabra");
  cadenaConcatenada = cadenaConcatenada.concat(word.concat("-"));
} while (confirm("Quieres seguir?"));
cadenaConcatenada = cadenaConcatenada.substring(
  0,
  cadenaConcatenada.length - 1
);
document.write(cadenaConcatenada);

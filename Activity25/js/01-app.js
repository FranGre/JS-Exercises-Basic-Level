"use strict";
const books = [];

starApp();

function starApp() {
  let oniria = new Book("Oniria", "Alberto Fausto", true);
  let cleanCode = new Book("Clean Code", "Robert C. Martin", false);
  books.push(oniria);
  books.push(cleanCode);

  showBooks(books);
}

function showBooks(books) {
  for (let i = 0; i < books.length; i++) {
    let textReaded = handleIsReadText(books[i]);
    document.write(
      textReaded + ` read \"${books[i].title}\" by ${books[i].author}`
    );
    document.write("<br>");
  }
}

function handleIsReadText(book) {
  if (book.isAlreadyRead) {
    return "You already";
  }
  return "You still need to";
}

function Book(title, author, isAlreadyRead) {
  this.title = title;
  this.author = author;
  this.isAlreadyRead = isAlreadyRead;
}

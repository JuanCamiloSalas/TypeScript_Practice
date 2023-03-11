"use strict";
const book = {
    id: 1,
    title: "Pinocho",
    author: "Fuan Ca",
};
// Array de x interfaz
const books = [];
// Función que retorna un obj de tipo Book (una interfaz)
function getBook() {
    return { id: 1, title: "Pinocho", author: "Fuan Ca" };
}
const myBook = getBook();
// Función que recibe y retorna un obj de tipo Book (una interfaz)
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: "Pinocho",
    author: "Fuan Ca",
    coAuthor: "Sarilu",
};
createBook(newBook);

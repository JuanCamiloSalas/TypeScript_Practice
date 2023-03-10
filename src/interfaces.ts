// Interface
interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void;
}

const book: Book = {
    id: 1,
    title: "Pinocho",
    author: "Fuan Ca",
};

// Array de x interfaz
const books: Book[] = [];

// Función que retorna un obj de tipo Book (una interfaz)
function getBook(): Book {
    return { id: 1, title: "Pinocho", author: "Fuan Ca" };
}

const myBook = getBook();

// Función que recibe y retorna un obj de tipo Book (una interfaz)
function createBook(book:Book):Book {
    return book;
}

const newBook: Book = { 
    id: 1, 
    title: "Pinocho", 
    author: "Fuan Ca",
    coAuthor: "Sarilu", 
};

createBook(newBook);
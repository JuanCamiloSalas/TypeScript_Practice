// variable
const PI = 3.14;

// interface
interface Person {
    id: number;
    name: string;
}

// Function
function generateRandomNumber(): number {
    return Math.round(Math.random() * 100);
}

export { PI, Person, generateRandomNumber}
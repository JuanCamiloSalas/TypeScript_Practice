// Basic types
let myTypeString: string = "hello world";
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

// Array
let arrNumber : number[] = [1,2,3];
let arrNumber2 : Array<number> = [1,2,3];
let arrStrings : string[] = ["uno", "dos", "tres"];
let arrAny : any[] = ["Hole", 1, true, ()=>{}, {}];

// Tuple
let tuplePlayers: [string, number, boolean] = ["Killer", 25, true];

// Tuple Array
let players: [number, string][];
players = [
    [1, 'Lebron'],
    [2, 'Jordan'],
    [3, 'Carry'],
]

// Variable aún sin asignación
let myVariable;

// Variable sin asignación pero tipada
let myVariable1: boolean;

// Variable con asignación y tipada con inferencia de datos
let myVariable2 = "Hola mundo"; // Se infiere que es string
let myNumber2 = 2; // Se infiere que es number

// Composición de tipos
// Unions types
let myVariable3: string | number | null;

"use strict";
// Basic types
let myTypeString = "hello world";
let myTypeNumber = 33;
let myTypeBoolean = true;
// Array
let arrNumber = [1, 2, 3];
let arrNumber2 = [1, 2, 3];
let arrStrings = ["uno", "dos", "tres"];
let arrAny = ["Hole", 1, true, () => { }, {}];
// Tuple
let tuplePlayers = ["Killer", 25, true];
// Tuple Array
let players;
players = [
    [1, 'Lebron'],
    [2, 'Jordan'],
    [3, 'Carry'],
];
// Variable aún sin asignación
let myVariable;
// Variable sin asignación pero tipada
let myVariable1;
// Variable con asignación y tipada con inferencia de datos
let myVariable2 = "Hola mundo"; // Se infiere que es string
let myNumber2 = 2; // Se infiere que es number
// Composición de tipos
// Unions types
let myVariable3;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.PI = void 0;
// variable
const PI = 3.14;
exports.PI = PI;
// Function
function generateRandomNumber() {
    return Math.round(Math.random() * 100);
}
exports.generateRandomNumber = generateRandomNumber;

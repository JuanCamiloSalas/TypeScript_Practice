"use strict";
// Functions
function greet(name = 'Unknown user') {
    console.log(`Hello, ${name.toUpperCase()}!`);
}
greet("Juan Ca");
greet();
// function getNumber():number {
//     return Math.floor(Math.random() * 100);
// }
// console.log(getNumber());
// function prinPosition(position:{lat: number, long: number | string}):void {
//     console.log(`Latitude & Longitude are: \nLAT: ${position.lat}\nlONG: ${position.long}`);   
// }
// prinPosition({lat: 3, long: 555});

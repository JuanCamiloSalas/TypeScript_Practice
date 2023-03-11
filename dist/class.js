"use strict";
// Class
class Person {
    constructor() {
        this.zone = "Caribean";
        this.city = "Santiago Domingo";
        this.country = "R.D.";
    }
    greet() {
        console.log("Helloo!");
    }
}
class Employee extends Person {
    // Atributos
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    // Métodos
    showInfo() {
        console.log(`${this.name} ${this.zone} ${this.city}`);
    }
}
const emp = new Employee(1, "Fuan ca", "Sales");

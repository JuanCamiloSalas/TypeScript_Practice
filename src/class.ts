// Class

class Person {
    
    public zone = "Caribean";
    protected city = "Santiago Domingo";
    private country = "R.D.";
    
    constructor () {}

    greet(): void {
        console.log("Helloo!");
    }
}

class Employee extends Person {
    // Atributos

    
    constructor (private readonly id: number, private readonly name: string, private readonly dept: string) {
        super();
        this.showInfo();
    }

    // Métodos
    private showInfo(): void {
        console.log(`${this.name} ${this.zone} ${this.city}`);
    } 
}

const emp = new Employee(1, "Fuan ca", "Sales");
// console.log(emp.dept)
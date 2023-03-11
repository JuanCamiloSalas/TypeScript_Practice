"use strict";
// Generics
// type dataType = Person | Product;
class DataCollection {
    constructor() {
        this.items = [];
        // getNames(): string[] {
        //     return this.items.map(item => item.name);
        // }
        // getItemById(id: number): T | undefined {
        //     return this.items.find((item: T) => item.id === id);
        // }
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List ot items: \n ${JSON.stringify(this.items)}`);
    }
}
const productCollection = new DataCollection();
const newData2 = {
    id: 1,
    name: 'Beer',
    price: 320,
};
productCollection.addItem(newData2);
productCollection.getItems();

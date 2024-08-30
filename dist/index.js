"use strict";
//--------------------
// Generic Constraints
//--------------------
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}
const users = new DataCollection([
    { name: "john", score: 80, id: 1 },
    { name: "mary", score: 75, id: 2 },
    { name: "david", score: 90, id: 3 },
]);
users.add({ name: "jen", score: 100, id: 4 });
users.deleteOne(3);
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());

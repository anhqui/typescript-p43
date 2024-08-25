"use strict";
//------------------
// Generic Classes
//------------------
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
}
const users = new DataCollection([
    { name: "john", score: 80 },
    { name: "mary", score: 75 },
    { name: "david", score: 90 },
]);
users.add({ name: "jen", score: 100 });
// const user = users.loadAll();
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());

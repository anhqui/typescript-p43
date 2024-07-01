"use strict";
//-----------------------------
// interface feature/properties
//-----------------------------
const authorOne = { id: 1, name: 'Mary', avatar: '/img/mary.png' };
const authorTwo = { id: 2, name: 'John' };
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'Qui', score: 80 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'John', score: 100 });

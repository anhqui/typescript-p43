"use strict";
//--------------
// Generics 101
//--------------
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
const result = logAndReturnNumber(5);
const myString = logAndReturnString('hello');
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const resultAny = logAndReturnValue('hello world');
const resultOne = logAndReturnValue(5);
// example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: 'john', score: 100 },
    { name: 'mary', score: 150 },
    { name: 'david', score: 75 },
    { name: 'jen', score: 90 }
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);

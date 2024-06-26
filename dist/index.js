"use strict";
//---------
// array
//---------
let names = ['Qui', 'John', 'Mary'];
let ages = [25, 28, 24];
names.push('David');
ages.push(56);
//----------------------------
// type inference with arrays
//----------------------------
let myAge = 32;
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
//-----------------
// object literals
//-----------------
let user = {
    firstName: 'Qui',
    age: 25,
    id: 1,
};
user.firstName = 'John';
user.id = 2;
//------------------------------------
// type inference with object literals
//------------------------------------
let person = {
    name: 'Alex',
    score: 90
};
person.name = 'Loan';
person.score = 60;
const score = person.score;

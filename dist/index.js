"use strict";
//-----------
// functions
//-----------
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(1, 2);
const substractTwoNumbers = (a, b) => {
    return a - b;
};
substractTwoNumbers(3, 2);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 5, 8, 10]);
//-----------------------
// return type inference
//-----------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
formatGreeting('Qui', 'hello');

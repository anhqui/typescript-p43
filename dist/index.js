"use strict";
//--------------------
// function signatures
//--------------------
function addTwoNumbers(a, b) {
    return a + b;
}
function multiplyTwoNumbers(first, second) {
    return first * second;
}
function squareNumber(num) {
    return num * num;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
// calcs.push(joinTwoNumbers)
calcs.push(squareNumber);
// interface HasArea{
//     name: string
//     calcArea(a: number): number   // ---> another way to declare calcArea signature
// }
const shapeOne = {
    name: 'square',
    calcArea(l) {
        return l * l;
    }
};
const shapeTwo = {
    name: 'circle',
    calcArea(r) {
        return Math.PI * Math.pow(r, 2);
    }
};
const squareArea = shapeOne.calcArea(5);
const circleArea = shapeTwo.calcArea(10);
console.log(squareArea, circleArea);

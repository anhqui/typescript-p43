"use strict";
//------------------
// Generic Interface
//------------------
const collectionOne = {
    data: ['john', 'mary', 'david'],
    name: 'john charaters'
};
const collectionTwo = {
    data: [1, 10, 23, 65, 99],
    name: 'winning lottery numbers'
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
console.log(resultOne, resultTwo);

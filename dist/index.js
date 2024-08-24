"use strict";
//------------------
// Intersection Type
//------------------
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue({ title: 'TypeScript for beginners', thumbsUp: 1500 });
console.log(post.id, post.title, post.thumbsUp);

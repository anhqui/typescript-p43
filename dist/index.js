"use strict";
//------------
// interfaces
//-----------
const authorOne = { name: 'Mary', avatar: '/img/mary.png' };
const newPost = {
    title: 'my first post',
    body: 'typescript is awesome',
    tags: ['tuples', 'any', 'interface'],
    create_at: new Date(),
    author: authorOne
};
//----------------------------
// as function argument types
//----------------------------
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//---------------
// with arrays
//---------------
let posts = [];
posts.push(newPost);

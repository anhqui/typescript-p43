//------------
// interfaces
//-----------

interface Author{
    name: string
    avatar: string
}

const authorOne: Author = {name: 'Mary', avatar: '/img/mary.png'}

interface Post{
    title: string
    body: string
    tags: string[]
    create_at: Date
    author: Author
}

const newPost = {
    title: 'my first post',
    body: 'typescript is awesome',
    tags: ['tuples', 'any', 'interface'],
    create_at: new Date(),
    author: authorOne
}


//----------------------------
// as function argument types
//----------------------------

function createPost(post: Post):void{
    console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost)

//---------------
// with arrays
//---------------

let posts: Post[] = []
posts.push(newPost)
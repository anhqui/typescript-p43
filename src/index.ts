//------------------
// Intersection Type
//------------------

// type Person = {
//     firstName: string
//     id: number
// }

// type User = Person & {
//     email: string
// }

interface HasID{
    id: number
}

function addIdToValue<T>(val: T): T & HasID{
    const id = Math.random()
    return {...val, id}
}

interface Post{
    title: string
    thumbsUp: number
}
const post = addIdToValue<Post>({title: 'TypeScript for beginners', thumbsUp: 1500})

console.log(post.id, post.title, post.thumbsUp);

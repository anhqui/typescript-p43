
//-------------
// union types
//-------------

let someId: number | string

someId = 1
someId = '2'

let email: string | null = null

email =  'john@gmail.com'

email = null

type Id = number | string
let anotherId: Id

anotherId = 'hello'
anotherId = 10

// union type pitfall

function swapIdType(id: Id): Id{
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed

    return id
}
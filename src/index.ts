//-----------------------
// extending type aliases
//-----------------------

type Person = {
    id: string | number
    firstName: string
}

type User = Person & {
    email: string
}

const personOne = {
    id: 1,
    firstName: 'john'
}

const personTwo = {
    id: '2',
    firstName: 'mary',
    email: 'mary@gmail.com'
}

const personThree = {
    email: 'david@gmail.com'
}

function printUser(user: User){
    console.log(user.id, user.email, user.firstName);
}

// printUser(personOne)
printUser(personTwo)
// printUser(personThree)
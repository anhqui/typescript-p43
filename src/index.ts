//--------------
// Generics 101
//--------------

function logAndReturnString(val: string): string{
    console.log(val);
    return val
}
function logAndReturnNumber(val: number): number{
    console.log(val);
    return val
}
function logAndReturnBoolean(val: boolean): boolean{
    console.log(val);
    return val
}

const result = logAndReturnNumber(5)

const myString = logAndReturnString('hello')

function logAndReturnValue<T>(val: T): T{
    console.log(val);
    return val;  
}

const resultAny = logAndReturnValue('hello world')
const resultOne = logAndReturnValue(5)

// example 2

function getRandomArrayValue<T>(values: T[]): T{
    const i = Math.floor(Math.random() * values.length)
    return values[i]
}

interface User{
    name: string
    score: number
}

const users: User[] = [
    {name: 'john', score: 100},
    {name: 'mary', score: 150},
    {name: 'david', score: 75},
    {name: 'jen', score: 90}
]

const randomUser = getRandomArrayValue<User>(users)

console.log(randomUser);

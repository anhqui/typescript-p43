//-----------------------------
// interface feature/properties
//-----------------------------

interface Author{
  readonly id: number
  name: string
  avatar?: string
}

const authorOne: Author = {id: 1, name: 'Mary', avatar: '/img/mary.png'}
const authorTwo: Author = {id: 2,  name: 'John'}


//--------------------
// function interface
//--------------------

interface MathFunc{
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//--------------
// type aliases
//--------------

// example 1 - tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return [r,g,b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()

console.log(colorOne, colorTwo);


// example 2 - object literal

type User = {
    name: string
    score: number
}

const userOne: User = {name: 'Qui', score: 80}

function formatUser(user: User):void{
    console.log(`${user.name} has a score of ${user.score}`);
    
}

formatUser(userOne)
formatUser({name: 'John', score: 100})

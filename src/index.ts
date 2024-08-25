//------------------
// Generic Interface
//------------------

interface Collection<T>{
    data: T[]
    name: string
}

const collectionOne: Collection<string> = {
    data: ['john', 'mary', 'david'],
    name: 'john charaters'
}

const collectionTwo: Collection<number> = {
    data: [1, 10, 23, 65, 99],
    name: 'winning lottery numbers'
}

function randomCollectionItem<T>(c: Collection<T>): T{
    const i = Math.floor(Math.random() * c.data.length)
    return c.data[i]

}

const resultOne = randomCollectionItem<string>(collectionOne)

const resultTwo = randomCollectionItem(collectionTwo)

console.log(resultOne, resultTwo);


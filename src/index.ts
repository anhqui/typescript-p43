//--------------------
// Generic Constraints
//--------------------

interface HasId{
    id: number
}

class DataCollection<T extends HasId>{
    constructor(private data: T[]){}

    loadOne(): T{
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }
    loadAll(): T[]{
        return this.data
    }
    add(val: T): T[]{
        this.data.push(val)
        return this.data
    }
    deleteOne(id: number):void{
        this.data = this.data.filter(item => item.id !== id)
    }
}

interface User{
    name: string
    score: number
    id: number
}

const users = new DataCollection<User>([
    {name: "john", score: 80, id: 1},
    {name: "mary", score: 75, id: 2},
    {name: "david", score: 90, id: 3},
])

users.add({name: "jen", score: 100, id: 4})
users.deleteOne(3)

console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());

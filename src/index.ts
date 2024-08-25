//------------------
// Generic Classes
//------------------


class DataCollection<T>{
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
}

interface User{
    name: string
    score: number
}


const users = new DataCollection<User>([
    {name: "john", score: 80},
    {name: "mary", score: 75},
    {name: "david", score: 90},
])

users.add({name: "jen", score: 100})

// const user = users.loadAll();

console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());

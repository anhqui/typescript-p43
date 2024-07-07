//--------------------
// reusable interfaces
//--------------------

interface hasQuantity{
    quantity: number
}

const something: hasQuantity = {quantity: 50}

function printQuantity(item: hasQuantity): void{
    console.log(`the quantity of the item is ${item.quantity}`);
}

const fruit = {
    name: 'mango',
    quantity: 50
}

const vehicle = {
    name: 'car',
    quantity: 20
}

const person = {
    name: 'John',
    age: 30
}

printQuantity(fruit)
printQuantity(vehicle)
// printQuantity(person)

printQuantity({quantity: 30})
// printQuantity({name: 'mango',quantity: 50})
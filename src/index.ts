//------------
// classes 101
//------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza{
    constructor(title: string, price: number){
        this.title = title
        this.price = price
    }
    title: string
    price: number
    base: Base = 'classic'
    toppings: string[] = []
    addTopping(topping: string): void{
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void{
        this.toppings = this.toppings.filter(t => t !== topping)
    }
    selectBase(b: Base):void{
        this.base = b
    }
}

const pizza = new Pizza('qui special', 15)
const pizzaTwo = new Pizza('john special', 25)

pizza.title
pizzaTwo.price

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')
pizza.addTopping('onion')

pizza.removeTopping('mushrooms')

console.log(pizza);



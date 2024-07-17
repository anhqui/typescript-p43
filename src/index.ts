//------------
// classes 101
//------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza{
    constructor(private title: string, private price: number){}
    
    private base: Base = 'classic'
    private toppings: string[] = []

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

const pizzaOne: Pizza = new Pizza('qui special', 15)
const pizzaTwo = new Pizza('john special', 25)

function addMushroomsToPizzas(pizzas: Pizza[]):void{
    for(const p of pizzas){
        p.addTopping('mushrooms')
    }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo])

console.log(pizzaOne, pizzaTwo);

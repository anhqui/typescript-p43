//-----------
// functions
//-----------

function addTwoNumbers(a: number, b: number):number{
    return a + b
}

addTwoNumbers(1,2)

const substractTwoNumbers = (a: number, b: number): number => {
    return a - b
}

substractTwoNumbers(3, 2)

function addAllNumbers(items: number[]):void{
    const total = items.reduce((a,c) => a + c, 0)
    console.log(total);
}

addAllNumbers([1,2,3,5,8,10])


//-----------------------
// return type inference
//-----------------------

function formatGreeting(name: string, greeting: string){
    return `${greeting}, ${name}`
}

formatGreeting('Qui', 'hello')
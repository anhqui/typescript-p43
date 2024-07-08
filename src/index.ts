//---------------------
// extending interfaces
//---------------------

interface HasFormater{
    format(): string
}

interface Bill extends HasFormater{
    id: string | number
    amount: number
    server: string
}

const user = {
    id: 1,
    format(): string{
        return `This user has an id of ${this.id}`
    }
}

const bill = {
    id: 2,
    amount: 50,
    server: 'mary',
    format(): string{
        return `Bill with id ${this.id} has $${this.amount} to pay`
    }
}

function printFormatted(val: HasFormater): void{
    console.log(val.format());
}

function printBill(bill: Bill):void{
    console.log('server ', bill.server);
    console.log(bill.amount);
}

printFormatted(user)
printFormatted(bill)

// printBill(user)
printBill(bill)
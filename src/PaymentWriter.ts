import { CSVWriter } from "./index"

interface Payment{
    from: string
    to: string
    amount: number
    notes: string
}


const paymentWriter = new CSVWriter<Payment>(['from', 'to', 'amount', 'notes'])

paymentWriter.addRows([
    {from: 'john', to: 'mary', amount: 500, notes: 'web dev fee'},
    {from: 'alex', to: 'peter', amount: 250, notes: 'logo design'},
    {from: 'andrew', to: 'david', amount: 150, notes: 'web maintenance'}
])

paymentWriter.save('./data/payments.csv')
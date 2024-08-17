//--------------------
// CSV Writer Project
//--------------------

import {appendFileSync} from 'fs'

interface Payment{
    from: string
    to: string
    amount: number
    notes: string
}

type PaymentColumns = ('from' | 'to' | 'amount' | 'notes')[]

class CSVWriter{
    constructor(private columns: PaymentColumns){
        this.csv = this.columns.join(',') + '\n';
        // 'from,to,amount,notes'
    }

    private csv: string

    save(filename: string): void{
        appendFileSync(filename, this.csv)

        this.csv ='\n'
        console.log('file saved to', filename);
        
    }

    addRows(values: Payment[]): void{
        let rows = values.map(v=> this.formatRow(v))
        this.csv += rows.join('\n')
        console.log(this.csv);
    }

    private formatRow(p: Payment): string{
        return this.columns.map(col => p[col]).join(',')
        // 'john,mary,500,web dev fee'
    }

}


const writer = new CSVWriter(['from', 'to', 'amount', 'notes'])

writer.addRows([
    {from: 'john', to: 'mary', amount: 500, notes: 'web dev fee'},
    {from: 'alex', to: 'peter', amount: 250, notes: 'logo design'}
])

writer.save('./data/payments.csv')
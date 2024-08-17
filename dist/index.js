"use strict";
//--------------------
// CSV Writer Project
//--------------------
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
        // 'from,to,amount,notes'
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
    addRows(values) {
        let rows = values.map(v => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join(',');
        // 'john,mary,500,web dev fee'
    }
}
const writer = new CSVWriter(['from', 'to', 'amount', 'notes']);
writer.addRows([
    { from: 'john', to: 'mary', amount: 500, notes: 'web dev fee' },
    { from: 'alex', to: 'peter', amount: 250, notes: 'logo design' }
]);
writer.save('./data/payments.csv');

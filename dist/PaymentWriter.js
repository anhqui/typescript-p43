"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['from', 'to', 'amount', 'notes']);
paymentWriter.addRows([
    { from: 'john', to: 'mary', amount: 500, notes: 'web dev fee' },
    { from: 'alex', to: 'peter', amount: 250, notes: 'logo design' },
    { from: 'andrew', to: 'david', amount: 150, notes: 'web maintenance' }
]);
paymentWriter.save('./data/payments.csv');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'john', salary: 70000, role: 'frontend developer' },
    { id: 2, name: 'alex', salary: 90000, role: 'backend developer' },
    { id: 3, name: 'mary', salary: 120000, role: 'full stack developer' },
]);
employeeWriter.save('./data/employees.csv');

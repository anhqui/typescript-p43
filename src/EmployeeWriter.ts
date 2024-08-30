import { CSVWriter } from "./index";

interface Employee{
    id: number
    name: string
    role: string
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
    {id: 1, name: 'john', salary: 70000, role: 'frontend developer'},
    {id: 2, name: 'alex', salary: 90000, role: 'backend developer'},
    {id: 3, name: 'mary', salary: 120000, role: 'full stack developer'},
])

employeeWriter.save('./data/employees.csv')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

let employee = new Employee('Random Dude', 1, 'example@gmail.com');
let manager = new Manager('Jan Carlos', 999, 'boss@example.com', '555-5555');

console.log(employee)
console.log(manager)



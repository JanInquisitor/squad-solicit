const Employee = require('../lib/Employee');

describe('Employee', () => {

})


describe('Employee', () => {
    describe('init', () => {
        it('The employee object must have a name, id, email and role', () => {
            const employee = new Employee('JB', 4214, 'JB@example.com');
            expect('name' in employee).toBe(true)
            expect('id' in employee).toBe(true)
            expect('email' in employee).toBe(true)
            expect('role' in employee).toBe(true)
        })
    });
    describe('getName', () => {
        it('The method must return the employee object name property', () => {
            const employee = new Employee('Vincent', 3, 'vincent@example.com')

            expect(employee.getName()).toBe('Vincent')
        })
    })
    describe('getId', () => {
        it('The method must return the employee object id property', () => {
            const employee = new Employee('Milo', 4214, 'milo@gmail.com')

            expect(employee.getId()).toBe(4214)
        })
    })
    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const employee = new Employee('Kelly', 3, 'kelly@hotmail.org')

            expect(employee.getEmail()).toBe('kelly@hotmail.org')
        })
    })
})
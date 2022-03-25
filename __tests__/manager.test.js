const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('init', () => {
        it('The Manager object must have a office number property.', () => {
            const manager = new Manager('Milo', 6352, 'milo@gmail.com', '555-7777');
            expect('officeNumber' in manager).toBe(true)
        })
    });


    describe('getOfficeNumber', () => {
        it('The method must return the engineer object github property', () => {
            const manager = new Manager('Milo', 6352, 'milo@gmail.com', '555-7777');

            expect(manager.getOfficeNumber()).toBe('555-7777')
        })
    })
})
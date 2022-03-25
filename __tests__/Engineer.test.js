const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('init', () => {
        it('The engineer object must have a github property.', () => {
            const engineer = new Engineer('Milo', 6352, 'milo@gmail.com', 'milo@Github');
            expect('github' in engineer).toBe(true)
        })
    });


    describe('getGithub', () => {
        it('The method must return the engineer object github property', () => {
            const engineer = new Engineer('Milo', 6352, 'milo@gmail.com', 'milo@Github');

            expect(engineer.getGithub()).toBe('milo@Github')
        })
    })
})
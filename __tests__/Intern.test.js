const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('init', () => {
        it('The Intern object must have a school propert.', () => {
            const intern = new Intern('Milo', 6352, 'milo@gmail.com', 'IT-School');
            expect('school' in intern).toBe(true)
        })
    });


    describe('getGithub', () => {
        it('The method must return the intern object school property', () => {
            const intern = new Intern('Milo', 6352, 'milo@gmail.com', 'IT-School');

            expect(intern.getSchool()).toBe('IT-School')
        })
    })
})
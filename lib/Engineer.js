const Employee = require('./Employee')

class Engineer extends Employee {

    constructor(name, id, email, role = 'Engineer') {
        super(name, id, email, role);

    }

}

module.exports = Engineer;
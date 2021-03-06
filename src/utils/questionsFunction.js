const questions = {}

questions.menuActions = function () {
    return {
        type: 'list',
        name: 'action',
        message: 'What would you wanna do?.',
        choices: ['Create employee', 'Create Manager', 'Generate page', 'Exit']
    }
}

questions.employeeOptions = function () {
    return [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: ['Engineer', 'Intern', 'Employee']
        },
    ]
};

questions.engineerOptions = function () {
    return [{
        type: 'input',
        name: 'github',
        message: 'Please provide github username.'
    }]
}

questions.managerOptions = function () {
    return [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is his office number?'
        },
    ]
}

questions.internOptions = function () {
    return {
        type:'input',
        name:'school',
        message: 'At what school does the intern attend to?'
    }
}


module.exports = questions;
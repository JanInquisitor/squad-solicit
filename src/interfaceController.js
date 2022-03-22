const inquirer = require('inquirer')

const fileControllers = require('./fileControllers')
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const questions = require("./utils/questionsFunction");

let team = [];

// @TODO: Place all the functions that create objects using class in their own file.
//  (I'm not sure if should have to do this)

let createManager = function (managerInfo) {

}

let createEngineer = function (engineerInfo) {
    inquirer
        .prompt(questions.engineerOptions())
        .then((data) => {

            let newEngineer = new Engineer(
                engineerInfo.name,
                engineerInfo.id,
                engineerInfo.email,
                data.github
            )

            console.log(newEngineer)
            startPrompt()
        }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError)
        } else {
            // Something else went wrong
        }
    });


}

function createIntern(internInfo) {

}

let createEmployee = function () {
    inquirer
        .prompt(questions.employeeOptions())
        .then((response) => {
            if (response.role === 'Engineer') {
                createEngineer(response)
            }
            if (response.role === 'Intern') {
                createIntern(response)
            }

            if (response.role === 'Employee') {
                let newEmployee = new Employee(response.name, response.id, response.email)
                console.log('Employee created!')
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error.isTtyError)
            } else {
                // Something else went wrong
            }
        });
};

let startPrompt = function () {
    inquirer
        .prompt(questions.menuActions())
        .then((answer) => {
            if (answer.action === 'Create employee') {
                createEmployee()
            }

            if (answer.action === 'Create Manager') {
                createManager()
            }

            if (answer.action === 'Generate page') {

            }

            if (answer.action === 'Exit') {
                console.log('Goodbye.');
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error.isTtyError)
            } else {
                // Something else went wrong
            }
        });

}

let interfaceController = function () {
    startPrompt();

}


module.exports = interfaceController;
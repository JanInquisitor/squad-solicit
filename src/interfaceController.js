const inquirer = require('inquirer')

const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern')
const markupFunction = require('./markupFuntions')
const fileControllers = require('./fileControllers')

const questions = require("./utils/questionsFunction");

// This array holds the members in memory.
let teamArray = [];

function addMember(member) {

    teamArray.push(member);
}

// @TODO: Place all the functions that create objects using class in their own file.
//  (I'm not sure if should have to do this)

let createManager = function (managerInfo) {
    inquirer
        .prompt(questions.managerOptions())
        .then((data) => {
            let newManager = new Manager(data.name, data.id, data.email, data.officeNumber)
            console.log('Manager created!')
            addMember(newManager);
            startPrompt();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error.isTtyError)
            } else {
                // Something else went wrong
            }

        })
}

let createEngineer = function (engineerInfo) {
    inquirer
        .prompt(questions.engineerOptions())
        .then((data) => {

            let newEngineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, data.github)
            console.log('Engineer created!')
            addMember(newEngineer)
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
    inquirer
        .prompt(questions.internOptions(questions.internOptions()))
        .then((data) => {
            let intern = new Intern(
                internInfo.name,
                internInfo.id,
                internInfo.email,
                data.school,
                internInfo.role,
            )
            addMember(intern);
            startPrompt();
        }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError)
        } else {
            // Something else went wrong
        }
    });
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
                addMember(newEmployee);
                startPrompt();
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

function generatePage(team) {
    let markup = markupFunction(team)
    fileControllers.writeToFile('dist', 'index.html', markup)
}

let startPrompt = function () {
    console.log(`Team members created: ${teamArray.length}`)
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
                generatePage(teamArray);
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
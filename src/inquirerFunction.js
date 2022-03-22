const inquirer = require('inquirer')

const fileControllers = require('./fileControllers')
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

let inquirerFunction = function (questions) {
    try {
        inquirer
            .prompt(questions)
            .then((answers) => {
                console.log(answers)
                // fileControllers.writeToFile('dist', 'index.html', htmlMarkUp)
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                    console.log(error.isTtyError)
                } else {
                    // Something else went wrong
                }
            });
    } catch (error) {
        throw error;
    }

}

module.exports = inquirerFunction;
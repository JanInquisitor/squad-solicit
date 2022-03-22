const inquirerFunction = require('./src/inquirerFunction')
const questions = require('./src/utils/questionsFunction')


function main() {
    const questionsArray = questions();
    inquirerFunction(questionsArray);

}

// This starts the program.
main()





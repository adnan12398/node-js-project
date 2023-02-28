const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },

    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    },

    {
        type: "input",
        name: "title",
        message: "what is your project name?"
    },

    {
        type: "input",
        name: "description",
        message: "give us a short description?"
    },
   
    {
        type: "list",
        name: "license",
        message: "what type of license?",
        choices:["MIT","APACHE 2.0","GPL","None"]
    },

    {
        type: "input",
        name: "installation",
        message: "what is command do want to use to install dependencies?",
        default: 'npm i '
    },

    {
        type: "input",
        name: "test",
        message: "what is command do want to use to run tests?",
        default: 'npm test'
    },

    {
        type: "input",
        name: "usage",
        message: "what does user need to know about using the repo?"
    },

    {
        type: "input",
        name: "contributing",
        message: "what does user wnat to noe about contributing to the repo?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('GENERATING README...... ');
        writeToFile('README.md',generateMarkdown({...response}))
    })

}

// function call to initialize program
init();

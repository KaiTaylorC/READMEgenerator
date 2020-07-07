const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer'); 
const generateMarkdown = require('generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username that will be used on the project?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'URL',
        message: 'What is your project URL?'
    },
    {
        type: 'input',
        name: 'bio',
        message: "Add a short bio/description of the project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which license you would like to have:'
        choices: ['None', 'MIT', 'BSD 3', 'APACHE 2.0', 'GPL 3.0']
    }

];

function writeToFile(fileName, data) {
    return fs.writeFileSync
    (path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
        writeToFile('README.md', generateMarkdown({ ... inquirerResponse}));
    })
}

init();

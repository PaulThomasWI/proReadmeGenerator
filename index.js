const inquirer         = require('inquirer');
const fs               = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (*)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('provide a title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (*)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('provide a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (*)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('proovide installation info to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (*)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('provide information on how to use project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (*)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('provide information on how to contribute to the project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (*)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('describe how to test this project.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (*)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('license the project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (*)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'email:',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Readme created.')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();
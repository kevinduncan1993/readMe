import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'Choose a license for your project:',
    //     choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    // },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?'
    },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'What are the test instructions?'
    // },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log('Successfully created README.md');
    } catch (err) {
        console.error(err);
    }
}

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        await writeToFile('README.md', markdown);
    } catch (err) {
        console.error(err);
    }
}

init();

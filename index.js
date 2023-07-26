// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [ // All the questions that will be asked to the user
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Decsribe your project here.',
    },
    // { //Dont need this since Table of Content is default
    //     type: 'input',
    //     name: 'Table of Context',
    //     message: 'What are the context of your project.',
    // },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the usage instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [ // Took this list from github
            'Academic Free License v3.0',
            'Apache License 2.0',
            'Artistic License 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'BSD 4-clause "Original" or "Old" license',
            'BSD Zero-Clause license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License',
          
        ],
      },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are the contributors of your project?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What are the tests of your project?',
    },
    {
        type: 'input',
        name: 'GitHub Username',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
    console.log('README.md has been generated successfully!');
    })
}
module.exports = generateMarkdown;

// Function call to initialize app
init();

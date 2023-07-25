// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
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
    {
        type: 'input',
        name: 'Table of Context',
        message: 'What are the context of your project.',
    },
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
        type: 'input',
        name: 'License',
        message: 'What is the license of your project?',
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
        name: 'Questions',
        message: 'What is the questions of your project?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = 
        
`# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers['Installation']}

## Usage
${answers['Usage']}

## License
${answers['License']}

## Contributing
${answers['Contributing']}

## Tests
${answers['Tests']}

## Questions
For additional questions, feel free to reach out via GitHub or email:
- GitHub: [${answers['GitHub Username']}](https://github.com/${answers['GitHub Username']})
- Email: ${answers['Email']}
`;

    writeToFile('README.md', readmeContent);
    console.log('README.md has been generated successfully!');
    })
}

// Function call to initialize app
init();

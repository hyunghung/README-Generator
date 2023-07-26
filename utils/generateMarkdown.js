// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[${license}](https://opensource.org/licenses/${license})`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);
  return `# ${answers.title}

  ${licenseBadge}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink ? `- [License](#license)` : ''}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.Installation} 
  
  ## Usage
  ${answers.Usage} 
  
  ${licenseSection}
  
  ## Contributing
  ${answers.Contributing} 
  
  ## Tests
  ${answers.Tests} 
  
  ## Questions
  For additional questions, feel free to reach out via GitHub or email:
  - GitHub: [${answers['GitHub Username']}](https://github.com/${answers['GitHub Username']})
  - Email: ${answers.Email} 
  `;
}

module.exports = generateMarkdown;

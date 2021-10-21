
const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project, including motivation and reason(s)."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions?"
    },
    {
      type: "input",
      name: "githubLink",
      message: "What is the project's GitHub link?"
  },
    {
      type: "input",
      name: "deployedLink",
      message: "What is the deployed site link?"
  },
    {
      type: "input",
      name: "userStory",
      message: "What is the user story?"
  },
    {
      type: "input",
      name: "acceptanceCriteria",
      message: "What is the acceptance criteria?"
  },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution instructions:"
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
  },
    {
        type: "input",
        name: "email",
        message: "Please enter collaborator's email address:"
    },
    {
        type: "input",
        name: "tests",
        message: "Any tests?"
    },
    {
        type: "list",
        name: "license", 
        choices: ["MIT License", "IBM Public License Version 1.0", "The Apache License", "Creative Commons - CC0", "Eclipse Public License (EPL)"]
    },
  ]);
};

const licenseBadge = (badge) => {
  if (badge === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (badge === "IBM Public License Version 1.0"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if (badge === "The Apache License"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (badge === "Creative Commons - CC0"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  if (badge === "Eclipse Public License (EPL)"){
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
}

const generateHTML = ({ title, description, installation, githubLink, deployedLink, userStory, acceptanceCriteria, contributing, email, github, tests, license  }) =>
  `# ${title}
## Description
${description}  

# Links
  
Github: ${githubLink}
  
Deployed Site: ${deployedLink}

# Table of Contents
  
## User Story
  
  \`\`\`
${userStory}
  \`\`\`
  
  ## Acceptance Criteria
  
  \`\`\`
${acceptanceCriteria}
  \`\`\`
  
  # Website Video
  
  ![INSERT IMG SHORT DESCRIPTION]( gif link here (convert mov4/webm to gif: https://cloudconvert.com/webm-to-gif) )
  
  # Website Screenshots
  
  # Contributing
  
  * ${contributing}

  # Questions?
  Want to see more of my work? [Click here!](https://github.com/${github})

  Questions/comments/concerns? Please send an email to ${email}
  
  # Resources/Credit
  
  * LINK HERE
  
  # License
  ${licenseBadge(license)}`; 

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();


// // TODO: Include packages needed for this application
// const inquirer = require('inquirer'); //require is part of node, requiring inquirer as seen in package.json, stored it in variable

// // TODO: Create an array of questions for user input
// const questions = [
    
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//     inquirer
//     .prompt([
//       {
//           type: "input",
//           name: "Title",
//           message: "What is the title of your project?"
//       },
//       {
//           type: "input",
//           name: "Description",
//           message: "What is the description of your project?"
//       },
//       {
//           type: "input",
//           name: "Installation",
//           message: "What are the installation instructions?"
//       },
//       {
//           type: "input",
//           name: "Usage",
//           message: "What are the usage instructions?"
//       },
//       {
//           type: "input",
//           name: "Contributing",
//           message: "Any Contributions?"
//       },
//       {
//           type: "input",
//           name: "Tests",
//           message: "Any tests?"
//       },
//       {
//           type: "input",
//           name: "License", // i need to be a list of options
//           choices: ["test1", "test2", "test3"]
//       },
//       {
//           type: "input",
//           name: "Username", //i turn into a link to the github account
//           message: "What is your github username?"
//       },
//       {
//           type: "input",
//           name: "Email",
//           message: "What is your email address?"
//       }

//     ])
//     .then((answers) => {
//       // Use user feedback for... whatever!!
//       console.log(answers)
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//     });}

// // Function call to initialize app
// init();
// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //require is part of node, requiring inquirer as seen in package.json, stored it in variable

// TODO: Create an array of questions for user input
const questions = [
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
          type: "input",
          name: "Title",
          message: "What is the title of your project?"
      },
      {
          type: "input",
          name: "Description",
          message: "What is the description of your project?"
      },
      {
          type: "input",
          name: "Installation",
          message: "What are the installation instructions?"
      },
      {
          type: "input",
          name: "Usage",
          message: "What are the usage instructions?"
      },
      {
          type: "input",
          name: "Contributing",
          message: "Any Contributions?"
      },
      {
          type: "input",
          name: "Tests",
          message: "Any tests?"
      },
      {
          type: "input",
          name: "License",
          message: "Any license?"
      },
      {
          type: "input",
          name: "Github Username",
          message: "What is your github username?"
      },
      {
          type: "input",
          name: "Email",
          message: "What is your email address?"
      }

    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });}

// Function call to initialize app
init();

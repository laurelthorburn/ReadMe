
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
        message: "Please describe your project, including motivation."
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
      name: "github",
      message: "What is your github username?"
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
        message: "Please enter collaborator's name:"
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
        type: "input",
        name: "license", // i need to be a list of options
        choices: ["test1", "test2", "test3"]
    },
  ]);
};

const generateHTML = ({ title, description, installation, github, deployedLink, userStory, acceptanceCriteria, contributing, email, tests, license  }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${title}</h1>
    <p class="lead">I am from ${description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
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
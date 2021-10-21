
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
  `# ${title}
  ## Description
${description}  

  # Links
  
  Github: ${github}
  
  Deployed Site: ${deployedLink}
  
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
  
  # Collaborators
  
  * ${contributing}: ${email}
  
  # Resources/Credit
  
  * LINK HERE
  
  # License
  ${license}`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('readme.md', generateHTML(answers)))
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

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

const licenseBadge = (badge, userName) => {
  if (badge === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    Copyright <2021> <${userName}>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  if (badge === "IBM Public License Version 1.0"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

    For more information, visit: https://opensource.org/licenses/IPL-1.0`
  }
  if (badge === "The Apache License"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Copyright 2020 The Apache Software Foundation

This product includes software developed at
The Apache Software Foundation (http://www.apache.org/).

The Initial Developer of some parts of the framework, which are copied from, derived from, or
inspired by Adobe Flex (via Apache Flex), is Adobe Systems Incorporated (http://www.adobe.com/).
Copyright 2003 - 2012 Adobe Systems Incorporated. All Rights Reserved.

The Initial Developer of the examples/mxroyale/tourdeflexmodules, 
is Adobe Systems Incorporated (http://www.adobe.com/).
Copyright 2009 - 2013 Adobe Systems Incorporated. All Rights Reserved.
`
  }
  if (badge === "Creative Commons - CC0"){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

    CC0 (aka CC Zero) is a public dedication tool, which allows creators to give up their copyright and put their works into the worldwide public domain. CC0 allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, with no conditions.`
  }
  if (badge === "Eclipse Public License (EPL)"){
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

    For more information visit: https://www.eclipse.org/legal/epl-v10.html`

  }
}

const generateHTML = ({ title, description, installation, githubLink, deployedLink, userStory, acceptanceCriteria, contributing, email, github, tests, license, name }) =>
  `# ${title}
  <a name="desc"></a>
## Description
${description}  

# Table of Contents
1. [ Description. ](#desc)
2. [ License. ](#license)
3. [ Links. ](#links)
4. [ User Story. ](#userStory)
5. [ Acceptance Criteria. ](#acceptance)
6. [ Website Video. ](#video)
7. [ Website Screenshots. ](#screenshots)
8. [ Contributing. ](#contrib)
9. [ Questions. ](#questions)
10. [ Resources/Credit. ](#credit)

<a name="license"></a>
# License
  ${licenseBadge(license, name)}

<a name="links"></a>
# Links
  
Github: ${githubLink}
  
Deployed Site: ${deployedLink}

<a name="userStory"></a>
## User Story
  
  \`\`\`
${userStory}
  \`\`\`

  <a name="acceptance"></a>
  ## Acceptance Criteria
  
  \`\`\`
${acceptanceCriteria}
  \`\`\`
  
  <a name="video"></a>
  # Website Video
  
  ![INSERT IMG SHORT DESCRIPTION]( gif link here (convert mov4/webm to gif: https://cloudconvert.com/webm-to-gif) )
  
  <a name="screenshots"></a>
  # Website Screenshots
  
  <a name="contrib"></a>
  # Contributing
  
  * ${contributing}

  <a name="questions"></a>
  # Questions?
  Want to see more of my work? [Click here!](https://github.com/${github})

  Questions/comments/concerns? Please send an email to ${email}
  
  <a name="credit"></a>
  # Resources/Credit
  
  * LINK HERE
  `; 

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
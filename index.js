
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
      type: "list",
      name: "license", 
      choices: ["MIT License", "IBM Public License Version 1.0", "The Apache License", "Creative Commons - CC0", "Eclipse Public License (EPL)"]
  },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
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
  ]);
};

const copyrightText = (copyright) => {
  if (copyright === "MIT License") {
    return `Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  if (copyright === "IBM Public License Version 1.0"){
    return `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

    For more information, visit: https://opensource.org/licenses/IPL-1.0`
  }
  if (copyright === "The Apache License"){
    return `Copyright 2020 The Apache Software Foundation

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
  if (copyright === "Creative Commons - CC0"){
    return `CC0 (aka CC Zero) is a public dedication tool, which allows creators to give up their copyright and put their works into the worldwide public domain. CC0 allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, with no conditions.`
  }
  if (copyright === "Eclipse Public License (EPL)"){
    return `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

    For more information visit: https://www.eclipse.org/legal/epl-v10.html`

  }
}

const licenseBadge = (copyright) => {
    if (copyright === "MIT License") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (copyright === "IBM Public License Version 1.0"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if (copyright === "The Apache License"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (copyright === "Creative Commons - CC0"){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  if (copyright === "Eclipse Public License (EPL)"){
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }

}


const generateHTML = ({ title, description, installation, contributing, email, github, tests, license, usage }) =>
  `# ${title}

<a name="descsection"></a>
## Description
${description}  

${licenseBadge(license)}


## Table of Contents
1. [ Description. ](#descsection)
2. [ Installation. ](#installsection)
3. [ Usage. ](#usagesection)
4. [ License. ](#licensesection)
5. [ Contributing. ](#contribsection)
6. [ Tests. ](#testsection)
7. [ Questions. ](#questionssection)

<a name="installsection"></a>
## Installation
${installation}

<a name="usagesection"></a>
## Usage
${usage}

<a name="licensesection"></a>
## License
${copyrightText(license)}

  <a name="contribsection"></a>
## Contributing
  
  * ${contributing}

  <a name="testsection"></a>
## Tests
  ${tests}

  <a name="questionssection"></a>
## Questions?
  Want to see more of my work? [Click here!](https://github.com/${github})

  Questions/comments/concerns? Please send an email to ${email}
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

const fs = require("fs");
const inquirer = require("inquirer");


inquirer
  .prompt([
         {
        type: "input",
        name: "github",
        message: "What is your Project title?"
      },
    {
      type: "input",
      name: "Description",
      message: "Description of the Application?"
    },
    {
      type: "input",
      name: "Contents",
      message: "What is the Table of Contents?"
    },
    {
      type: "input",
      name: "Installation",
      message: "What type of Installation?"
    }
    ,
    {
      type: "input",
      name: "Usage",
      message: "What Usage?"
    },
    {
      type: "input",
      name: "License",
      message: "Which License would you need?"
    } , 
    {
      type: "input",
      name: "Usage",
      message: "What would it Contributing?"
    }
  ])





  .then(data => {
    const userName = data.github;
    const Description = data.Description;
    const Contents = data.Contents;
    const Installation= data.Installation;
    const Usage = data.Usage;
    const License = data.License;
    const Contributing= data.Contributing;

    let pageContent = ` 
    Project title:
    ${userName}
    Description:
    ${Description}
    Table of Contents
    ${Contents}
    Installation
    ${Installation}
    Usage
    ${Usage}
    License
    ${License}
    Contributing
    ${Contributing}
    `;

fs.writeFile('readme.md',pageContent, (err) => {
 
  if (err) {
    throw err;
  }
  console.log("success!");
});
});

  

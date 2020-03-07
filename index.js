const fs = require("fs");
const inquirer = require("inquirer");


inquirer
  .prompt([
         {
        type: "input",
        name: "github",
        message: "What is your github username?"
      },
    {
      type: "input",
      name: "ReadMe",
      message: "Lets create a Read Me file for your applicatipn,Purpose of the Application?"
    },
    {
      type: "input",
      name: "Concept",
      message: "What is the Concept?"
    },
    {
      type: "input",
      name: "Techologies",
      message: "What type of Technologies used?"
    }
    ,
    {
      type: "input",
      name: "User",
      message: "What type of User would us this App?"
    }
  ])

  .then(data => {
    const userName = data.github;
    const readME = data.ReadMe;
    const concept = data.Concept;
    const techologies = data.Techologies;
    const appUser = data.User;

    let pageContent = ` 
    username: ${userName}
    Read Me file${readME}
    Concept${concept}
    Technologies${techologies}
    App${appUser}`;

fs.writeFile('readme.md',pageContent, (err) => {
 
  if (err) {
    throw err;
  }
  console.log("success!");
});
});

  

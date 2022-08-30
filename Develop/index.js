// TODO: Include packages needed for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown`)
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of this application?',
        name: 'application'
    },
    {
        type: 'input',
        message: 'Please enter a detailed description of the application:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What steps required to install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for how to use your application:',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'Would you like to credit any collaborators(with GitHub profiles), third-party assets and/or tutorials:',
        name: 'credits'
    },
    {
        type: 'checkbox',
        message: 'If a license was used please select it from the following:',
        choices: ["Apache", "MIT", "Mozilla"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username:',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email'
    },
])
    .then((response) => {
        console.log(response)
        const readDocument = generateMarkdown(response)
        if (!response.application || !response.description || !response.install || !response.instructions || !response.credits || !response.license || !response.gitHub || !response.email) {
            console.log("You missed some fields, please start over")
            return;
    }
    fs.appendFile("readme.md", readDocument, (err) => err ? console.log("You did not complete all steps, please try again.") : console.log("README.md generated!"))
})
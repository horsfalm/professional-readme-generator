const inquirer = require('inquirer');

// const fs = require('fs');

// const generateReadme = require('./src/readme-template.js');

// const readmeMD = generateReadme(projTitle, projDesc, projInstall, projUsage, projCont, projTests);

// const [projTitle, projDesc, projInstall, projUsage, projCont, projTests] = readmeDataArgs;

// fs.writeFile('./README.md', generateReadme(readmeMD), err => {
//     if (err) throw err;

//     console.log('Submission complete! Check out README.md to see the output!');
// });

const promptUser = () => {
    console.log(`
    ====================
    PLACEHOLDER
    ====================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain the installation instructions for your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your project to be used for?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who are the contributors to your project?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How is your project tested?',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

promptUser().then(answers => console.log(answers));
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');

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
                    console.log('Please enter your project title.');
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
                    console.log('Please enter your project description.');
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
                    console.log('Please enter your project installation instructions.');
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
                    console.log('Please enter what your project is used for.');
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
                    console.log('Please your project contributors.');
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
                    console.log('Please enter how your project is tested.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ]);
};

promptUser().then(answers => {
    const readmeMD = generateReadme(answers);
    
    fs.writeFile('./README.md', readmeMD, err => {
     if (err) throw err;

     console.log('Submission complete! Check out README.md to see the output!');
    });
});

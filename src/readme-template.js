// //module.exports = (projTitle, projDesc, projInstall, projUsage, projCont, projTests) => {

module.exports = templateData => {
    console.log(templateData);
     return `
# **${templateData.title}**

## Table of Contents

### Project Description
${templateData.description}

### Installation
${templateData.installation}

### Usage
${templateData.usage}

### Contribution
${templateData.contribution}

### Tests
${templateData.tests}

### License

### Questions
For questions, please visit the project [repository](https://github.com/${templateData.github}/${templateData.repository}) and / or email the project author[here](mailto:${templateData.email}).
     `;
 };
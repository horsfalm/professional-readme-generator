// //module.exports = (projTitle, projDesc, projInstall, projUsage, projCont, projTests) => {

module.exports = templateData => {
    console.log(templateData);
     return `
# **Project Title** 
${templateData.title}

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
For questions, please visit [${templateData.github}] and / or [email the project author](mailto:${templateData.email}).
     `;
 };
module.exports = templateData => {
    return `
# **${templateData.title}**

![${templateData.repository}](https://img.shields.io/github/languages/top/${templateData.github}/${templateData.repository})

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [License](#license) 
7. [Questions](#questions)

### Project Description
${templateData.description}<a name="description"><a>

### Installation
${templateData.installation}<a name="installation"><a>

### Usage
${templateData.usage}<a name="usage"><a>

### Contribution
${templateData.contribution}<a name="contribution"><a>

### Tests
${templateData.tests}<a name="tests"><a>

### License
${templateData.license}<a name="license"><a> is the license covering this project. For information, please refer to the [documentation](https://opensource.org/licenses).

### Questions<a name="questions"><a>
For questions, please visit the project [repository](https://github.com/${templateData.github}/${templateData.repository}) and / or email the project author [here](mailto:${templateData.email}).
     `;
 };
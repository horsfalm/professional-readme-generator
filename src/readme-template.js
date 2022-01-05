const generateReadme = (projTitle, projDesc, projInstall, projUsage, projCont, projTests) => {
    return `
    Title: ${projTitle}
    Description: ${projDesc}
    Installation: ${projInstall}
    Usage: ${projUsage}
    Contribution: ${projCont}
    Tests: ${projTests}
    `;
};

module.exports = generateReadme;
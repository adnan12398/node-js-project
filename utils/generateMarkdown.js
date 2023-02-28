//function to genertae license badges
function generateLicenseBadge(license){
  if(license !== 'None'){
    return `![Github License](https://img.shields.io/badges/license-${license}-blue.svg) `
  } else{
    return ""
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${generateLicenseBadge(data.license)}

    
`;
}

module.exports = generateMarkdown;

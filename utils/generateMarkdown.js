//function to genertae license badges
function generateLicenseBadge(license){
  if(license !== 'None'){
    return `![Github License](https://img.shields.io/badges/license-${license}-blue.svg) `
  } return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${generateLicenseBadge(data.license)} 

   ### Description

   ${data.description}

   ### Installation

   To install necessary dependencies run this command:

   \`\`\`
   ${data.installation}
   \`\`\`

   ### Contributing

   ${data.contributing}
   
   ### Test

   to run a test use the following command:

   \`\`\`
   ${data.test}
   \`\`\`

   ### Usage
   ${data.usage}

   ### License
   
   This project is licensed by the ${data.license} license. 


   ### Questions
   
    If you have any question please contact me at ${data.email}

    You can find more of my work at [${data.github}](https://github.com/${data.github}).









    
`;
}

module.exports = generateMarkdown;

function generateUrl(github, title) {
  const caseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${caseTitle}`;
}

function renderBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateUrl(github, title)})`
  }
  return ''
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderBadge(data.license, data.github, data.name)}

## Bio/Description

${data.bio}

* [License] (#license)

* [Questions] (#questions)

## Requirements

To install all dependecies please enter "npm i"
`;
}

module.exports = generateMarkdown;

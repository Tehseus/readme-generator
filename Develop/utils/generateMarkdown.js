const generateMarkdown = function({application, description, install, credits, instructions, license, gitHub, email}) {
  let licensePick = `${license}`;
  let licenseLink = '';
  if (licensePick === 'Mozilla') {
    licensePick = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licensePick === 'Apache') {
    licensePick = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licensePick === 'MIT') {
    licensePick = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };

return (`
# ${application}
![badge](https://img.shields.io/badge/license-${license}-brightorange)
## Description
${description}
## Install Instructions
${install}
## Credits
${credits}
## Instructions/How to use
${instructions}
## License:
Permission to use this application is granted under the ${license} license. ${licenseLink}
## Created By:
[GitHub link: ${gitHub}](https://github.com/${gitHub})
### If you have any further questions on this application please feel free to contact me at ${email}
  `)}


module.exports = generateMarkdown;

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      message: 'Brief description of your project.',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Explain what steps are necessary to use the project.',
        name: 'steps',
    },
    {
        type: 'input',
        message: 'List the name of collaborators. If just you, just put your name.',
        name: 'collaborators',
    },
  ])
  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}`;

    fs.writeFile(filename+'.md', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Readme Generated!')
    );
  });

const axios = require('axios')
const { prompt } = require('inquirer')
const { writeFile, appendFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)
writeFileSync('README.md', `
Your ReadMe File

`)
  .then(() => {
    prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your description of the project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is your installation process?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your intended usage?'
      },
      {
        type: 'input',
        name: 'license',
        message: 'Give a lincense'
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Any contributors names'
      },
    ])
      .then(answers => {
        console.log(answers)
        axios.get(`https://api.github.com/users/${answers[0]}`)
          .then(({ data }) => {
            appendFileSync('README.md', `<img src =${data.avatar_url} alt = ${data.login}
    GitHub UserName: ${data.login}`)
          })
          .catch(err => console.log(err))
      })
    for (i = 0, i < 6, i++) {
      appendFileSync('README.md', `
    ${questions.name}:

    ${answers[i]}
    `)
    }
  })
  .catch(err => console.log(err))
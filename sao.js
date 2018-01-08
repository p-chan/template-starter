const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    version: {
      message: 'What is the version?',
      default: '1.0.0'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my ${superb()} project`
    },
    entry: {
      message: 'Where is entry point?',
      default: 'index.js'
    },
    nickname: {
      message: 'What is your nickname?',
      default: ':gitUser:',
      store: true
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    year: {
      message: 'What year is this?',
      default() {
        const year = new Date().getFullYear()
        return year
      },
      store: true
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: true
}

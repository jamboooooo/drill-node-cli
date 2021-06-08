const chalk = require('chalk');
const boxen = require('boxen');

const yargs = require('yargs')


//console.log(boxen(chalk.bold.yellow.bgGrey('Hello, world'), { borderColor: 'green', borderStyle: 'round' }))

yargs.command({
    command: 'login',
    describe: 'Авторизоваться',
    login: {
        type: 'string',
        demandOption: true,
        describe: 'Логин'
    },
    password: {
        type: 'string',
        demandOption: true,
        describe: 'Пароль'
    },
    handler(login) {
        if (login.login === 'admin' && login.password === 'qwer') {
            console.log('вы авторизованы');
        } else {
            console.log('Ошибка авторизации');
        }
    }
})

yargs.parse()
// Using the inquirer npm package to get user input.
import inquirer from 'inquirer'

const question = [
    {
        type: 'input',
        name: 'to-qr',
        message: 'What to generate to QR code?'
    },
]

inquirer.prompt(question).then((answers => {
    console.log(answers);
}))

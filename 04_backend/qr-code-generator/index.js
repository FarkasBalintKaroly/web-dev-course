// Using the inquirer npm package to get user input.
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const question = [
    {
        name: 'URL',
        message: 'Type in your URL: ?'
    },
];

inquirer.prompt(question).then((answers => {
    const url = answers.URL;
    console.log(url);
    var qr_png = qr.image(url, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('url-qr.png'));
}));

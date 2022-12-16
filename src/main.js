
import process, { exit, chdir } from 'process';
import { homedir } from 'os';
import { readline } from './readline/index.js';
import { getUserName, INPUT_ERROR } from './helpers/index.js';

process.on('exit', () => {
    const userName = getUserName();

    if (userName.length) {
        console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    }
});


export const main = () => {
    const userName = getUserName();

    if (userName.length) {
        chdir(homedir());

        console.log(`Welcome to the File Manager, ${userName}!\n`)
        readline('Enter your command.\n');
    } else {
        console.error(INPUT_ERROR);
        exit(0);
    }
};
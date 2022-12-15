
import { readline } from './readline/index.js';
import { getUserName, MAIN_ERROR } from './helpers/index.js';
import process, { exit } from 'process';

process.on('exit', () => {
    if (getUserName().length) {
        console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    }
});


export const main = () => {
    const userName = getUserName();

    if (userName.length) {
        console.log(`Welcome to the File Manager, ${userName}!\n`)
        readline('Enter your command.\n');
    } else {
        console.error(MAIN_ERROR);
        exit(0);
    }
};
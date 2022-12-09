
import { readline } from './readline.js';
import { getUserName } from './helpers/index.js';
import process, { exit } from 'process';

process.on('exit', () => {
    if (getUserName().length) {
        console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    }
});


export const loginUser = () => {
    const userName = getUserName();

    if (userName) {
        console.log(`Welcome to the File Manager, ${userName}!\n`)
        readline('Enter your command.\n');
    } else {
        console.error('Operation failed.');
        exit(0);
    }
};
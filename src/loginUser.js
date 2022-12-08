
import { readline } from './readline.js';
import { getUserName } from './helpers/index.js';

export const loginUser = async () => {
    const userName = getUserName();

    if (!userName) {
        console.error('Operation failed.');
    }

    console.log(`Welcome to the File Manager, ${userName}!\n`)
    readline('Enter your command.\n');
};
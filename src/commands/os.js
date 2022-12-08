import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { OS_COMMANDS } from '../helpers/index.js'

export const os = (command) => {
    switch (command) {
        case OS_COMMANDS.EOL: {
            console.log('EOL', EOL);
            break;
        }
        case OS_COMMANDS.cpus: {
            console.log(cpus());
            break;
        }
        case OS_COMMANDS.homedir: {
            console.log(homedir());
            break;
        }
        case OS_COMMANDS.username: {
            console.log(userInfo().username);
            break;
        }
        case OS_COMMANDS.architecture: {
            console.log(arch());
            break;
        }
        default:
            throw new Error('Operation failed.');
    }
};
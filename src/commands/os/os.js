import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { OS_COMMANDS } from '../../helpers/index.js'

export const os = (command) => {
    if (!command.startsWith('--')) {
        throw new Error('Operation failed.');
    }

    switch (command.replace('--', '')) {
        case OS_COMMANDS.EOL: {
            console.log(JSON.stringify(EOL));
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
import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { OS_COMMANDS } from '../../helpers/index.js';

export const actionsByCommand = {
    [OS_COMMANDS.EOL]: JSON.stringify(EOL),
    [OS_COMMANDS.cpus]: cpus(),
    [OS_COMMANDS.homedir]: homedir(),
    [OS_COMMANDS.username]: userInfo().username,
    [OS_COMMANDS.architecture]: arch(),
};
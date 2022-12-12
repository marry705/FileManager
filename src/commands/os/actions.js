import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { OS_COMMANDS } from '../../helpers/index.js';

const getCpus = () => (
    [
        `Amount is: ${cpus().length}`, 
        cpus().map(({ model, speed }) => ({
            model: model,
            speed: speed/1000
        }))
    ]
);

export const actionsByCommand = {
    [OS_COMMANDS.EOL]: JSON.stringify(EOL),
    [OS_COMMANDS.cpus]: getCpus(),
    [OS_COMMANDS.homedir]: homedir(),
    [OS_COMMANDS.username]: userInfo().username,
    [OS_COMMANDS.architecture]: arch(),
};
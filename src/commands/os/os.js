import { actionsByCommand } from './actions.js';
import { MAIN_ERROR } from '../../helpers/index.js';

export const os = (command) => {
    const isCommandWrong = !command.startsWith('--');
    
    if (isCommandWrong) {
        throw new Error(MAIN_ERROR);
    }

    const osInformation = actionsByCommand[command.replace('--', '')];

    if (!osInformation) {
        throw new Error(MAIN_ERROR);
    }

    console.log(osInformation);
};
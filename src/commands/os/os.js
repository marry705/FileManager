import { actionsByCommand } from './actions.js';

export const os = (command) => {
    const isCommandWrong = !command.startsWith('--');
    
    if (isCommandWrong) {
        throw new Error('Operation failed.');
    }

    const osInformation = actionsByCommand[command.replace('--', '')];

    if (!osInformation) {
        throw new Error('Operation failed.');
    }

    console.log(osInformation);
};
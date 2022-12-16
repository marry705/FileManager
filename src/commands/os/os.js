import { getDateByCommand } from './actions.js';
import { INPUT_ERROR } from '../../helpers/index.js';

export const os = async (command) => {
    try {
        const isCommandWrong = !command.startsWith('--');

        if (isCommandWrong) {
            throw new Error(INPUT_ERROR);
        }

        const osDate = getDateByCommand();
        const osResult = osDate[command.replace('--', '')];

        console.log(osResult);
        if (!osResult) {
            throw new Error(INPUT_ERROR);
        }
    
        console.log(osResult);
    } catch {
        throw new Error(INPUT_ERROR);
    }
};
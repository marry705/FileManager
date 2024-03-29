import { getDataByCommand } from './actions.js';
import { getError, INPUT_ERROR } from '../../helpers/index.js';

export const os = async (command) => {
    try {
        const isCommandWrong = !command.startsWith('--');

        if (isCommandWrong) {
            throw new Error(INPUT_ERROR);
        };

        const osData = getDataByCommand();
        const osResult = osData[command.replace('--', '')];

        if (!osResult) {
            throw new Error(INPUT_ERROR);
        };
    
        console.log(osResult);
    } catch(error) {
        getError(error);;
    }
};
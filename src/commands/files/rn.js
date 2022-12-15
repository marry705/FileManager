import { rename } from 'fs/promises';
import { sep } from 'path';
import { MAIN_ERROR } from '../../helpers/index.js';

export const rn = async (pathToFile, newName) => {
    try {
        const newPathToFile = `${pathToFile.split(sep).slice(0, -1).join(sep)}${sep}${newName}`;

        await rename(pathToFile, newPathToFile);
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
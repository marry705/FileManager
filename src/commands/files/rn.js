import { rename } from 'fs/promises';
import { sep } from 'path';
import { getAbsoluteDir, getError, INPUT_ERROR } from '../../helpers/index.js';

export const rn = async (path, newName) => {
    try {
        const pathToFile = getAbsoluteDir(path);

        if (!pathToFile.length) {
            throw new Error(INPUT_ERROR);
        };

        const newPathToFile = `${pathToFile.split(sep).slice(0, -1).join(sep)}${sep}${newName}`;

        await rename(pathToFile, newPathToFile);
    } catch(error) {
        getError(error);
    }
};
import { rm as prRemove } from 'fs/promises';
import { getAbsoluteDir, getError, INPUT_ERROR } from '../../helpers/index.js';

export const rm = async (path) => {
    try {
        const pathToFile = getAbsoluteDir(path);

        if (!pathToFile.length) {
            throw new Error(INPUT_ERROR);
        };

        await prRemove(pathToFile);
    } catch(error) {
        getError(error);
    }
};
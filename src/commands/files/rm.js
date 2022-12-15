import { rm as prRemove } from 'fs/promises';
import { MAIN_ERROR } from '../../helpers/index.js';

export const rm = async (pathToFile) => {
    try {
        await prRemove(pathToFile);
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
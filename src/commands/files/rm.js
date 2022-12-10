import { rm as prRemove } from 'fs/promises';

export const rm = async (pathToFile) => {
    try {
        await prRemove(pathToFile);
    } catch {
        throw new Error('Operation failed.');
    }
};
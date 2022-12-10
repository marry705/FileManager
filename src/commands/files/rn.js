import { rename } from 'fs/promises';
import { sep } from 'path';

export const rn = async (pathToFile, newName) => {
    try {
        await rename(pathToFile, `${pathToFile.split(sep).slice(0, -1).join(sep) + sep}${sep}${newName}`);
    } catch {
        throw new Error('Operation failed.');
    }
};
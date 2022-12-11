import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { sep } from 'path';

export const cp = async (pathToFile, pathToNewDir) => {
    try {
        const fileCopyPath = `${pathToNewDir}${sep}${pathToFile.split(sep).pop()}`;

        await pipeline(
            createReadStream(pathToFile, { encoding: 'utf8' }),
            createWriteStream(fileCopyPath)
        );
    } catch {
        throw new Error('Operation failed.');
    }
};
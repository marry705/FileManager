import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { sep, basename } from 'path';
import { MAIN_ERROR } from '../../helpers/index.js';

export const cp = async (pathToFile, pathToNewDir) => {
    try {
        const fileCopyPath = `${pathToNewDir}${sep}${basename(pathToFile)}`;

        await pipeline(
            createReadStream(pathToFile, { encoding: 'utf8' }),
            createWriteStream(fileCopyPath)
        );
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { sep, basename } from 'path';

export const mv = async (pathToFile, pathToNewDir) => {
    try {
        const fileCopyPath = `${pathToNewDir}${sep}${basename(pathToFile)}`;

        await pipeline(
            createReadStream(pathToFile, { encoding: 'utf8' }),
            createWriteStream(fileCopyPath)
        );

        await rm(pathToFile);
    } catch(error) {
        console.log(error);
        throw new Error('Operation failed.');
    }
};
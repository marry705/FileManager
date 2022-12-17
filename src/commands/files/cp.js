import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { sep, basename } from 'path';
import { getAbsoluteDir, getError, INPUT_ERROR } from '../../helpers/index.js';

export const cp = async (path, pathToDir) => {
    try {
        const pathToFile = getAbsoluteDir(path);
        const pathToNewDir = getAbsoluteDir(pathToDir);

        if (!pathToFile.length || !pathToNewDir.length) {
            throw new Error(INPUT_ERROR);
        };

        const fileCopyPath = `${pathToNewDir}${sep}${basename(pathToFile)}`;

        await pipeline(
            createReadStream(pathToFile, { encoding: 'utf8' }),
            createWriteStream(fileCopyPath)
        );
    } catch(error) {
        getError(error);
    }
};
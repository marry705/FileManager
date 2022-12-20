import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsoluteDir, getError, INPUT_ERROR } from '../../helpers/index.js';

const { createHash } = await import('crypto');

export const hash = async (path) => {
    try {
        const pathToFile = getAbsoluteDir(path);

        if (!pathToFile.length) {
            throw new Error(INPUT_ERROR);
        };

        const hash = createHash('sha256');
        const readStream = createReadStream(pathToFile);

        await pipeline(readStream, hash);

        console.log(hash.digest('hex'));
    } catch(error) {
        getError(error);
    }
};
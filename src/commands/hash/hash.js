import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { MAIN_ERROR } from '../../helpers/index.js';

const { createHash } = await import('crypto');

export const hash = async (pathToFile) => {
    try {
        const hash = createHash('sha256');
        const readStream = createReadStream(pathToFile);

        await pipeline(readStream, hash);

        console.log(hash.digest('hex'));
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
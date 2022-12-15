import { createReadStream } from 'fs';
import { stdout } from 'process';
import { finished } from 'stream/promises';
import { MAIN_ERROR } from '../../helpers/index.js';

export const cat = async (pathToFile) => {
    try {
        const readStream = createReadStream(pathToFile, { encoding: 'utf8' });

        readStream.pipe(stdout);
        await finished(readStream);
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
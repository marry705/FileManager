import { createReadStream } from 'fs';
import { stdout } from 'process';
import { finished } from 'stream/promises';
import { getAbsoluteDir, getError, INPUT_ERROR } from '../../helpers/index.js';

export const cat = async (path) => {
    try {
        const pathToFile = getAbsoluteDir(path);

        if (!pathToFile) {
            throw new Error(INPUT_ERROR);
        };

        const readStream = createReadStream(pathToFile, { encoding: 'utf8' });

        readStream.pipe(stdout);
        await finished(readStream);
    } catch(error) {
        getError(error);
    }
};
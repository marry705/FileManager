import { createReadStream, createWriteStream } from 'fs';
import { stat } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { sep, basename } from 'path';
import { MAIN_ERROR, ZIP_TYPE } from '../../helpers/index.js';

export const compress = async (pathToFile, pathToDir) => {
    try {
        const stats = await stat(pathToFile);

        if (!stats.isFile()) {
          throw new Error('There is no such file.');
        } 

        const compressedFilePath = `${pathToDir}${sep}${basename(pathToFile)}.${ZIP_TYPE}`;

        await pipeline(
            createReadStream(pathToFile, { encoding: 'utf8' }),
            createBrotliCompress(),
            createWriteStream(compressedFilePath)
        );
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
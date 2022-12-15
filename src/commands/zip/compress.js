import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { sep, basename } from 'path';
import { MAIN_ERROR } from '../../helpers/index.js';

export const compress = async (pathToFile, pathToDir) => {
    try {
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
import { createReadStream, createWriteStream } from 'fs';
import { stat } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { sep, basename } from 'path';
import { getAbsoluteDir, getError, INPUT_ERROR, ZIP_TYPE } from '../../helpers/index.js';

export const compress = async (path, dir) => {
    try {
        const pathToFile = getAbsoluteDir(path);
        const pathToDir = getAbsoluteDir(dir);

        if (!pathToFile.length || !pathToDir.length) {
            throw new Error(INPUT_ERROR);
        };

        const stats = await stat(pathToFile);

        if (!stats.isFile()) {
            throw new Error('There is no such file.');
        };

        const compressedFilePath = `${pathToDir}${sep}${basename(pathToFile)}.${ZIP_TYPE}`;

        await pipeline(
            createReadStream(pathToFile, { encoding: 'utf8' }),
            createBrotliCompress(),
            createWriteStream(compressedFilePath)
        );
    } catch(error) {
        getError(error);
    }
};
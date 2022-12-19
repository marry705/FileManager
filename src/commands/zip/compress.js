import { createReadStream, createWriteStream } from 'fs';
import { constants, access } from 'fs/promises';
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

        await access(pathToFile, constants.F_OK | constants.R_OK);

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
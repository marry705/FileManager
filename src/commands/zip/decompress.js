import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { constants, access } from 'fs/promises';
import { createBrotliDecompress } from 'zlib';
import { basename, sep } from 'path';
import { getAbsoluteDir, getError, INPUT_ERROR, ZIP_TYPE } from '../../helpers/index.js'

export const decompress = async (path, dir) => {
  try {
    const pathToFile = getAbsoluteDir(path);
    const pathToDir = getAbsoluteDir(dir);

    if (!pathToFile.length || !pathToDir.length || !pathToFile.endsWith(`${ZIP_TYPE}`)) {
      throw new Error(INPUT_ERROR);
    };

    await access(pathToFile, constants.F_OK  | constants.R_OK);

    const decompressedFilePath = `${pathToDir}${sep}${basename(pathToFile).replace(`.${ZIP_TYPE}`, '')}`;
    
    await pipeline(
        createReadStream(pathToFile),
        createBrotliDecompress(),
        createWriteStream(decompressedFilePath)
    );
  } catch(error) {
    getError(error);
  }
};
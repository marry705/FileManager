import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stat } from 'fs/promises';
import { createBrotliDecompress } from 'zlib';
import { basename, sep } from 'path';
import { getAbsoluteDir, getError, INPUT_ERROR, ZIP_TYPE } from '../../helpers/index.js'

export const decompress = async (path, dir) => {
  try {
    const pathToFile = getAbsoluteDir(path);
    const pathToDir = getAbsoluteDir(dir);

    if (!pathToFile.length || !pathToDir.length) {
      throw new Error(INPUT_ERROR);
    };

    if (!pathToFile.endsWith(`${ZIP_TYPE}`)) {
      throw new Error('There is no br file.');
    };

    const stats = await stat(pathToFile);

    if (!stats.isFile()) {
      throw new Error('There is no such file.');
    };

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
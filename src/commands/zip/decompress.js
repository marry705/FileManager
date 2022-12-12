import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { basename, sep } from 'path';

export const decompress = async (pathToFile, pathToDir) => {
  try {
    if (!pathToFile.endsWith('.br')) {
        throw new Error('There is no br files.');
    }

    const decompressedFilePath = `${pathToDir}${sep}${basename(pathToFile).replace('.br', '')}`;
    
    await pipeline(
        createReadStream(pathToFile),
        createBrotliDecompress(),
        createWriteStream(decompressedFilePath)
    );
  } catch {
    throw new Error('Operation failed.');
  }
};
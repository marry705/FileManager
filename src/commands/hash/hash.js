import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
const { createHash } = await import('crypto');

export const hash = async (pathToFile) => {
    try {
        const hash = createHash('sha256');
        const readStream = createReadStream(pathToFile);

        await pipeline(readStream, hash);

        console.log(hash.digest('hex'));
    } catch(error) {
        console.log(error);
        throw new Error('Operation failed.');
    }
};
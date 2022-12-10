import { writeFile } from 'fs/promises';
import { sep } from 'path';

export const add = async (fileName, currentPath) => {
  try {
    await writeFile(`${currentPath}${sep}${fileName}`, '');
  } catch {
    throw new Error('Operation failed.');
  }
};
import { writeFile } from 'fs/promises';
import { sep } from 'path';
import { MAIN_ERROR } from '../../helpers/index.js';

export const add = async (fileName, currentPath) => {
  try {
    await writeFile(`${currentPath}${sep}${fileName}`, '');
  } catch {
    throw new Error(MAIN_ERROR);
  }
};
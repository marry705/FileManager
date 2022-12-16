import { writeFile } from 'fs/promises';
import { sep } from 'path';
import { MAIN_ERROR } from '../../helpers/index.js';
import { cwd } from 'process';

export const add = async (fileName) => {
  try {
    await writeFile(`${cwd()}${sep}${fileName}`, '');
  } catch {
    throw new Error(MAIN_ERROR);
  }
};
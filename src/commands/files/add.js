import { writeFile } from 'fs/promises';
import { sep } from 'path';
import { INPUT_ERROR, getError } from '../../helpers/index.js';
import { cwd } from 'process';

export const add = async (fileName) => {
  try {
    if (!fileName.length) {
      throw new Error(INPUT_ERROR);
    };

    const newFileName = fileName.replaceAll(`"`, '');

    await writeFile(`${cwd()}${sep}${newFileName}`, '');
  } catch(error) {
    getError(error);
  }
};
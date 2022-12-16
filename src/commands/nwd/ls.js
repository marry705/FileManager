import { readdir } from 'fs/promises';
import { cwd } from 'process';
import { MAIN_ERROR } from '../../helpers/index.js';
import { getFileType, getFileObj, sortFiles } from './helpers.js';

export const ls = async () => {
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
    const table = files
        .filter(getFileType)
        .map(getFileObj)
        .sort(sortFiles);
    
    console.table(table);
  } catch {
    throw new Error(MAIN_ERROR);
  }
};
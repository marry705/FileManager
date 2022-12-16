import { MAIN_ERROR } from '../../helpers/index.js';
import { chdir } from 'process';

export const cd = async (path) => {
  try {      
    chdir(path);
  } catch {
    throw new Error(MAIN_ERROR);
  }
};
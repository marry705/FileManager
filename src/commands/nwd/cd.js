import { stat } from 'fs/promises';
import { MAIN_ERROR } from '../../helpers/index.js';

export const cd = async (path) => {
  try {
    const stats = await stat(path);

    if (!stats.isDirectory()) {
      throw new Error('Not correct path.');
    } 
        
    return path;
  } catch {
    throw new Error(MAIN_ERROR);
  }
};
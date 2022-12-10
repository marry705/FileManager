import { stat } from 'fs/promises';

export const cd = async (path) => {
  try {
    const stats = await stat(path);

    if (!stats.isDirectory()) {
      throw new Error('Operation failed.');
    } 
        
    return path;
  } catch {
    throw new Error('Operation failed.');
  }
};
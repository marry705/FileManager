import { getAbsoluteDir, getError, INPUT_ERROR } from '../../helpers/index.js';
import { chdir } from 'process';

export const cd = async (path) => {
  try {
    const newPath = getAbsoluteDir(path);

    if (!newPath.length) {
      throw new Error(INPUT_ERROR);
    };

    chdir(newPath);
  } catch(error) {
    getError(error);
  }
};
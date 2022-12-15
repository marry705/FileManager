import { readdir } from 'fs/promises';
import { FILE_TYPES, MAIN_ERROR } from '../../helpers/index.js';

export const ls = async (currentPath) => {
  try {
    const files = await readdir(currentPath, { withFileTypes: true });
    const table = files
        .map((file) => ({
          name: file.name,
          type: file.isDirectory() ? FILE_TYPES.directory : FILE_TYPES.file
        }))
        .sort(({ name1, type1 }, { name2, type2 }) => {
            if (type1 === type2) {
              return name1 < name2 ? -1 : 1;
          } else {
              return type1 < type2 ? -1 : 1;
          }
        });
    
    console.table(table);
  } catch {
    throw new Error(MAIN_ERROR);
  }
};
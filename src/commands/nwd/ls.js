import { readdir } from 'fs/promises';
import { FILE_TYPES, MAIN_ERROR } from '../../helpers/index.js';

const getFileType = (file) => {
  if (file.isDirectory()) {
    return FILE_TYPES.directory;
  }

  if (file.isFile()) {
    return FILE_TYPES.file;
  }

  return '';
}

export const ls = async (currentPath) => {
  try {
    const files = await readdir(currentPath, { withFileTypes: true });
    const table = files
        .filter((file) => getFileType(file))
        .map((file) => ({
            name: file.name,
            type: getFileType(file)
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
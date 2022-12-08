import { readdir } from 'fs/promises';
import { FILE_TYPES } from '../helpers/index.js';

export const ls = async (currentPath) => {
  try {
    const files = await readdir(currentPath, { withFileTypes: true });
    const table = files
        .map((file) => ({ name: file.name, type: file.isDirectory() ? FILE_TYPES.directory : FILE_TYPES.file }))
        .sort((file1, file2) => {
            if (file1.type === file2.type){
            return file1.name < file2.name ? -1 : 1;
          } else {
            return file1.type < file2.type ? -1 : 1;
          }
        });
    
    console.table(table);
  } catch {
    throw new Error('Operation failed.');
  }
};
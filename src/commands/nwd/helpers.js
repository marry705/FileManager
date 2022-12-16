
import { FILE_TYPES } from '../../helpers/index.js';

export const getFileType = (file) => {
    if (file.isDirectory()) {
      return FILE_TYPES.directory;
    }
  
    if (file.isFile()) {
      return FILE_TYPES.file;
    }
  
    return '';
};
  
export const getFileObj = (file) => ({
    name: file.name,
    type: getFileType(file)
});
  
export const sortFiles = (file1, file2) => {
    const sortAtt = (file1.type === file2.type) ? 'name' : 'type';
  
    return file1[sortAtt] < file2[sortAtt] ? -1 : 1;
};
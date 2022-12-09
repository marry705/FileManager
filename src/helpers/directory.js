import { homedir } from 'os';
import { isAbsolute, join } from 'path';

export const getUserHomeDir = () => homedir();

export const getAbsoluteDir = (currentPath, path) => isAbsolute(path) ? path : join(currentPath, path);
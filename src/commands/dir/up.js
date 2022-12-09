import { sep } from 'path';
import { homedir } from 'os';

export const up = (currentPath) => {
    if (currentPath !== homedir().split(sep).slice(0, -1).join(sep)) {
        return currentPath.split(sep).slice(0, -1).join(sep) + sep;
    }
    
    return currentPath;
};
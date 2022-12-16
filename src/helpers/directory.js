import { isAbsolute, join } from 'path';
import { cwd } from 'process';

export const getAbsoluteDir = (path) => {
    if (!path) {
        return '';
    }

    const updatePath = path.replaceAll(`"`, '');

    return isAbsolute(updatePath) ? updatePath : join(cwd(), updatePath);
};
import { chdir } from 'process';

export const up = async () => {
    try {
        chdir('..');
    } catch {
        throw new Error(MAIN_ERROR);
    }
};
import { createInterface } from 'readline/promises';
import { stdin, stdout, exit } from 'process';
import { getUserHomeDir, getAbsoluteDir, COMMANDS } from '../helpers/index.js';
import { cd, ls, up, add, cat, cp, mv, rm, rn, os, hash, compress, decompress } from '../commands/index.js'

let currentPath = getUserHomeDir();

const rl = createInterface({
    input: stdin, 
    output: stdout,
});

rl.on('SIGINT', () => {
    exit(0);
});

export const readline = async (question) => {
    const answer = await rl.question(question);

    const [command, argument, sec_argument] = answer.includes(`"`) 
        ? answer
            .split(`"`)
            .map((item) => item.trim())
            .filter((item) => item.length)
        : answer
            .replace(/\s+/g, ' ')
            .split(' ')
            .map((item) => item.trim());

    try {   
        switch (command) {
            case COMMANDS.exit: {
                exit(0);
            }
            case COMMANDS.cd: {
                const newPath = getAbsoluteDir(currentPath, argument);
                currentPath = await cd(newPath);
                break;
            }
            case COMMANDS.ls: {
                await ls(currentPath);
                break;
            }
            case COMMANDS.up: {
                currentPath = up(currentPath);
                break;
            }
            case COMMANDS.add: {
                await add(argument, currentPath);
                break;
            }
            case COMMANDS.cat: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                await cat(pathToFile);
                break;
            }
            case COMMANDS.cp: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                const pathToNewDir = getAbsoluteDir(currentPath, sec_argument);
                await cp(pathToFile, pathToNewDir);
                break;
            }
            case COMMANDS.mv: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                const pathToNewDir = getAbsoluteDir(currentPath, sec_argument);
                await mv(pathToFile, pathToNewDir);
                break; 
            }
            case COMMANDS.rm: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                await rm(pathToFile);
                break;
            }
            case COMMANDS.rn: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                await rn(pathToFile, sec_argument);
                break;
            }
            case COMMANDS.hash: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                await hash(pathToFile);
                break;
            }
            case COMMANDS.os: {
                os(argument);
                break;
            }
            case COMMANDS.compress: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                const pathToDir = getAbsoluteDir(currentPath, sec_argument);
                await compress(pathToFile, pathToDir);
                break;
            }
            case COMMANDS.decompress: {
                const pathToFile = getAbsoluteDir(currentPath, argument);
                const pathToDir = getAbsoluteDir(currentPath, sec_argument);
                await decompress(pathToFile, pathToDir);
                break;
            }
            default:
                rl.write('Invalid input.\n');
                break;
        }
    } catch(error) {
        rl.write(`${error}\n`);
    }

    rl.write(`You are currently in ${currentPath}\n`);

    readline(question);
};


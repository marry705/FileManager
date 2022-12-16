import { createInterface } from 'readline/promises';
import { stdin, stdout, exit, cwd } from 'process';
import { getAbsoluteDir, COMMANDS, INPUT_ERROR } from '../helpers/index.js';
import { cd, ls, up, add, cat, cp, mv, rm, rn, os, hash, compress, decompress } from '../commands/index.js'

const rl = createInterface({
    input: stdin, 
    output: stdout,
});

rl.on('SIGINT', () => {
    exit(0);
});

export const readline = async (question) => {
    rl.write(`You are currently in ${cwd()}\n`);

    const answer = await rl.question(question);

    const [command, argument, sec_argument] = answer.split(' ').map((item) => item.trim());

    try {   
        switch (command) {
            case COMMANDS.exit: {
                exit(0);
            }
            case COMMANDS.cd: {
                const newPath = getAbsoluteDir(argument);

                if (!newPath.length) {
                    throw new Error(INPUT_ERROR);
                };

                await cd(newPath);
                break;
            }
            case COMMANDS.ls: {
                await ls();
                break;
            }
            case COMMANDS.up: {
                await up();
                break;
            }
            case COMMANDS.add: {
                if (!argument.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await add(argument);
                break;
            }
            case COMMANDS.cat: {
                const pathToFile = getAbsoluteDir(argument);

                if (!pathToFile) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await cat(pathToFile);
                break;
            }
            case COMMANDS.cp: {
                const pathToFile = getAbsoluteDir(argument);
                const pathToNewDir = getAbsoluteDir(sec_argument);

                if (!pathToFile.length || !pathToNewDir.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await cp(pathToFile, pathToNewDir);
                break;
            }
            case COMMANDS.mv: {
                const pathToFile = getAbsoluteDir(argument);
                const pathToNewDir = getAbsoluteDir(sec_argument);

                if (!pathToFile.length || !pathToNewDir.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await mv(pathToFile, pathToNewDir);
                break; 
            }
            case COMMANDS.rm: {
                const pathToFile = getAbsoluteDir(argument);

                if (!pathToFile.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await rm(pathToFile);
                break;
            }
            case COMMANDS.rn: {
                const pathToFile = getAbsoluteDir(argument);

                if (!pathToFile.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await rn(pathToFile, sec_argument);
                break;
            }
            case COMMANDS.hash: {
                const pathToFile = getAbsoluteDir(argument);

                if (!pathToFile.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await hash(pathToFile);
                break;
            }
            case COMMANDS.os: {
                await os(argument);
                break;
            }
            case COMMANDS.compress: {
                const pathToFile = getAbsoluteDir(argument);
                const pathToDir = getAbsoluteDir(sec_argument);

                if (!pathToFile.length || !pathToDir.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await compress(pathToFile, pathToDir);
                break;
            }
            case COMMANDS.decompress: {
                const pathToFile = getAbsoluteDir(argument);
                const pathToDir = getAbsoluteDir(sec_argument);

                if (!pathToFile.length || !pathToDir.length) {
                    throw new Error(`${INPUT_ERROR}`);
                };

                await decompress(pathToFile, pathToDir);
                break;
            }
            default:
                rl.write(`${INPUT_ERROR}\n`);
                break;
        }
    } catch(error) {
        rl.write(`${error}\n`);
    }

    readline(question);
};


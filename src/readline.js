import { createInterface } from 'readline/promises';
import { stdin, stdout, exit } from 'process';
import { getUserHomeDir, getAbsoluteDir, COMMANDS } from './helpers/index.js';
import { ls, up, os, cd } from './commands/index.js'

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
    const [command, argument] = answer.trim().replace(/ {2,}/g, ' ').split(' ');

    try {
        switch (command) {
            case COMMANDS.exit: {
                exit(0);
            }
            case COMMANDS.up: {
                currentPath = up(currentPath);
                break;
            }
            case COMMANDS.cd: {
                const newPath = getAbsoluteDir(currentPath, argument.trim());
                currentPath = await cd(newPath);
                break;
            }
            case COMMANDS.ls: {
                await ls(currentPath);
                break;
            }
            case COMMANDS.os: {
                os(argument.trim());
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


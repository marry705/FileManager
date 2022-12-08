import { createInterface } from 'readline';
import process, { stdin, stdout, exit } from 'process';
import { getUserName, getUserHomeDir, COMMANDS } from './helpers/index.js';

let currentPath = getUserHomeDir();

const rl = createInterface({
    input: stdin, 
    output: stdout,
});

rl.on('SIGINT', () => {
    exit(0);
});

process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
});

export const readline = async(question) =>
    rl.question(question, async (answer) => {
        const command = answer.trim();

        try {
            switch (command) {
                case COMMANDS.exit: {
                    exit(0);
                }
                case COMMANDS.up: {
                    console.log('UP');
                    break;
                }
                case COMMANDS.cd: {
                    console.log('CD');
                    break;
                }
                case COMMANDS.ls: {
                    console.log('LS');
                    throw new Error('No username name');
                    break;
                }
                default:
                    rl.write('Invalid input.\n');
                    break;
            }
        } catch {
            rl.write('Operation failed.\n');
        }

        rl.write(`You are currently in ${currentPath}.\n`);

        readline(question);
    });
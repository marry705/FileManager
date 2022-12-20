import { createInterface } from 'readline/promises';
import { stdin, stdout, exit, cwd } from 'process';
import { EOL } from 'os';
import { actionsCommand } from './actions.js';
import { getCommandsAndArguments, COMMANDS, INPUT_ERROR } from '../helpers/index.js';

const rl = createInterface({
    input: stdin, 
    output: stdout,
});

rl.on('SIGINT', () => {
    exit(0);
});

export const readline = async (question) => {
    rl.write(`You are currently in ${cwd()}${EOL}`);

    const answer = await rl.question(question);

    const [command, argument, sec_argument] = getCommandsAndArguments(answer);

    try {
        if (command === COMMANDS.exit) {
            exit(0);  
        };

        if (typeof actionsCommand[command] !== 'function') {
            throw new Error(INPUT_ERROR);
        };

        await actionsCommand[command](argument, sec_argument);
    } catch(error) {
        rl.write(`${error}${EOL}`);
    }

    readline(question);
};


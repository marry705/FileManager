export const getCommandsAndArguments = (answer) => {
    return answer
            .trim()
            .replace(/ +/g, ' ')
            .split(' ');
};
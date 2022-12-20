export const getCommandsAndArguments = (answer) => {
    const answerString = answer?.trim();

    let command = '';
    let argument = '';
    let sec_argument = '';

    command = answerString.indexOf(' ') !== -1 
        ? answerString.slice(0, answerString.indexOf(' '))
        : answerString 
        || undefined;

    const argumentsString = answerString.replace(command, ' ').trim();

    if (argumentsString.startsWith(`"`)) {
        argument = argumentsString.indexOf(`"`, 1) !== -1 
            ? argumentsString.slice(0, argumentsString.indexOf(`"`, 1) + 1)
            : argumentsString;
    } else {
        argument = argumentsString.indexOf(' ') !== -1 
            ? argumentsString.slice(0, argumentsString.indexOf(' '))
            : argumentsString
            || undefined;
    };

    sec_argument = argumentsString.replace(argument, ' ').trim() || undefined;

    return [ command, argument, sec_argument ];
};
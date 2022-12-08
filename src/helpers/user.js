import{ argv } from 'process';

export const getUserName = () => {
    const userNameArg = argv.find((arg) => arg.startsWith('--username'));

    return userNameArg?.indexOf('=') ? userNameArg.slice(userNameArg.indexOf('=') + 1) : '';
};
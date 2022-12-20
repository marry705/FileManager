import{ argv } from 'process';

export const getUserName = () => {
    const userNameArg = argv.find((arg) => arg.startsWith('--username='));
  
    if (userNameArg) {
        return userNameArg.slice(userNameArg.indexOf('=') + 1);
    }

    return '';
};
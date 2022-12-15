import{ argv } from 'process';

export const getUserName = () => {
    const userNameArg = argv.find((arg) => arg.startsWith('--username'));
    const userNameSymbolPos = userNameArg.indexOf('=');
    
    return userNameSymbolPos !== -1 ? userNameArg.slice(userNameSymbolPos + 1) : '';
};
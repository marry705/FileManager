import { COMMANDS } from '../helpers/index.js';
import { cd, ls, up, add, cat, cp, mv, rm, rn, os, hash, compress, decompress } from '../commands/index.js'

export const actionsCommand = {
    [COMMANDS.cd]: cd,
    [COMMANDS.ls]: ls,
    [COMMANDS.up]: up,
    [COMMANDS.add]: add,
    [COMMANDS.cat]: cat,
    [COMMANDS.cp]: cp,
    [COMMANDS.mv]: mv,
    [COMMANDS.rm]: rm,
    [COMMANDS.rn]: rn,
    [COMMANDS.os]: os,
    [COMMANDS.hash]: hash,
    [COMMANDS.compress]: compress,
    [COMMANDS.decompress]: decompress,
};
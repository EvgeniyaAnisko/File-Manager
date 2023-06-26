import { add } from '../file/add.js';
import { cat } from '../file/cat.js';
import { rm } from '../file/rm.js';
import { cd } from '../navigation/cd.js';
import { list } from '../navigation/ls.js';
import { up } from '../navigation/up.js';
import { os } from '../os/os.js';

export const commandsGuide = {
  'up': async (args) => await up(args),
  'cd': async (args) => await cd(args),
  'ls': async (args) => await list(args.path),
  'cat': async (args) => await cat(args),
  'add': async (args) => await add(args),
  // 'rn',
  // 'cp',
  // 'mv',
  'rm': async (args) => await rm(args),
  'os': async (args) => await os(args.args),
  // 'hash',
  // 'compress',
  // 'decompress'
};

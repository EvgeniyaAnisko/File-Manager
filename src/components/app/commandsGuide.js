import { cd } from '../navigation/cd.js';
import { list } from '../navigation/ls.js';
import { up } from '../navigation/up.js';
import { os } from '../os/os.js';

export const commandsGuide = {
  'up': async (args) => await up(args),
  'cd': async (args) => await cd(args),
  'ls': async (args) => await list(args.path),
  // 'cat',
  // 'add',
  // 'rn',
  // 'cp',
  // 'mv',
  // 'rm',
  'os': async (args) => await os(args.args),
  // 'hash',
  // 'compress',
  // 'decompress'
};
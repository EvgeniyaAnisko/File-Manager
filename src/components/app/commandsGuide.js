import { list } from '../navigation/ls.js';
import { os } from '../os/os.js';

export const commandsGuide = {
  // 'up',
  // 'cd',
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
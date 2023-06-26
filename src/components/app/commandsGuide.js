import { compress } from '../archiving/compress.js';
import { decompress } from '../archiving/decompress.js';
import { add } from '../file/add.js';
import { cat } from '../file/cat.js';
import { cp } from '../file/cp.js';
import { mv } from '../file/mv.js';
import { rm } from '../file/rm.js';
import { rn } from '../file/rn.js';
import { calculateHash } from '../hash/hash.js';
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
  'rn': async (args) => await rn(args),
  'cp': async (args) => await cp(args),
  'mv': async (args) => await mv(args),
  'rm': async (args) => await rm(args),
  'os': async (args) => await os(args.args),
  'hash': async (args) => await calculateHash(args),
  'compress': async (args) => await compress(args),
  'decompress': async (args) => await decompress(args)
};

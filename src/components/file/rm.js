import path from 'node:path';
import { unlink } from 'node:fs/promises';

export const rm = async (args) => {
  const resultPath = path.resolve(args.path, args.args);
  try {
    await unlink(resultPath);
  } catch {
    console.error('Operation failed');
  }
};
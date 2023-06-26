import path from 'node:path';
import { unlink } from 'node:fs/promises';
import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const rm = async (args) => {
  const resultPath = path.resolve(args.path, args.args);
  try {
    await unlink(resultPath);
  } catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};

import path from 'path';
import { readdir } from 'fs/promises';
import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const cd = async (args) => {
  const resultPath = path.resolve(args.path, args.args);
  try {
    await readdir(resultPath);
    args.path = resultPath;
  } catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};

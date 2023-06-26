import path from 'node:path';
import { rename, access } from 'fs/promises';
import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const rn = async (args) => {
  const [pathToFile, newFilename] = args.args.split(' ');

  const fileToRenamePath = path.resolve(args.path, pathToFile);
  const renamedFilePath = path.resolve(path.dirname(fileToRenamePath), newFilename);

  try {
    await access(fileToRenamePath);
    try {
      await access(renamedFilePath);
      console.error(ERROR_MESSAGE_OPERATION);
    } catch {
      await rename(fileToRenamePath, renamedFilePath);
    }
  } catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};

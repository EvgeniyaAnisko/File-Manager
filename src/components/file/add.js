import { writeFile } from 'fs/promises';
import path from 'node:path';
import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const add = async (args) => {
  const pathToFile = path.join(args.path, args.args)
    try {
        await writeFile(pathToFile, '');
    } catch (err) {
        console.error(ERROR_MESSAGE_OPERATION);
    }
};

import { createReadStream, createWriteStream } from 'node:fs';
import { writeFile } from 'fs/promises';
import path from 'node:path';

import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const cp = async (args) => {
  try {
    const [pathToFile, pathToNewDir] = args.args.split(' ');

    const filePath = path.resolve(args.path, pathToFile);
    const newFilePath = path.join(path.resolve(args.path, pathToNewDir), path.basename(filePath));

    await writeFile(newFilePath, '');

    const readableStream = createReadStream(filePath);
    const writeStream = createWriteStream(newFilePath);
    readableStream.on('data', async (chunk) => writeStream.write(chunk));
  } catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};

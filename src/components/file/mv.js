import { createReadStream, createWriteStream } from 'node:fs';
import { writeFile, unlink } from 'fs/promises';
import path from 'node:path';

import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const mv = async (args) => {
  const [pathToFile, pathToNewDir] = args.args.split(' ');

  const filePath = path.resolve(args.path, pathToFile);
  const newFilePath = path.join(
    path.resolve(args.path, pathToNewDir),
    path.basename(filePath)
  );

  try {
    await writeFile(newFilePath, '', { flag: 'wx' });
    try {
      const readableStream = createReadStream(filePath, 'utf8');
      const writeStream = createWriteStream(newFilePath);

      readableStream.on('data', async (chunk) => writeStream.write(chunk));
      readableStream.on('close', async () => await unlink(filePath));
    } catch {
      console.error(ERROR_MESSAGE_OPERATION);
    }
  }
  catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};

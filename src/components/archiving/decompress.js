import zlib from 'zlib';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'stream/promises';

import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const decompress = async (args) => {
  const [pathToFile, pathToDestination] = args.args.split(' ');

  const filePath = path.resolve(args.path, pathToFile);
  const destinationPath = path.resolve(args.path, pathToDestination || path.dirname(filePath));

  try {
    const readableStream = createReadStream(filePath);
    const brotli = zlib.createBrotliDecompress();

    const destinationFileName = path.basename(filePath).replace('.br', '');
    const pathNewFile = path.join(
      destinationPath,
      destinationFileName
    );

    const writeStream = createWriteStream(pathNewFile);
    await pipeline(readableStream, brotli, writeStream);
  } catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};

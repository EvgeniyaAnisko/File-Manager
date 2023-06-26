import { createReadStream } from 'node:fs';
import path from 'node:path';
import { stdout } from 'node:process';
import { ERROR_MESSAGE_OPERATION } from '../utils/constant.js';

export const cat = async (args) => {
  const pathToFile = path.join(args.path, args.args);
  
  const readableStream = createReadStream(pathToFile, 'utf-8');

  readableStream.on('data', async (chunk) => console.log(chunk));
  readableStream.on('error', () => console.error(ERROR_MESSAGE_OPERATION));
  readableStream.on('close', () => stdout.write(`\n${args.path} `));

};

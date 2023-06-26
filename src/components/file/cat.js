import { createReadStream } from 'node:fs';
import path from 'node:path';
import { stdout } from 'node:process';

export const cat = async (args) => {
  const pathToFile = path.join(args.path, args.args)

  const readableStream = createReadStream(pathToFile, 'utf-8');

  readableStream.on('data', async (chunk) => console.log(chunk))
  readableStream.on('error', () => stdout.write('\nInvalid Input'));
  readableStream.on('close', () => stdout.write(`\n${args.path} `));

};

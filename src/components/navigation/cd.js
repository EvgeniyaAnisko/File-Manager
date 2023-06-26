import path from 'path';
import { readdir } from 'fs/promises';

export const cd = async (args) => {
  const resultPath = path.resolve(args.path, args.args);
  try {
    await readdir(resultPath)
    args.path = resultPath;
  } catch {
    console.error('This path incorrect!');
  }
}
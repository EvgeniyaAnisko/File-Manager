import { stdin, stdout } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getUserName } from '../utils/getUserName.js';

const app = async () => {
  const username = getUserName();

  stdout.write(`Welcome to the File Manager, ${username}!\n${dirname(fileURLToPath(import.meta.url))} `);
  stdin.on('data', data => {
    if (data.toString().trim() === '.exit') { process.exit(); }
    stdout.write(`${dirname(fileURLToPath(import.meta.url))} `);
  });

  process.on('SIGINT', () => process.exit());
  process.on('exit', () => stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`));
}

export { app };

import { stdin, stdout } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getUserName } from '../utils/getUserName.js';
import { commandsGuide } from './commandsGuide.js';

const app = async () => {
  const username = getUserName();

  stdout.write(
    `Welcome to the File Manager, ${username}!\n${dirname(
      fileURLToPath(import.meta.url)
    )} `
  );
  stdin.on('data', async (data) => {
    if (data.toString().trim() === '.exit') {
      process.exit();
    }

    const command = data.toString().trim().split(' ');

    const argument = command.slice(1).join(' ');
    if (Object.hasOwn(commandsGuide, command[0])) {
      Object.getOwnPropertyDescriptor(commandsGuide, command[0]).value(
        argument
      );
    } else {
      console.error('Command is not found!');
    }

    stdout.write(`${dirname(fileURLToPath(import.meta.url))} `);
  });

  process.on('SIGINT', () => process.exit());
  process.on('exit', () =>
    stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
  );
};

export { app };

import { stdin, stdout } from 'process';
import { getUserName } from '../utils/getUserName.js';
import { commandsGuide } from './commandsGuide.js';
import os from 'os';

const app = async () => {
  const username = getUserName();
  let currentPath = os.homedir();

  stdout.write(
    `Welcome to the File Manager, ${username}!\n${currentPath} `
  );
  stdin.on('data', async (data) => {
    if (data.toString().trim() === '.exit') {
      process.exit();
    }
    const command = data.toString().trim().split(' ');

    const argument = {
      args: command.slice(1).join(' '),
      path: currentPath
    };

    if (Object.hasOwn(commandsGuide, command[0])) {
      await Object.getOwnPropertyDescriptor(commandsGuide, command[0]).value(
        argument
      );
      currentPath = argument.path;
    } else {
      console.error('Invalid input. Command is not found!');
    }

    stdout.write(`${currentPath} `);
  });

  process.on('SIGINT', () => process.exit());
  process.on('exit', () =>
    stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
  );
};

export { app };

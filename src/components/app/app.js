import { stdin, stdout } from 'process';
import os from 'os';
import { getUserName } from '../utils/getUserName.js';
import { commandsGuide } from './commandsGuide.js';
import { ERROR_MESSAGE_INPUT } from '../utils/constant.js';

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
      console.error(ERROR_MESSAGE_INPUT);
    }

    stdout.write(`${currentPath} `);
  });

  process.on('SIGINT', () => process.exit());
  process.on('exit', () =>
    stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
  );
};

export { app };

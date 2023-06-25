import { osCatalog } from './catalog.js';

const PREFIX = '--';

export const os = async (arg) => {
  if (arg.startsWith(PREFIX)) {
    const argument = arg.substring(PREFIX.length);
    const value = await Object.getOwnPropertyDescriptor(osCatalog, argument).value;
    console.log(value);
  } else {
    console.error('Invalid parameter command!');
  }
};
import { osCatalog } from './catalog.js';

const PREFIX = '--';

export const os = (arg) => {
  if (arg.startsWith(PREFIX)) {
    const argument = arg.substring(PREFIX.length);
    console.log(Object.getOwnPropertyDescriptor(osCatalog, argument).value);
  } else {
    console.error('Invalid parameter command!');
  }
};
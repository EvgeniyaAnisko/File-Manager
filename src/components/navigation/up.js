import { dirname } from 'path';

export const up = async (args) => {
  args.path = dirname(args.path);
}
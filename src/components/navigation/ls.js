import { readdir } from 'fs/promises';

export const list = async (url) => {
  try {
    await readdir(url, { withFileTypes: true }).then((res) => {
      for (let el of res) {
        el.Type = el.isFile() ? 'file' : 'directory';
        el.Name = el.name;
      }
      const sortTable = res.sort((a, b) => {
        if (a.Type < b.Type) {
          return -1;
        }
        if (a.Type > b.Type) {
          return 1;
        }
        if (a.Type === b.Type) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
        }
        return 0;
      });

      console.table(sortTable, ['Name', 'Type']);
    });
  } catch {
    console.error('Invalid command');
  }
};

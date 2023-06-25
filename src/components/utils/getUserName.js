const PARAMETR = '--username=';

export const getUserName = () => {
  let username =
    process.argv
      .slice(2)
      .filter((param) => param.startsWith(PARAMETR))
      .toString()
      .substring(PARAMETR.length);
  return username || 'Anonymous';
};

export const urlCompiler = <Args extends Record<string, string | number | boolean>>(path: string) => {
  return {
    query(object: Args): string {
      const keys = Object.keys(object);

      const suffix = keys.reduce((prev, key: string, idx: number) => {
        const separator = idx === 0 ? '?' : '&';
        return (prev += separator + key + '=' + object[key]);
      }, '');

      return path + suffix;
    },
    params(object: Args): string {
      const keys = Object.keys(object);

      const suffix = keys.reduce((prev, key: string) => {
        return (prev += `/${object[key]}`);
      }, '');

      return path + suffix;
    },
  };
};

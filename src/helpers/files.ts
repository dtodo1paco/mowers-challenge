const fs = require('fs');

export const readFileInLines = (filePath: string): string[] => {
  let data = null;
  try {
    data = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  } catch (e) {
    console.error(`Unable to read file ${filePath}`, e);
  }
  return data;
}
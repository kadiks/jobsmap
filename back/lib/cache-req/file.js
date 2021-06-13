const fs = require('fs');

const mkdir = (folderPath) =>
  new Promise((resolve, reject) => {
    fs.mkdir(folderPath, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });

const rm = (folderPath) =>
  new Promise((resolve, reject) => {
    fs.rm(folderPath, { recursive: true, force: true }, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });

const writeJson = (filePath, json) => {
  const content = JSON.stringify(json, null, 2);
  return write(filePath, content);
};

const write = (filePath, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });

const stat = (filePath) =>
  new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    });
  });

const read = (filePath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });

const readJson = async (filePath) => {
  const content = await read(filePath);
  if (content) {
    return JSON.parse(content);
  }
  return null;
};

module.exports = {
  mkdir,
  stat,
  rm,
  readJson,
  read,
  writeJson,
  write,
};

const fs = require('fs');
const { cache_sec } = process.env;
const { stat } = require('./file');

const isFileExpired = async ({
  filePath,
  expiresDurationTs = cache_sec * 1000,
} = {}) => {
  let stats;
  try {
    stats = await stat(filePath);
  } catch (e) {
    stats = null;
  }

  if (!stats) {
    return true;
  }

  const fileModificationTs = stats.mtime.getTime();
  const curDateTs = Date.now();
  const expiresTs = curDateTs - expiresDurationTs;

  if (expiresTs > fileModificationTs) {
    return true;
  }
  return false;
};

module.exports = isFileExpired;

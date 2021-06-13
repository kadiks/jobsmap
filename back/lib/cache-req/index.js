const path = require('path');
const { mkdir, rm, writeJson, readJson } = require('./file');
const isFileExpired = require('./isFileExpired');

const folderPath = path.join(__dirname, '../..', '/.cache');

const getCachedRequest = async (route) => {
  const filePath = path.join(folderPath, route);
  const isExpired = await isFileExpired({ filePath });
  if (!isExpired) {
    return readJson(filePath);
  }
  return null;
};

/**
 *
 * @param {String} route (jobs-places-order-alpha|jobs-places-order-offers)
 */
const cacheRequest = async (route, content) => {
  const filePath = path.join(folderPath, route);
  await writeJson(filePath, content);
};

const deleteCacheFolder = async () => {
  await rm(folderPath);
  await mkdir(folderPath);
};

// deletes the folder on every start of the server
deleteCacheFolder();

module.exports = {
  cacheRequest,
  getCachedRequest,
};

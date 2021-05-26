const { MongoClient } = require("mongodb");

module.exports = async function getMongoClient() {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT } = process.env;
  const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?retryWrites=true&w=majority`;
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  return client.db("mapojob");
};

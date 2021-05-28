const { MongoClient } = require("mongodb");

let dbInstance

/**
 * Connects to a Mongo instance and returns an instance of
 * the db set in env
 * @returns {}
 */
async function initMongoClient(){
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT } = process.env;
  const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?retryWrites=true&w=majority`;
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  dbInstance =  client.db(process.env.MONGO_DB_NAME);
}

function db(){ return dbInstance }

module.exports = {
  initMongoClient,
  db
}

//@ts-check

const { MongoClient, Db } = require("mongodb");

let dbInstance

/**
 * Checks if `dbName` is the name of an existing database
 * @param {Db} dbInstance 
 * @param {string} dbName 
 * @returns {Promise<boolean>}
 */
async function dbExists(dbInstance, dbName){
  const dbAdmin = dbInstance.admin()
  const databasesList = (await dbAdmin.listDatabases()).databases
  const databasesNames = databasesList.map( x => x.name )
  const indexOfDbName = databasesNames.indexOf(dbName)
  return indexOfDbName !== -1
}

/**
 * Based on env, connects to a mongo instance, selects a db
 * instance and sets it to a module local variable to be
 * obtained via the `db` function
 */
async function initMongoClient(){
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME } = process.env;
  const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?retryWrites=true&w=majority`;
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  dbInstance = client.db(MONGO_DB_NAME);
  if(!await dbExists(dbInstance, MONGO_DB_NAME)){
    throw new Error(`database ${MONGO_DB_NAME} does not exist`)
  }
}

/**
 * Return the `get-mongo-client` module level db instance
 * @returns {Db}
 */
function db(){ return dbInstance }

module.exports = {
  initMongoClient,
  db
}

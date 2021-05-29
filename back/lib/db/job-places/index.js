//@ts-check

const { Db } = require('mongodb')
const commonAggregateOptions = require('../common-aggregate-stages')

/**
 * @typedef {Object} JobsPerPlace
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {number} total
 * @property {[number, number]} coords
 */

/**
 * Executes an aggregation on the DB to obtain job offer
 * cout per place
 * @param {Db} db - the Database instance to use for the
 * query
 * @returns {Promise<Array<JobsPerPlace>>}
 */
async function jobsPlaces(db) {
    const jobs = db.collection('jobs')
    const aggOpt = [
        commonAggregateOptions.groupPerPostalCode,
        commonAggregateOptions.restoreRoot,
        commonAggregateOptions.PorjectToApiFormat,
        commonAggregateOptions.remove_id,
        commonAggregateOptions.sortByPlaceName
    ]
    const jobsPerCommunes = await jobs.aggregate(aggOpt).toArray()
    return jobsPerCommunes
}

module.exports = jobsPlaces
  
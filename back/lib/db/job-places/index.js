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
async function jobsPlaces(db, order) {
    let sorter = null
    if(order === 'alpha'){
      sorter = commonAggregateOptions.sortByPlaceName
    }
    if(order === 'offers'){
      sorter = commonAggregateOptions.sortByJobCount
    }  
    const jobs = db.collection('jobs')
    const aggOpt = [
        commonAggregateOptions.matchCommuneType,
        commonAggregateOptions.groupPerPostalCode,
        commonAggregateOptions.restoreRoot,
        commonAggregateOptions.PorjectToApiFormat,
        commonAggregateOptions.remove_id
    ]
    if(sorter){ aggOpt.push(sorter) }
    const jobsPerCommunes = await jobs.aggregate(aggOpt).toArray()
    return jobsPerCommunes
}

module.exports = jobsPlaces
  
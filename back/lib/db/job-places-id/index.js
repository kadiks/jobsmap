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
 * Executes and aggregation on the Db instance to obtain the
 * job offer count for a particular place. The aggregation
 * pipeline could be better: it is simply lifted from the
 * `jobs/places` endpoint with an added $match.
 * @param {Db} db 
 * @param {string} codePostal 
 * @returns {Promise<Array<JobsPerPlace>>}
 */
async function jobsPlaceId(db, codePostal){
    const jobs = db.collection('jobs')
    const aggOpt = [
        {
            $match: {
                'lieuTravail.codePostal': codePostal
            }
        },
        commonAggregateOptions.groupPerPostalCode,
        commonAggregateOptions.restoreRoot,
        commonAggregateOptions.PorjectToApiFormat,
        commonAggregateOptions.remove_id,
        commonAggregateOptions.sortByPlaceName
    ]
    const jobsPerCommune = await jobs.aggregate(aggOpt).toArray()
    return jobsPerCommune
}

module.exports = jobsPlaceId
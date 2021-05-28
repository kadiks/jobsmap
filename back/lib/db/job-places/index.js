//@ts-check
const commonAggregateOptions = require('../common-aggregate-options')

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
  
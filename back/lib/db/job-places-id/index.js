//@ts-check

const commonAggregateOptions = require('../common-aggregate-options')

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
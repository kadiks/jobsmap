//@ts-check

const {db} = require("../../../lib/get-mongo-client")

async function jobsPlaceId(codePostal){
    const jobs = db().collection('jobs')
    const aggOpt = [
        {
            $match: {
                'lieuTravail.codePostal': codePostal
            }
        },
        {
            $group: {
                _id: '$lieuTravail.codePostal',
                total: { $sum: '$nombrePostes' },
                _place: {'$first':'$$ROOT'}
            }
        },
        {
            $replaceRoot: {
                newRoot: { $mergeObjects: [{total: '$total'}, '$_place'] }
            }
        },
        {
            $project: {
                'id': '$_id',
                'name': '$lieuTravail.libelle',
                'type': 'city',
                'total': '$total',
                'coord': ['$lieuTravail.latitude', '$lieuTravail.longitude']
            }
        },
        {
            $unset: '_id'
        },
        {
            $sort: {
                name: 1
            }
        }
    ]
    const jobsPerCommune = await jobs.aggregate(aggOpt).toArray()
    return jobsPerCommune
}

module.exports = jobsPlaceId
  
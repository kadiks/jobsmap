//@ts-check

const getMongoClient = require("../../../lib/get-mongo-client")

async function jobsPlaces() {
    const db = await getMongoClient();
    const jobs = db.collection('jobs')
    const aggOpt = [
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
    const jobsPerCommunes = await jobs.aggregate(aggOpt).toArray()
    return jobsPerCommunes
}

module.exports = jobsPlaces
  
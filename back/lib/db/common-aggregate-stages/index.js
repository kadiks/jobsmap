module.exports = {
    groupPerPostalCode: {
        $group: {
            _id: '$lieuTravail.codePostal',
            total: { $sum: '$nombrePostes' },
            _place: {'$first':'$$ROOT'}
        }
    },
    restoreRoot: {
        $replaceRoot: {
            newRoot: { $mergeObjects: [{total: '$total'}, '$_place'] }
        }
    },
    PorjectToApiFormat: {
        $project: {
            'id': '$_id',
            'name': '$lieuTravail.libelle',
            'type': 'city',
            'total': '$total',
            'coord': ['$lieuTravail.latitude', '$lieuTravail.longitude']
        }
    },
    remove_id: {
        $unset: '_id'
    },
    sortByPlaceName: {
        $sort: {
            name: 1
        }
    },
    sortByJobCount: {
        $sort: {
            total: -1
        }
    }
}
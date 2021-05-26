//@ts-check

function jobsPerPlace(results){
    const placeJobCounts = {}
    results.forEach( datum => {
        const place = datum["lieuTravail"]["libelle"]
        if(!placeJobCounts[place]){
            placeJobCounts[place] = 1
        }else{
            placeJobCounts[place]++
        }
    })
    return placeJobCounts
}

module.exports = jobsPerPlace
//@ts-check

function jobsPerPlace(results){
    const placeJobCounts = {}
    console.log(results.length)
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
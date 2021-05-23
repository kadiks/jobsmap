const fetch = require('node-fetch')

const jobs = {
    lastSet: new Date(),
    data: null,
    counts: {}
}

module.exports = async function getJobs(token){
    const jobsAreFresh = (new Date() - jobs.lastSet) < 8.64e+7
    if(jobs.data && jobsAreFresh){
        return jobs.data
    }
    else{
        jobs.data = []
        await requestJobs_(token)
        countJobs()
        return jobs.counts
    }
}

async function requestJobs_(token, index=0){
    console.log(`round ${index}-${index+149}`)
    const url = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?codeROME=M1805&range=${index}-${index+149}`
    const res = await fetch(url, { method: 'GET', headers: {Authorization: `Bearer ${token}`} })
    const json = await res.json()
    jobs.data = jobs.data.concat(json.resultats)
    if(res.status === 206 && index +150 < 1000){
        await setTimeout(() => {}, 10000)
        return requestJobs_(token, index + 150)
    }
}

function countJobs(){
    for(const entry of jobs.data){
        if(jobs.counts[entry.lieuTravail.libelle]){
            jobs.counts[entry.lieuTravail.libelle].total++
        }else{
            jobs.counts[entry.lieuTravail.libelle] = {
                id: entry.lieuTravail.codePostal,
                name: entry.lieuTravail.libelle,
                type: 'city',
                total: 1,
                coords: [entry.lieuTravail.latitude, entry.lieuTravail.longitude]
            }
        }
    }
}
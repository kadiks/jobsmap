const { isNull } = require("lodash");
const fetch = require("node-fetch");

const extractKeywords = require("../extract-keywords");

const jobs = {
  lastSet: new Date(),
  data: null,
  counts: {},
};

module.exports = async function getJobs(token) {
  const jobsAreFresh = new Date() - jobs.lastSet < 8.64e7;
  if (jobs.data && jobsAreFresh) {
    return Object.values(jobs.counts);
  } else {
    jobs.data = [];
    await requestJobs_(token);
    countJobs();
    cleanJobs();
    const jobsArray = Object.values(jobs.counts);
    jobsArray.forEach((job) => (job.keywords = pseudoSetToKw(job.keywords)));
    return jobsArray;
  }
};

async function requestJobs_(token, index = 0) {
  const url = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?codeROME=M1805&range=${index}-${index + 149
    }`;
  const res = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  jobs.data = jobs.data.concat(json.resultats);
  if (res.status === 206 && index + 150 < 1000) {
    await setTimeout(() => { }, 10000);
    return requestJobs_(token, index + 150);
  }
}

function kwToPseudoSet(kw) {
  const entries = kw.map(Object.entries);
  const cleanedEntries = entries.map((x) => [x[0][1], x[1][1]]);
  return Object.fromEntries(cleanedEntries);
}

function pseudoSetToKw(pseudoSet) {
  return Object.entries(pseudoSet)
    .map((o) => [
      ["keyword", o[0]],
      ["count", o[1]],
    ])
    .map(Object.fromEntries);
}

function mergeKwSet(oldKw, newKw) {
  for (const keyword in newKw) {
    if (oldKw[keyword]) {
      oldKw[keyword]++;
    } else {
      oldKw[keyword] = 1;
    }
  }
}

function countJobs() {
  for (const entry of jobs.data) {
    if (jobs.counts[entry.lieuTravail.libelle]) {
      jobs.counts[entry.lieuTravail.libelle].total++;
      mergeKwSet(
        jobs.counts[entry.lieuTravail.libelle].keywords,
        kwToPseudoSet(extractKeywords(entry.description))
      );
    } else {
      jobs.counts[entry.lieuTravail.libelle] = {
        id: entry.lieuTravail.codePostal,
        name: entry.lieuTravail.libelle.replace(/\d+\s-\s/giu, ""),
        type: "city",
        total: 1,
        coords: [entry.lieuTravail.latitude, entry.lieuTravail.longitude],
        keywords: kwToPseudoSet(extractKeywords(entry.description)),
      };
    }
  }
}

function cleanJobs() {
  for (const key in jobs.counts) {
    if (!jobs.counts[key].coords[0]) {
      delete jobs.counts[key];
    }
  }
}

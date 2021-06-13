const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const extractKeywords = require("../lib/extract-keywords");

const getJobsFromAPI = require("../lib/get-jobs");

const getJobs = async (req, res) => {
  let jobs = await getJobsFromAPI(req.accessToken);
  const { order } = req.query;
  switch (order) {
    case "alpha":
      jobs.sort(function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      break;
    case "offers":
      jobs.sort(function compare(a, b) {
        if (a.total > b.total) return -1;
        if (a.total < b.total) return 1;
        return 0;
      });
      break;
  }
  res.json({
    success: true,
    data: jobs,
  });
};


const getJobsByDpt = (req, res) => {
  // console.log("req: ", req);
  // Creates the variable to return
  const offers = [];
  const token = req.accessToken;
  // Fetches offers with the department number 01
  fetch(`https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?codeROME=M1805&departement=01`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => res.json())
    .then((json) => {
      // Maps all results
      json.resultats.map((offer) => {

        // Concatenates the title and the description
        const str = `${offer.intitule} ${offer.description}`;
        // Extracts keywords from both title and description
        const keywords = extractKeywords(str);
        // Creates a new object with the data required
        const formatedOffer = {
          "title": offer.intitule,
          "description": offer.description,
          "date": offer.dateCreation,
          "langages": keywords,
          "link": offer.origineOffre.urlOrigine
        };
        // pushes the new object in the array to return
        offers.push(formatedOffer);
      });
      console.log("offers 1", offers);
    })
  console.log("offers 2", offers);
  res.json({
    success: true,
    data: offers
  });
};

module.exports = {
  getJobs,
  getJobsByDpt
};

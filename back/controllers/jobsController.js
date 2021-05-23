const express = require('express');
const router = express.Router();

const getJobsFromAPI = require('../lib/get-jobs')

const getJobs = async (req, res) => {

  const jabs = await getJobsFromAPI(req.accessToken)
  res.json({
    success: true,
    data: jabs
  });
  /*
  console.log(jabs)
  const jobs = [
    {
      "city": "Paris",
      "total": 1234
    },
    {
      "city": "Marseille",
      "total": 800
    }
  ]
  res.json({
    success: true,
    data: jobs
  });
  */
}

//router.route('/').get(getJobs);

module.exports = { getJobs }
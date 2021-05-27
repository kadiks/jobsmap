const express = require('express');
const router = express.Router();

const getJobsFromDB = require('../lib/db/job-places')

const getJobs = async (req, res) => {
  const jobs = await getJobsFromDB()
  res.json({
    success: true,
    data: jobs
  });
}

module.exports = { getJobs }
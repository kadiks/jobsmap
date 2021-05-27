const express = require('express');
const router = express.Router();

const getJobsFromDB = require('../lib/db/job-places')
const getJobsWithIdFromDb = require('../lib/db/job-places-id')

const getJobs = async (req, res) => {
  const jobs = await getJobsFromDB()
  res.json({
    success: true,
    data: jobs
  });
}

const getJobsWithPlaceId = async (req, res) => {
  let jobs = await getJobsWithIdFromDb(req.params.placeId)
  if(jobs.length === 1){
    jobs = jobs[0]
  }else{
    jobs = false
  }
  res.json({
    success: true,
    data: jobs
  })
}

module.exports = { getJobs, getJobsWithPlaceId }
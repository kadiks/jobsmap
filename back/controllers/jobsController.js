const express = require('express');
const router = express.Router();

const getJobsFromDB = require('../lib/db/job-places')
const getJobsWithIdFromDb = require('../lib/db/job-places-id')

const getJobs = async (req, res) => {
  const {db} = req.app.locals
  const jobs = await getJobsFromDB(db)
  res.json({
    success: true,
    data: jobs
  });
}

const getJobsWithPlaceId = async (req, res) => {
  const {db} = req.app.locals
  let jobs = await getJobsWithIdFromDb(db, req.params.placeId)
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

router.get('/places', getJobs)
router.get('/places/:placeId', getJobsWithPlaceId)

module.exports = router
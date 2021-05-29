//@ts-check

const express = require('express');
const router = express.Router();

const getJobsFromDB = require('../lib/db/job-places')
const getJobsWithIdFromDb = require('../lib/db/job-places-id')

/**
 * Returns job offer counts per place
 * @param {express.request} req 
 * @param {express.response} res 
 * @returns {Promise<void>}
 */
const getJobs = async (req, res) => {
  const {db} = req.app.locals
  const jobs = await getJobsFromDB(db)
  res.json({
    success: true,
    data: jobs
  });
}

/**
 * Return job offer count for a given place. If no job
 * exists for this place, the server's response will *not*
 * contain an object but simple `false`. See `README.md` for
 * details. The place's id is expected in the request
 * parameters
 * @param {express.request} req 
 * @param {express.response} res
 * @returns {Promise<void>}
 */
const getJobsWithPlaceId = async (req, res) => {
  const {db} = req.app.locals
  let jobs = await getJobsWithIdFromDb(db, req.params.placeId)
  let job
  if(jobs.length === 1){
    job = jobs[0]
  }else{
    job = false
  }
  res.json({
    success: true,
    data: job
  })
}

router.get('/places', getJobs)
router.get('/places/:placeId', getJobsWithPlaceId)

module.exports = router
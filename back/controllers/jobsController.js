const express = require("express");
const router = express.Router();

const getJobsFromAPI = require("../lib/get-jobs");

const getJobs = async (req, res) => {
  const jobs = await getJobsFromAPI(req.accessToken);
  res.json({
    success: true,
    data: jobs,
  });
};

module.exports = { getJobs };

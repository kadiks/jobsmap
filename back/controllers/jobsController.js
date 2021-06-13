const express = require('express');
const router = express.Router();

const getJobsFromAPI = require('../lib/get-jobs');
const { getCachedRequest, cacheRequest } = require('../lib/cache-req');

const getJobs = async (req, res) => {
  const { order = '' } = req.query;

  const cacheName = `jobs-places-order-${order}`;
  const cached = await getCachedRequest(cacheName);

  if (cached) {
    res.json({
      success: true,
      data: cached,
    });
    return;
  }

  let jobs = await getJobsFromAPI(req.accessToken);
  switch (order) {
    case 'alpha':
      jobs.sort(function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      break;
    case 'offers':
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
  await cacheRequest(cacheName, jobs);
};

module.exports = { getJobs };

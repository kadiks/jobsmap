const express = require('express');
const router = express.Router();

const getJobs = (req, res) => {
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
}

router.route('/').get(getJobs);
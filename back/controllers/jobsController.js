const express = require("express");
const router = express.Router();

const getJobsFromAPI = require("../lib/get-jobs");

const extractKeywords = require("../exploration/extract-keywords")

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
			res.json({
				success: true,
				data: jobs,
			});
			break;
		case "offers":
			jobs.sort(function compare(a, b) {
				if (a.total > b.total) return -1;
				if (a.total < b.total) return 1;
				return 0;
			});
			res.json({
				success: true,
				data: jobs,
			});
			break;
		default:
			res.json({
				success: true,
				data: jobs,
			});
	}
};

module.exports = { getJobs };

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getToken = require("./lib/get-token");
const PORT = process.env.PORT || 3002;

// app
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static
app.use(express.static("public"));

// controllers
const { jobsController } = require("./controllers");

let accessToken = null;

app.all("*", function (req, res, next) {
	if (!accessToken) {
		res.json({
			success: false,
			data: "server error: no b2b token",
		});
		return;
	} else {
		req.accessToken = accessToken;
		next();
	}
});

async function init() {
	accessToken = await getToken();
	// Routes
	app.use("/api/jobs/places", jobsController.getJobs);
	// set a new token
	setInterval(async function () {
		accesToken = await getToken();
	}, 1499000);
}

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
	init();
});

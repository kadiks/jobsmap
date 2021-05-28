//@ts-check

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 3002

// app
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve static
app.use(express.static("public"))

// controllers
const { jobsController } = require("./controllers")

app.use('/jobs', jobsController)

//app.get('/jobs/places', jobsController.getJobs)
//app.get('/jobs/places/:placeId', jobsController.getJobsWithPlaceId)

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});

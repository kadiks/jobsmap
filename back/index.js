const express = require('express');
const cors = require('cors');

require('dotenv').config()


// app
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function to set a new token
const initial = () => {
  const accessToken = "";
  setInterval(function () {
    accesToken = "";
  }, 1000);
}

// controllers
const {
  jobsController,
} = require('./controllers');

// Routes
app.use('/jobs', jobsController.getJobs);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const getToken = require('./lib/get-token')

// app
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// controllers
const { jobsController } = require('./controllers');

// function to set a new token
const initial = () => {
  const accessToken = "";
  setInterval(function () {
    accesToken = "";
  }, 1000);
}

async function init(){  
  try{
    const token = await getToken()
    // Routes
    app.use('/jobs', jobsController.getJobs);
  }
  catch(e){
    console.error(e)
    app.all('*', function(req, res, next){
      res.statusCode = 500
      res.send({success: false, payload: e})
    })
  }
}

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  init()
});
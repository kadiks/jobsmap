require('dotenv').config()
const express = require('express');
const cors = require('cors');
const getToken = require('./lib/get-token')
const PORT = process.env.PORT || 3002;

// app
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// controllers
const { jobsController } = require('./controllers');

let accessToken = null

app.all('*', function(req, res, next){
  req.accessToken = accessToken
  next()
})

async function init(){  
  accessToken = await getToken()
  // Routes
  app.use('/jobs', jobsController.getJobs);
  // set a new token
  setInterval(async function(){
    accesToken = await getToken()
  }, 1499000);
}
  /*
  catch(e){
    console.error(e)
    app.all('*', function(req, res, next){
      res.statusCode = 500
      res.send({success: false, payload: e})
    })
    */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  init()
});
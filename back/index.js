//@ts-check

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 3002

const { initMongoClient, db } = require('./lib/get-mongo-client')

// app
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve static
app.use(express.static("public"))

// controllers
const { jobsController } = require("./controllers")

async function init(){
  try{
    await initMongoClient()
    app.use('/jobs', jobsController)
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  }
  catch(error){
    console.error(error.message)
  }
}

init()
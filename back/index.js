//@ts-check

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 3002

const { initMongoClient, db } = require('./lib/get-mongo-client')

/**
 * @type {express.application} - app
 */
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
    app.locals.db = db()
    app.use('/jobs', jobsController)
  }
  catch(error){
    console.error(error.message)
    app.use('*', (req, res) => {
      res.json({
        success: false,
        data: `DB ERROR: ${error.message}`
      })
    })
  }
  // serve despite no db connection, the front will also see
  // the error in API call response body.
  finally{
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  }
}

init()
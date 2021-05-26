//@ts-check

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const getToken = require("./lib/get-token")
const getMongoClient = require("./lib/get-mongo-client")
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

async function mongoRequest() {
  const db = await getMongoClient();
  const jobs = db.collection('jobs')
  const aggOpt = [
    {
      $group:
      {
        _id: '$lieuTravail.codePostal',
        name: { $first: '$lieuTravail.libelle' },
        total: { $sum: '$nombrePostes' },
        latitude: { $first: '$lieuTravail.latitude' },
        longitude: { $first: '$lieuTravail.longitude' }
      }
    },
    {
      $project: {
        'name': '$name',
        'type': 'city',
        'total': '$total',
        'coord': ['$latitude', '$longitude']
      }
    }
  ]
  const jobsPerCommunes = await jobs.aggregate(aggOpt).toArray()
}


app.listen(PORT, async () => {
  await mongoRequest()
  return
  //console.log(`Server is running on port ${PORT}.`);
  //init();
});

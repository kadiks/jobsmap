const express = require("express");
const router = express.Router();

const communes = require('../lib/data/referentiel-communes.json')
const departements = require('../lib/data/referentiel-departements.json')

const getLocations = (req, res) => {
    const { type } = req.query
    if(type === "department"){
        res.json({
            success: true,
            data: departements
        })
    }else if(type === "city"){
        res.json({
            success: true,
            data: communes
        })
    }
}

module.exports = { getLocations }
const express = require("express");
const router = express.Router();

const { getKeywordsFromAPI } = require("../lib/get-jobs");
const communes = require('../lib/data/referentiel-communes.json')

const getKeywords = async (req, res) => {
    let keywords = await getKeywordsFromAPI(req.accessToken)
    if(req.query.by === 'count'){
        const pairs = Object.entries(keywords)
        const orderedPairs = pairs.sort( (a, b) => b[1] - a[1] )
        res.json({
            success: true,
            data: orderedPairs.map( p => p[0] )
        })
    }else{
        res.json({
            success: true,
            data: Object.keys(keywords)
        })
    }
}

const getCities = async (req, res) => {
    res.json({
        success: true,
        data: communes.map( c => c.libelle )
    })
}

module.exports =  { getKeywords, getCities }
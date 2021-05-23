//@ts-check
const fetch = require('node-fetch')
const { URLSearchParams } = require('url');

const url = 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire'

const params = new URLSearchParams();
params.append('grant_type', undefined)//process.env.grant_type)
params.append('client_id', process.env.client_id)
params.append('client_secret', process.env.client_secret)
params.append('scope', process.env.scope)

async function getToken(tokenBox){
    const res = await fetch(url, { method: 'POST', body: params })
    const json = await res.json()
    if(res.status === 200){
        return json
    }
    throw `token retrieval error: ${json.error_description}`
}

module.exports = getToken
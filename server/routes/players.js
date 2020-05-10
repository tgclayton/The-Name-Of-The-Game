const express = require('express')
const camelcaseKeys = require('camelcase-keys')
const db = require('../db/players')
const router = express.Router()

module.exports = router

// GET /players (note: no need '/' as in server.js - use)
router.get('/', (req, res) => {
  return db.getPlayers()
    .then(camelcaseKeys)
    .then(player => res.status(200).json(player))
})

//POST /
router.post('/', (req,res) => {
  let name = req.body.player_name 
  // let name = 'hard-coded' //works
  console.log(req.body) //empty {}
  
  return db.addPlayer(name)
    .then(() => {
      res.json({ player_name: name })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
  
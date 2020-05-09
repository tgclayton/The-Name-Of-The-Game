const express = require('express')
const camelcaseKeys = require('camelcase-keys')
const db = require('../db/players')
const router = express.Router()
// router.use(express.json())

module.exports = router

// GET /players (note: no need '/' as in server.js - use)
router.get('/', (req, res) => {
  return db.getPlayers()
    .then(camelcaseKeys)
    .then(player => res.status(200).json(player))
})



// //POST /v1/focus
// router.post('/players', (req, res) => {
//   console.log('players.js')
//   db.addPlayers(req.body)
//   .then(() => {
//     res.status(201).send()
//     })
//   .catch(err => {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })



// // router.get('/', (req, res) => {
// //   return db.getFoods()
// //     .then(camelcaseKeys)
// //     .then(foods => res.status(200).json(foods))
// // })





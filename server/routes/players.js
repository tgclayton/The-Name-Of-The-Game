const express = require('express')
const db = require('../db/players')
const router = express.Router()
router.use(express.json())

module.exports = router

router.get('/players', (req, res) => {
  db.getPlayers()
    .then(player => {
      res.json({
        player
      }) 
    })
})

//POST /players
router.post('/players', (req, res) => {
  // console.log('players.js')
  db.addPlayer(req.body)
  .then(() => {
    res.status(201).send()
    })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// router.post('/', (req,res) => {
//   // let name = req.body.player_name 
//   let name = 'my gosh' //works
//   console.log(req.body) //empty {}
  
//   return db.addPlayer(name)
//     .then(() => {
//       res.json({ player_name: name })
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })





const config = require('../../knexfile').development
const db = require('knex')(config)
const connection = require('./connections')


module.exports = {
  getPlayers
}



function getPlayers (db = connection) {
  return db('player_data')
}

// function addPlayer(playerName) {
//   return db('player_data')
//     .insert({player_name: playerName})
// }








const connection = require('./connections')

module.exports = {
  getPlayers,
  addPlayer
}

function getPlayers (db = connection) {
  return db('player_data')
  .select('player_one as playerOne', 'player_two as playerTwo')
  .where({game_id: 1})
  .then(results => {
    return (results)
    })
}


function addPlayer (player, db = connection) {
  return db('player_data')
    .insert({
      player_one: player.playerOne,
      player_two: player.playerTwo
    })
}



exports.up = (knex) => {
  return knex.schema.createTable('player_data', table => {
    table.increments('game_id').primary()
    table.string('player_one')
    table.string('player_two')
    table.string('winner')
})
}

exports.down = (knex) => {
  return knex.schema.dropTable('player_data')
}
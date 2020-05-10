exports.up = (knex) => {
  return knex.schema.createTable('player_data', table => {
    table.increments('player_id').primary()
    table.integer('game_id')
    table.integer('player_number')
    table.string('player_name')
})
}

exports.down = (knex) => {
  return knex.schema.dropTable('player_data')
}
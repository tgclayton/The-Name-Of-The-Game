
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('player_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('player_data').insert([
        {game_id: 1, player_one: 'Rosaline', player_two: 'Kenrith', winner:'none'},
      ]);
    });
};

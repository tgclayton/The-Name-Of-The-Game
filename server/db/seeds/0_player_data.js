exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('player_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('player_data').insert([
        {player_id: 1, game_id: 1, player_number: '1', player_name:'Rosalinda'},
        {player_id: 2, game_id: 1, player_number: '2', player_name:'Tibost'},
        {player_id: 3, game_id: 2, player_number: '1', player_name:'Remfrey'},
        {player_id: 4, game_id: 2, player_number: '2', player_name:'Ayleth'},
      ]);
    });
};
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('king_french').del()
      .then(function () {
        return knex('king_french').insert([
          {id: 1, name: 'Henri IV le Grand',date_of_dead: 1610,date_of_birth:1519}
        ]);
      });
};
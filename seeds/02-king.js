exports.seed = function(knex) {
  return knex('king_french').del()
      .then(function () {
        return knex('king_french').insert([
          {id: 1, name: 'Henri IV le Grand',date_of_dead: 1800,date_of_birth:1710},
          {id: 2, name: 'Louis XIII le Juste',date_of_dead: 1800,date_of_birth:1740},
          {id: 3, name: 'Louis XIV le Roi Soleil',date_of_dead: 1800,date_of_birth:1745},
          {id: 4, name: 'Louis XV',date_of_dead: 1800,date_of_birth:1790},
          {id: 5, name: 'Louis XVI',date_of_dead: 1800,date_of_birth:1780}
        ]);
      });
};

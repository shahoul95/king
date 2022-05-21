exports.seed = function(knex) {
  return knex('king_french').del()
      .then(function () {
        return knex('king_french').insert([
          {id: 1, name: 'Henri IV le Grand',date_of_dead: 1610,date_of_birth:1519},
          {id: 2, name: 'Louis XIII le Juste',date_of_dead: 1860,date_of_birth:1890},
          {id: 3, name: 'Louis XIV le Roi Soleil',date_of_dead: 1870,date_of_birth:1900},
          {id: 4, name: 'Louis XV',date_of_dead: 1610,date_of_birth:1810},
          {id: 5, name: 'Louis XVI',date_of_dead: 1790,date_of_birth:1813}
        ]);
      });
};

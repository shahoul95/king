exports.up = function(knex) {
    return knex.schema.createTable('king_french', function(table) {
        table.increments('id').unsigned().primary();
        table.string('name').nullable();
        table.integer('date_of_dead').nullable();
        table.integer('date_of_birth').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('king_french');
};

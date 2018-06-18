
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pages', function (table){
    table.increments("id");
    table.integer("userstories_id");
    table.integer("user_id");
    table.string("emotion");
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pages')
};

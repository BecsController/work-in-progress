
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', function (table){
    table.increments("id");
    table.string("title");
    table.string("description");
    table.string("genre");
    table.string("image");
    table.integer("user_id");
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stories')
};

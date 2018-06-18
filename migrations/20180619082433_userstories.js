
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userstories', function (table){
    table.increments("id");
    table.string("title");
    table.string("story_image");
    table.integer("user_id");
    table.integer('page_id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('userstories')
};

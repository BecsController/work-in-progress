
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pages').del()
    .then(function () {
      // Inserts seed entries
      return knex('pages').insert([
        {id: 1, userstories_id: 1, user_id: 1, emotion: 'Anxious'},
      ]);
    });
};

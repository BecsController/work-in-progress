
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: '', email: '', avatar: ''},
        {id: 2, name: '', email: '', avatar: ''},
        {id: 3, name: '', email: '', avatar: ''}
      ]);
    });
};

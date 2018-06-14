
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Gwen Stacey', email: 'gwen@webslinger.com', avatar: 'https://i.pinimg.com/736x/49/0f/2c/490f2c41d5768057a5a1f4022da39b7a--spider-girl-spider-man.jpg'},
        {id: 2, name: 'Someone', email: 'someone@something.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfADPGxXZ7uO55VJ-lfuy1TCnC5kTSEl9kxbCs6sZQpectoUcCyg'},
        {id: 3, name: 'This Guy', email: 'thisguy@emo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBgjEuBiheyCvpEWXSZr550b0wwZ8bjyAn2-kL80o8A0u_0nkHQ'}
      ]);
    });
};

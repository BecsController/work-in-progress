
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userstories').del()
    .then(function () {
      // Inserts seed entries
      return knex('userstories').insert([
        {id: 1, title: 'Off To School', user_id: 1, page_id: 1, story_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnbuXaSFuiONDwcU9WZeRz8wshIQwTerzSIuFVGbErNaO2GnkBg'},
      ]);
    });
};

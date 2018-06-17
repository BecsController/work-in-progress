
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 1, title: 'Off To School', user_id: 1, genre: 'School Stories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnbuXaSFuiONDwcU9WZeRz8wshIQwTerzSIuFVGbErNaO2GnkBg', description: 'Learning to adjust to a new environment is difficult, this story explores the new experience of starting school and explores the feelings that develop.'},
        {id: 2, title: 'At The Mall', user_id: 2, genre: 'Out and About', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9KnNJ-ouwsQ80LguB5RYlWzna8GZlhKan_Xk8XNQ7hQNpkWU', description: 'Crowds and noise can be difficult to cope with, this story looks at potential scenarios that might develop when out and about at the mall'},
        {id: 3, title: 'Hands to Ourselves', user_id: 1, genre: 'Behaviour', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QbCi8T9fgtEPUbC2WDUepT0XAWRy0AQCD-5dlXHNPt5ItyrU', description: "Learning about the right ways to behave is a challenging topic for any child.  This story looks at the reasons why others may not want to be touched, how we can tell others we don\'t like physical touch and what are gentle hands"},
        {id: 4, title: 'Taking Turns', user_id: 1, genre: 'Behaviour', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7aWUNpoxxm8VMX04LwNhy30btvQFCS8Uua4Hyzm_FN7kYCTkog', description: "Social cues can be really hard for children to pick up on.  One of the more pertinant skills for children to learn is how to share.  This story explores the feelings involved with letting others have a turn when we really want to play"},
        {id: 5, title: 'Off To School', user_id: 1, genre: 'School Stories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnbuXaSFuiONDwcU9WZeRz8wshIQwTerzSIuFVGbErNaO2GnkBg', description: 'Learning to adjust to a new environment is difficult, this story explores the new experience of starting school and explores the feelings that develop.'},
        {id: 6, title: 'At The Mall', user_id: 2, genre: 'Out and About', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9KnNJ-ouwsQ80LguB5RYlWzna8GZlhKan_Xk8XNQ7hQNpkWU', description: 'Crowds and noise can be difficult to cope with, this story looks at potential scenarios that might develop when out and about at the mall'}
      ]);
    });
};

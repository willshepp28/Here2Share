
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'antiques'},
        {id: 2, name: 'appliances'},
        {id: 3, name: 'bikes'},
        {id: 4, name: 'books'},
        {id: 5, name: 'automotive'},
        {id: 6, name: 'photo/video'},
        {id: 7, name: 'tools'},
        {id: 8, name: 'electronics'},
        {id: 9, name: 'boats'},
        {id: 10, name: 'services'},
        {id: 11, name: 'video games'},
        {id: 12, name: 'household'},
        {id: 13, name: 'housing'},
        {id: 14, name: 'motorcycles'},
        {id: 15, name: 'camping'},
        {id: 16, name: 'outdoor'},
        {id: 17, name: 'movies'}
      ]);
    });
};


/* 


antiques
appliances
bikes
books
automotive
photo/video
tools
electronics
boats
services
video games
household
housing

*/

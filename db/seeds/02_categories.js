
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'antiques'},
        {id: 2, name: 'appliances'},
        {id: 3, name: 'bikes'},
        {id: 4, name: 'books'},
        {id: 5, name: 'automotive'},
        {id: 6, name: 'photo/video'},
        {id: 7, name: 'tools'},
        {id: 8, name: 'electronics'},
        {id: 9, name: 'boats'},
        {id: 10, name: ''},
        {id: 11, name: ''},
        {id: 12, name: ''},
        {id: 13, name: ''}
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

db.categories.insert([
  {
      name:"Appliances"
  },
  {
      name:"Jewelry"
  },
  {
      name:"Bikes"
  },
  {
      name:"Automotive"
  },
  {
      name:"Photo/Video"
  },
  {
      name:"Tools"
  },
  {
      name:"Electronics"
  },
  {
      name:"Books"
  },
  {
      name:"Boats"
  },
  {
      name:"Services"
  }
]);
const CategoriesSchema = new mongoose.Schema({
  
      name: { type: String, required: true },
      products: [{ type: Schema.Types.ObjectId, ref: "Products" }]
  
  });
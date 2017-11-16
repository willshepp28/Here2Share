const mongoose = require('mongoose'),
Schema = mongoose.Schema;





/*
|--------------------------------------------------------------------------
|  Category Schema
|--------------------------------------------------------------------------
*/
const CategoriesSchema = new mongoose.Schema({
    
        name: { type: String, required: true },
        products: [{ type: Schema.Types.ObjectId, ref: "Products" }]
    
    });

const Categories = mongoose.model('Categories', CategoriesSchema);




module.exports = Categories;
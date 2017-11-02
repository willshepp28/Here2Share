const mongoose = require('mongoose'),
Schema = mongoose.Schema;





/*
|--------------------------------------------------------------------------
|  Product Schema
|--------------------------------------------------------------------------
*/

const ProductsSchema = new mongoose.Schema({
    
        name: { type: String, required: true },
        price: { type: Number, required: true },
        createdAt: {type: Date, default: Date.now},
        description: {type: String, required: true },
        isAvailable: {type:Boolean, default: false },
        user: {type: String, ref: 'Users'},
        category: { type : Schema.ObjectId, ref : 'Categories' }
    
    });
    
const Products = mongoose.model('Products', ProductsSchema);








module.exports = Products;
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
    productImage: {type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String, required: true },
    isAvailable: { type: Boolean, default: false },
    _productOwner: { type: String, ref: 'Users' },
    _category: { type: Schema.ObjectId, ref: 'Categories' }

});

const Products = mongoose.model('Products', ProductsSchema);






// const QuestionsSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     user: UserSchema,
//     description: {type: String, required: true},
//     answers: [{type: Schema.ObjectId, ref: 'Answers'} ]
// })
// const AnswersSchema = new mongoose.Schema({
//     body: {type: String, required: true},
//     user: UserSchema,
//     votes: {type: Number, default: 0}
// })
// const UserSchema = new mongoose.Schema({
//     email: {type: String, required: true},
//     password: {type: String, required: true}
// })
module.exports = Products;
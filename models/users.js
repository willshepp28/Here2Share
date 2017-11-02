const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    Schema = mongoose.Schema;






/*
|--------------------------------------------------------------------------
|  User Schema
|--------------------------------------------------------------------------
*/
const UsersSchema = new mongoose.Schema({


    username: { type: String, required: true },
    profilePic: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true},
    state: { type: String, required: true},
    street: { type: String, required: true },
    password: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Products" }]

});

const Users = mongoose.model('Users', UsersSchema);


module.exports = Users;
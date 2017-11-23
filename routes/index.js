const router = require('express').Router(),
    crypto = require('crypto');



const User = require('../models/users');
const Product = require('../models/products');
const Category = require('../models/categories');
const knex = require('../db/knex');




/*
 |--------------------------------------------------------------------------
 | Home
 |--------------------------------------------------------------------------
 */
router
    .route('/')
    .get(async (request, response) => {

        var popular = await knex.select().from('products').where('_category', 5).limit(3);
        var appliance = await knex.select().from('products').where('_category', 2).limit(3);
        var jewelry = await knex.select().from('products').where('_category', 18).limit(3);


        var category = await knex.select()
            .from('categories')
            .then((category) => {
                response.render('home', { category: category, popular: popular, appliance: appliance, jewelry: jewelry, isAuthenticated: request.session.isAuthenticated });
            })
            .catch((err) => {
                response.send(err);
            });
    
    

    });




/*
 |--------------------------------------------------------------------------
 | Shop
 |--------------------------------------------------------------------------
 */
router
    .route('/shop')
    .get((request, response) => {
        response.render("shop", { isAuthenticated: request.session.isAuthenticated });
    });





router
    .route('/shop/:category')
    .get(async(request,response) => {

        // var popular = await Product.find({_category: "59fb5854cc3eff65a9bfe9ba" }).populate('_category').populate('_productOwner').limit(3);
        const selectedCategory = request.params.category;
    



            
            var category = await knex.select()
                .from('products')
                .where('_category', selectedCategory)
                .then((category) => {
                    response.render('shop', { category: category, isAuthenticated: request.session.isAuthenticated });
                })
                .catch((err) => {
                    console.log(err);
                    response.send(err);
                });
           
        


    })




/*
 |--------------------------------------------------------------------------
 | Signup
 |--------------------------------------------------------------------------
 */
router
    .route('/signup')
    .get((request, response) => {
        response.render("signup");
    })
    .post(async (request, response) => {
        // convert they string password into a integer
        const username = request.body.username;
        const email = request.body.email;
        const firstname = request.body.firstname;
        const lastname = request.body.lastname;
        const profilePic = request.body.profilePic || "https://agritrack.com.au/wp-content/uploads/2017/01/face-icon-png-4295-e1504568783744.png";
        const city = request.body.city;
        const state = request.body.state;
        const street = request.body.street;
        const password = request.body.password;
        const confirm = request.body.confirm;


        const encrypt = crypto.pbkdf2Sync(request.body.password, 'salt', 10, 512, 'sha512').toString('base64');

        // check to see if confirm and password match
        if (confirm !== password) {
            request.session.errors = "passwords dont match";
            console.log(request.session.errors);
            response.redirect('/');
        } else {



            var user = await User.create({ username: username, firstname: firstname, lastname: lastname, email: email, profilePic: profilePic, city: city, state: state, street: street, password: encrypt })
                .then((user) => {
                    console.log(user);
                    response.redirect("/");
                })
                .catch((err) => {
                    console.log(err);
                    response.redirect("/login");
                });

        }

    });




/*
 |--------------------------------------------------------------------------
 | login
 |--------------------------------------------------------------------------
 */
router
    .route('/login')
    .get((request, response) => {
        response.render("login");
    })
    .post(async (request, response) => {

        const username = request.body.username;
        const password = request.body.password;
        const encrypt = crypto.pbkdf2Sync(password, 'salt', 10, 512, 'sha512').toString('base64');

        if (username && password) {
            var user = await User.find({ username: username, password: encrypt })
                .then((user) => {
                    request.session.isAuthenticated = true;
                    request.session.username = user.username;
                    console.log(user);
                    response.redirect("/");
                })
                .catch((err) => {
                    console.log(err);
                    response.redirect("/login");
                })
        }
    })





/*
 |--------------------------------------------------------------------------
 | Dashboard
 |--------------------------------------------------------------------------
 */
router
    .route('/dashboard')
    .get((request, response) => {
        response.render("dashboard", { isAuthenticated: request.session.isAuthenticated });
    })





/*
 |--------------------------------------------------------------------------
 | addProduct
 |--------------------------------------------------------------------------
 */
router
.route('/addProduct')
.post(async(request, response) => {
    
    const name = request.body.name,
        price = request.body.price,
        description = request.body.description,
        _productOwner = request.body.productOwner,
        _category = request.body.category;




        var product = await Product.create({ name: name, price: price, description: description, _productOwner, _category })
        .then((product) => {
            console.log(product);
            response.redirect("/dashboard");
        })
        .catch((err) => {
            console.log(err);
            response.redirect("/");
        })

    
})




/*
 |--------------------------------------------------------------------------
 | logout
 |--------------------------------------------------------------------------
 */
router.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect('/login');
});




module.exports = router;
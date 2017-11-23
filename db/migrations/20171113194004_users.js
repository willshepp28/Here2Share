
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments();
            table.string('username').notNullable();
            table.string('firstname').notNullable();
            table.string('lastname').notNullable();
            table.string('profilePic').notNullable();
            table.string('email').notNullable();
            table.string('city').notNullable();
            table.string('state').notNullable();
            table.string('street').notNullable();
            table.text('password').notNullable();
        })
        .createTable('categories', (table) => {
            table.increments();
            table.string('name').notNullable();
        })
        .createTable('products', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.decimal('price', 14, 2).notNullable();
            table.text('productImage').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now()); // puts current time
            table.text('description').notNullable();
            table.boolean('isAvailable').notNullable().defaultTo(true);
            table.integer('_productOwner').unsigned().references('id').inTable('users').onDelete('cascade');
            table.integer('_category').unsigned().references('id').inTable('categories').onDelete('cascade');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('products').dropTable('categories').dropTable('users');
};



/* 


*/

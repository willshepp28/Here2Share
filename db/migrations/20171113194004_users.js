
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').notNullable();
      table.string('profilePic').notNullable();
      table.string('email').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('street').notNullable();
      table.string('password').notNullable();
  })
    .createTable('categories', (table) => {
        table.increments();
        table.string('name').notNullable();
    })
    .createTable('products', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.integer('price').notNullable();
        table.string('productImage').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()); // puts current time
        table.text('description').notNullable();
        table.boolean('isAvailable').notNullable().defaultTo(false);
        table.integer('_productOwner').references('id').inTable('users'); 
        table.integer('_category').references('id').inTable('categories'); 
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users').dropTable('categories').dropTable('products');
};


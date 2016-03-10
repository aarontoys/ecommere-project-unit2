
exports.up = function(knex, Promise) {
   return knex.schema.createTable('orders', function(table){
    table.increments();
    table.string('categories_id');
    table.string('categories_products_id');
    table.integer('orders_id');
    table      
      .foreign('orders_id')
      .references('id')
      .inTable('users');
    table.string('order_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};

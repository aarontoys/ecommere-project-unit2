
exports.up = function(knex, Promise) {
   return knex.schema.createTable('order_details', function(table){
    table.increments();
    table.integer('orders_id');
    table      
      .foreign('orders_id')
      .references('id')
      .inTable('orders');
    table.integer('order_qty');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_details');
};

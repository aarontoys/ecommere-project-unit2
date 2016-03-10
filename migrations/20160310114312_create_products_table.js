
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments();
    table.string('name');
    table.decimal('price');
    table.integer('qty');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};

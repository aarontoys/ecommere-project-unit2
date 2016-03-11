
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories_products', function (table) {
    table.integer('product_id');
    table.integer('category_id');
    table.foreign('product_id').references('products.id');
    table.foreign('category_id').references('categories.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories_products');
};

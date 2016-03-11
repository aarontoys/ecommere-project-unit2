
exports.up = function(knex, Promise) {
  return knex.schema.table('products', function(table){
    table.string('img_url');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products');
    table.dropColumn('img_url');
};


exports.up = function(knex, Promise) {
   return knex.schema.createTable('addresses', function(table){
    table.increments();
    table.integer('users_id');
    table      
      .foreign('users_id')
      .references('id')
      .inTable('users');
    table.string('address_type');
    table.string('line1');
    table.string('ship_fname');
    table.string('ship_lname');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses');
};

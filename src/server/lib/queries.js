var knex = require('../../../db/knex');

function Products () {
  return knex('products');
}

function Users () {
  return knex('users');
}

function getAllProducts() {
  return Products().select(); 
}



module.exports = {
  getAllProducts: getAllProducts
}
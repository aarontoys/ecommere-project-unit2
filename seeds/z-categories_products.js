
var seeder = require('knex-csv-seeder').seeder.seed;
 
exports.seed = seeder({
  table: 'categories_products',
  file: 'seeds/seed-files/categories_products.csv',
  // recordsPerQuery: 100, 
  // encoding: 'utf8' default encoding 
  // parser: { 
  //   delimiter: ',', 
  //   quote: '"', 
  //   escape: '\\' 
  // } 
});
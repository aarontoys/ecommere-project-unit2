
var seeder = require('knex-csv-seeder').seeder.seed;
 
exports.seed = seeder({
  table: 'products',
  file: 'seeds/seed-files/products.csv',
  // recordsPerQuery: 100, 
  // encoding: 'utf8' default encoding 
  // parser: { 
  //   delimiter: ',', 
  //   quote: '"', 
  //   escape: '\\' 
  // } 
});


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(), 

    // Inserts seed entries
    knex('categories').insert({id: 1, name: 'red'}),
    knex('categories').insert({id: 2, name: 'white'}),
    knex('categories').insert({id: 3, name: 'sparkling'})
  );
};

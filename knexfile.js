module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/finewine'
  },

  production: {
    client: 'pg',
    connection: 'postgres://'
  }
};


// Update with your config settings.

// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/finewine'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};


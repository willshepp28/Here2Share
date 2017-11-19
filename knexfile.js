// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/Here2Share',
    migrations: {
      directory: __dirname + '/db/migrations',
  },
  seeds: {
      directory: __dirname + '/db/seeds',
  },
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds/production',
    },
  }

};

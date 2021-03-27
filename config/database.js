module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '10.0.0.2'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'myprojectbe'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'pdbpgsdn1cawsapnz'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

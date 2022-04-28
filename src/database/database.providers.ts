import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        name: 'Delta',
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "delta",
        password: "delta",
        database: "delta",
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  }
];
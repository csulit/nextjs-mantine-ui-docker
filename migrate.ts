/* eslint-disable no-console */
import dotenv from 'dotenv';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

dotenv.config();

if (!process.env.PG_USER_DATABASE_URL) {
  throw new Error('PG_USER_DATABASE_URL is not defined');
}

const databaseUrl = drizzle(postgres(process.env.PG_USER_DATABASE_URL, { max: 1 }));

// eslint-disable-next-line consistent-return
const main = async () => {
  try {
    await migrate(databaseUrl, { migrationsFolder: 'drizzle/migrations' });
    console.info('Database migration done.');
  } catch (error) {
    console.error(error);
  }
  process.exit(0);
};

main();

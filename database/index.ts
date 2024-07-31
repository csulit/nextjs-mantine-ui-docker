import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '@/utils/env';
import * as schema from './schema';

const queryClient = postgres(env.PG_USER_DATABASE_URL);
const db = drizzle(queryClient, { schema, logger: true });

export default db;

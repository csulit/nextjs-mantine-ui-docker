import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  out: 'drizzle/migrations',
  schema: 'database/schema',
  verbose: true,
  strict: true,
});

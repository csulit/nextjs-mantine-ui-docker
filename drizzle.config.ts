import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  out: 'drizzle/migrations',
  schema: 'database/schema.ts',
  verbose: true,
  strict: true,
});

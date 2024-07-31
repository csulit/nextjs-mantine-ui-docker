import { pgTable, varchar, uuid, timestamp, boolean } from 'drizzle-orm/pg-core';

export const hostname = pgTable('hostname', {
  domainId: uuid('domainId').primaryKey().defaultRandom(),
  domain: varchar('domain', { length: 255 }).unique().notNull(),
  enabled: boolean('enabled').default(true),
  createdAt: timestamp('createdAt').defaultNow(),
});

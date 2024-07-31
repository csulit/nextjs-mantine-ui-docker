import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerkId', { length: 255 }).unique(),
  fullName: varchar('fullName', { length: 150 }),
  email: varchar('email', { length: 100 }).unique(),
  createdAt: timestamp('createdAt').defaultNow(),
});

import { InferSelectModel, relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  timestamp,
  varchar,
  text,
  primaryKey,
  integer,
  boolean,
  uuid,
  json,
} from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerk_id', { length: 255 }).notNull().unique(),
  name: text('name'),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const userRelations = relations(user, ({ many }) => ({
  customerConversations: many(conversation),
  supportAgentConversations: many(conversation),
  sentMessages: many(message),
}));

export type User = InferSelectModel<typeof user>;

export const role = pgTable('roles', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

export type Role = InferSelectModel<typeof role>;

export const userRole = pgTable(
  'user_roles',
  {
    userId: serial('user_id').notNull(),
    roleId: serial('role_id').notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.roleId] }),
  })
);

export type UserRole = InferSelectModel<typeof userRole>;

export const conversation = pgTable('conversations', {
  id: serial('id').primaryKey(),
  customerId: integer('customer_id')
    .notNull()
    .references(() => user.id),
  supportAgentId: integer('support_agent_id')
    .notNull()
    .references(() => user.id),
  status: varchar('status', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull(),
});

export const conversationRelations = relations(conversation, ({ one, many }) => ({
  messages: many(message),
  customer: one(user, {
    fields: [conversation.customerId],
    references: [user.id],
  }),
  supportAgent: one(user, {
    fields: [conversation.supportAgentId],
    references: [user.id],
  }),
}));

export type Conversation = InferSelectModel<typeof conversation>;

export const message = pgTable('messages', {
  id: serial('id').primaryKey(),
  isSystemMessage: boolean('is_system_message').default(false),
  conversationId: integer('conversation_id')
    .notNull()
    .references(() => conversation.id),
  senderId: integer('sender_id')
    .notNull()
    .references(() => user.id),
  messageText: text('message_text').notNull(),
  components: json('components').$type<{ name: string; value: string }[]>(),
  systemMessages: json('system_messages').$type<string[]>(),
  readStatus: boolean('read_status').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const messageRelations = relations(message, ({ one, many }) => ({
  conversation: one(conversation, {
    fields: [message.conversationId],
    references: [conversation.id],
  }),
  sender: one(user, {
    fields: [message.senderId],
    references: [user.id],
  }),
  attachments: many(attachment),
}));

export type Message = InferSelectModel<typeof message>;

export const attachment = pgTable('attachments', {
  id: serial('id').primaryKey(),
  messageId: integer('message_id')
    .notNull()
    .references(() => message.id),
  filePath: text('file_path').notNull(),
  fileType: text('file_type').notNull(),
  fileSize: integer('file_size').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const attachmentRelations = relations(attachment, ({ one }) => ({
  message: one(message, {
    fields: [attachment.messageId],
    references: [message.id],
  }),
}));

export type Attachment = InferSelectModel<typeof attachment>;

export const hostname = pgTable('hostnames', {
  domainId: uuid('domain_id').primaryKey().defaultRandom(),
  domain: varchar('domain', { length: 255 }).unique().notNull(),
  enabled: boolean('enabled').default(true),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Hostname = InferSelectModel<typeof hostname>;

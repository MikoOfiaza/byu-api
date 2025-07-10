import {
  pgTable,
  uuid,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId: text('clerk_id').notNull().unique(),
  email: varchar('email', { length: 256 }),
  name: text('name'),
  username: text('username')
});
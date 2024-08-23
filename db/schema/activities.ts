import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const activitiesTable = pgTable("activities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type InsertActivities = typeof activitiesTable.$inferInsert;
export type SelectActivities = typeof activitiesTable.$inferSelect;

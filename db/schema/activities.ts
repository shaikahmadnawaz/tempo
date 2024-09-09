import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type InsertActivities = typeof activities.$inferInsert;
export type SelectActivities = typeof activities.$inferSelect;

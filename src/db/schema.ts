import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const groupsTable = pgTable("groups", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});

// мы можем сгенерировать файлы с миграциями
// npx drizzle-kit generate
// эта команда должна создать SQL файлы, которые мы сможем потом применить
// она сгенерирует файлы миграций

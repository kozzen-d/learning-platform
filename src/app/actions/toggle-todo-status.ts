"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function toggleTodoStatus(id: number) {
  if (!id) return;
  await db
    .update(todos)
    .set({ status: not(todos.status) })
    .where(eq(todos.id, id));
  revalidatePath("/todos");
}

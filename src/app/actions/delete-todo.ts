"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: number) {
  if (!id) return;
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/todos");
}
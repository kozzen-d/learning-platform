"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";

import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function toggleNoteImportant(id: number) {
  if (!id) return;
  await db
    .update(notes)
    .set({ important: not(notes.important) })
    .where(eq(notes.id, id));
  revalidatePath("/notes");
}

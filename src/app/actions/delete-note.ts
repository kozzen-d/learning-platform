"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteNote(id: number) {
  if (!id) return;
  await db.delete(notes).where(eq(notes.id, id));
  revalidatePath("/notes");
}

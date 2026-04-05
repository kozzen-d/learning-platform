"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-option";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

const NoteInsertSchema = z.object({
  topic: z
    .string()
    .trim()
    .min(3, "Min length is at least 3 characters")
    .max(120, "Title is too long (max 120)."),
  content: z
    .string()
    .trim()
    .min(3, "Min length is at least 3 characters")
    .max(255, "Description is too long (max 255)."),
  important: z.boolean().default(false),
});

export async function createNote(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const { user } = session;

  try {
    const noteValidatedData = NoteInsertSchema.parse({
      topic: formData.get("topic")?.toString() ?? "",
      content: formData.get("content")?.toString() ?? "",
      important: formData.get("important") === "on",
    });

    await db.insert(notes).values({
      ...noteValidatedData,
      userId: user.id!,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      console.error(err);
      return;
    }
    throw err;
  }

  revalidatePath("/notes");
  redirect("/notes");
}

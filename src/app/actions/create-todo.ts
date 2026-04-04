"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-option";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z, { ZodError } from "zod";

const TodoInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length is at least 3 characters")
    .max(120, "Title is too long (max 120). "),
  description: z
    .string()
    .trim()
    .min(3, "Min length is at least 3 characters")
    .max(255, "Description is too long (max 255). "),
});
export async function createTodo(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const { user } = session;
  const title = formData.get("title");
  const description = formData.get("description");
  try {
    const todoValidatedData = TodoInsertSchema.parse({ title, description });
    await db.insert(todos).values({ ...todoValidatedData, userId: user.id! });
    revalidatePath("/todos");
  } catch (err) {
    if (err instanceof ZodError) {
      console.error(err);
    }
  }
}

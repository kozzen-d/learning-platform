"use server";

import { db } from "@/db";
import { reviewsTable} from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteReview(id: number) {
  if (!id) return;
  await db.delete(reviewsTable).where(eq(reviewsTable.id, id));

  revalidatePath("/reviews");
}
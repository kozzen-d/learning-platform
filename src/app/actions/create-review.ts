"use server";

import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createReview(formData: FormData) {
  const title = formData.get("title")!.toString();
  const content = formData.get("content")!.toString();

  await db.insert(reviewsTable).values({
    title,
    content,
  });

  redirect("/reviews");
}

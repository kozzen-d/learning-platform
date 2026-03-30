"use server";

import { db } from "@/db";
import { groupsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteGroup(id: number) {
  if (!id) return;
  await db.delete(groupsTable).where(eq(groupsTable.id, id));

  revalidatePath("/groups");
}

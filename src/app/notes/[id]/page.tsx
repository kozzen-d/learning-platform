import { db } from "@/db";
import { notes } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-option";
import { and, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: Props) {
  const { id } = await params;

  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/");
  }

  const note = await db.query.notes.findFirst({
    where: and(eq(notes.id, Number(id)), eq(notes.userId, session.user.id)),
  });

  if (!note || note.userId !== session.user.id) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-8 flex flex-col gap-6">
      <Link
        href="/notes"
        className="text-sm text-gray-500 hover:text-gray-800 transition"
      >
        ← Back to Notes
      </Link>

      <div
        className={`w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 space-y-4
          ${note.important ? "  dark:bg-yellow-950" : ""}`}
      >
        <div className="flex items-center gap-2">
          {note.important && <span>⭐</span>}
          <h1 className="text-2xl font-bold">{note.topic}</h1>
        </div>

        {note.important && (
          <span className="text-xs font-medium px-2 py-1 rounded-full w-fit">
            Important Note
          </span>
        )}

        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
          {note.content}
        </p>

        <p className="text-xs text-gray-400 mt-auto">
          {new Date(note.createdAt).toLocaleString("ru-RU")}
        </p>
      </div>
    </div>
  );
}

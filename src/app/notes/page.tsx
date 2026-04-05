
import Link from "next/link";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { eq, asc, desc } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/auth-option";
import DeleteNoteBtn from "@/components/delete-note-btn";
import { ToggleNoteBtn } from "@/components/toggle-note";
import CreateNote from "@/components/create-note";

export default async function Notes() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/");
  }

  const notesList = await db.query.notes.findMany({
    where: eq(notes.userId, session.user.id),
    orderBy: [desc(notes.important), asc(notes.createdAt)],
  });

  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col gap-8">
      <CreateNote />
      <ul className="py-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-sm w-full break-words">
        {notesList.map((note) => (
          <li
            key={note.id}
            className={`border p-4 shadow rounded-2xl min-w-75 flex flex-col items-center gap-2
              ${note.important ? " dark:bg-yellow-950" : ""}`}
          >
            <Link href={`/notes/${note.id}`}>
              <h3 className="font-bold hover:underline">
                {note.important && "⭐ "}{note.topic}
              </h3>
            </Link>
            <p className="text-sm text-gray-600">{note.content}</p>
            <div className="flex items-center gap-2">
              <DeleteNoteBtn noteId={note.id} />
              <ToggleNoteBtn noteId={note.id} important={note.important} />
            </div>
            <p className="text-xs text-gray-400">
              {new Date(note.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

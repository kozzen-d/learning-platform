"use client";

import { createNote } from "@/app/actions/create-note";

export default function CreateNote() {
  return (
    <form
      action={createNote}
      className="py-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-sm w-full break-words"
    >

       <h2>Add node</h2>
      <input
        name="topic"
        placeholder="Topic"
        required
        className="border rounded-lg px-3 py-2"
      />
      <textarea
        name="content"
        placeholder="Content"
        required
        className="border rounded-lg px-3 py-2 min-h-24 resize-none"
      />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="important" />
        Imortant Node
      </label>
      <button
        type="submit"
        className="w-[200px] bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-medium mx-auto"
      >
        Save
      </button>
    </form>
  );
}

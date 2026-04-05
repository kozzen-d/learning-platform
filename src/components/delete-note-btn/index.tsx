"use client";


import { deleteNote } from "@/app/actions/delete-note";
import { BadgeX, Trash } from "lucide-react";

interface Props {
  noteId: number;
}

export default function DeleteNoteBtn({ noteId }: Props) {
  function handelDelete() {
    deleteNote(noteId);
  }
  return (
    <button type="button" onClick={handelDelete}>
      <Trash color="#e30d0d" />
    </button>
  );
}
"use client";

import { toggleNoteImportant } from "@/app/actions/toggle-note-important";
import { Badge, BadgeCheck } from "lucide-react";
import { FC } from "react";

interface Props {
  noteId: number;
  important: boolean;
}

export const ToggleNoteBtn: FC<Props> = ({ noteId, important }) => {
  function handleToggleNote() {
    toggleNoteImportant(noteId);
  }
 return (
    <button type="button" onClick={handleToggleNote}>
        {important ? "⭐" : "☆"}
      {/* {important ? <BadgeCheck color="#4ea34d" /> : <Badge />} */}
    </button>
  );
};

"use client";

import { deleteTodo } from "@/app/actions/delete-todo";
import { BadgeX, Trash } from "lucide-react";

interface Props {
  todoId: number;
}

export default function DeleteTodoBtn({ todoId }: Props) {
  function handelDelete() {
    deleteTodo(todoId);
  }
  return (
    <button type="button" onClick={handelDelete}>
      <Trash color="#e30d0d" />
    </button>
  );
}
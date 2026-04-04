"use client"

import { toggleTodoStatus } from "@/app/actions/toggle-todo-status";
import { Badge, BadgeCheck } from "lucide-react";
import { FC } from "react";

interface Props {
  todoId: number;
  status: boolean;
}

export const ToggleTodoBtn: FC<Props> = ({ todoId, status }) => {
  function handleToggleTodo() {
    toggleTodoStatus(todoId);
  }
  return (
    <button type="button" onClick={handleToggleTodo}>
      {status ? <BadgeCheck color="#4ea34d" /> : <Badge />}
    </button>
  );
};

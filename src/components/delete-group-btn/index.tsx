"use client";

import { deleteGroup } from "@/app/actions/delete-group";

interface Props {
  id: number;
}

export default function DeleteGroupBtn({ id }: Props) {
  return (
    <button
      type="button"
      onClick={() => deleteGroup(id)}
      className="mt-1 text-sm text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
    >
      Delete
    </button>
  );
}

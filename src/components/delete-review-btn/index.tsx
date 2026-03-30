"use client";

import { deleteReview } from "@/app/actions/delete-review";

export default function DeleteReviewBtn({ id }: { id: number }) {
  return (
    <form action={async () => deleteReview(id)}>
      <button
        type="submit"
        className="mt-2 text-sm text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </form>
  );
}

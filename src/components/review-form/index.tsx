"use client";

import { createReview } from "@/app/actions/create-review";

export default function ReviewForm() {
  return (
    <form
      action={createReview}
      className="flex flex-col gap-4 mb-6 bg-white p-6 rounded-2xl shadow-sm border"
    >
      <input
        name="title"
        placeholder="Title"
        className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        name="content"
        placeholder="Content"
        className="border p-3 rounded-xl min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-[200px] bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-medium mx-auto"
      >
        Add Review
      </button>
    </form>
  );
}

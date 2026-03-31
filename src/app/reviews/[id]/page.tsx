import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

const ReviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (isNaN(Number(id))) {
    notFound();
  }

  const result = await db
    .select()
    .from(reviewsTable)
    .where(eq(reviewsTable.id, Number(id)));

  const review = result[0];

  if (!review) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">{review.title}</h2>

        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
          {review.content}
        </p>

        <div className="border-t pt-4 text-sm text-gray-500 flex justify-between">
          <span>{review.createdAt.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

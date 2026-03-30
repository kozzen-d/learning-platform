import { db } from "@/db";
import { reviewsTable } from "@/db/schema";

import ReviewItem from "@/components/review-item";
import ReviewForm from "@/components/review-form";

export default async function ReviewsPage() {
  const reviews = await db.select().from(reviewsTable);

  return (
    <div className="w-[60%] mx-auto gap-4 p-6 rounded-3xl">
      <h1 className="text-2xl font-bold mb-6">Reviews</h1>

      <ReviewForm />

      <div className="mt-8 divide-y  border-t border-b rounded-3xl">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

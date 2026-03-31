import Link from "next/link";
import DeleteReviewBtn from "../delete-review-btn";

export default function ReviewItem({ review }: any) {
  return (
    <div className="py-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-sm w-full break-words">
      <Link href={`/reviews/${review.id}`}>
      
        <h3 className="font-semibold text-lg">{review.title}</h3>
        <p className="text-gray-600 whitespace-pre-wrap break-words">
          {review.content}
        </p>
      </Link>

      <div className="flex justify-end">
        <DeleteReviewBtn id={review.id} />
      </div>

    </div>
  );
}

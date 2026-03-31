"use server";

import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createReview(formData: FormData) {
  const title = formData.get("title")!.toString();
  const content = formData.get("content")!.toString();
  const newReview = { title, content };

  await db.insert(reviewsTable).values(newReview);
  revalidatePath("/reviews");
}



// import { createReview } from "@/app/actions/create-review";

// export default function CreateReview() {
//   return (
//     <div>
//       <h2>Create Review</h2>
//       <form action={createReview}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           placeholder="Title of Review"
//         />

//         <label htmlFor="content">Content</label>
//         <input
//           type="text"
//           name="content"
//           id="content"
//           placeholder="Please write your review here"
//         />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }
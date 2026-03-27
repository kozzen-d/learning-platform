import { db } from "@/db";
import { coursesTable } from "@/db/schema";

export default async function Courses() {
  const courses = await db.select().from(coursesTable);
  return (
    <div>
      <h2>Courses</h2>
      <ul className="flex flex-wrap p-4 px-20">
        {courses.map((course) => (
          <li key={course.id} className="border p-3 m-2 rounded-2xl shadow">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
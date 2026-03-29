import { db } from "@/db";
import { coursesTable } from "@/db/schema";

export default async function Courses() {
  const courses = await db.select().from(coursesTable);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Courses</h2>

      <div className="divide-y divide-gray-200 border-t border-b">
        {courses.map((course) => (
          <div
            key={course.id}
            className="py-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

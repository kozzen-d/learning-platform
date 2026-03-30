import DeleteGroupBtn from "@/components/delete-group-btn";
import { db } from "@/db";
import { groupsTable } from "@/db/schema";

export default async function Groups() {
  const groups = await db.select().from(groupsTable);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Groups</h1>

      <div className="divide-y divide-gray-200 border-t border-b ">
        {groups.map((group) => (
          <div
            key={group.id}
            className="py-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium text-gray-900">{group.name}</p>
              <DeleteGroupBtn id={group.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

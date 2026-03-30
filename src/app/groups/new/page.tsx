import { createGroup } from "@/app/actions/create-group";

export default function CreateGroup() {
  return (
    <div className="w-[40%]  mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-10">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Create Group</h2>
      <form action={createGroup} className="flex flex-col gap-4">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Cohort 00m-fs"
            className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-1 text-sm text-gray-500 hover:text-green-400 transition-colors cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
}

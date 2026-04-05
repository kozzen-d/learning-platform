import { createTodo } from "@/app/actions/create-todo";

export default function CreateTodo() {
  return (
   <section className="flex flex-col gap-4 mb-6 bg-white p-6 rounded-2xl shadow-sm border max-w-2xl w-full mx-auto">
      <h2>Add todo</h2>
      <form className="flex flex-col gap-4" action={createTodo}>
        <input
          className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="border p-3 rounded-xl min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="description"
          placeholder="Description"
        />
        <button
          className="w-[200px] bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-medium mx-auto"
          type="submit"
        >
          Save
        </button>
      </form>
    </section>
  );
}

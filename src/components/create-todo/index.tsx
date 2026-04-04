import { createTodo } from "@/app/actions/create-todo";

export default function CreateTodo() {
  return (
    <section>
      <h2>Add todo</h2>
      <form action={createTodo}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
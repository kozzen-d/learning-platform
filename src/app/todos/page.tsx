import CreateTodo from "@/components/create-todo";
import DeleteTodoBtn from "@/components/delete-todo-btn";
import { ToggleTodoBtn } from "@/components/toggle-todo";
import { db } from "@/db";
import { todos, users } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";


export default async function Todos() {
  const session = await getServerSession();

  if (!session?.user || !session.user?.email) {
    redirect("/");
  }

  const currentUser = await db.query.users.findFirst({
    where: eq(users.email, session.user.email),
  });

  if (!currentUser) {
    notFound();
  }

  const todoList = await db.query.todos.findMany({
    where: eq(todos.userId, currentUser?.id),
    orderBy: asc(todos.createdAt),
  });

  return (
    <div>
      <CreateTodo />
      <ul className="flex flex-wrap gap-4 p-12">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="border p-4 shadow rounded-2xl min-w-75 flex flex-col items-center"
          >
            <h3 className="font-bold">{todo.title}</h3>
            <p>{todo.description}</p>
            <div className="flex flex-row items-center justify-center p-2 gap-2">
              <DeleteTodoBtn todoId={todo.id} />
              <ToggleTodoBtn todoId={todo.id} status={todo.status} />
            </div>
            <p>{todo.createdAt.toLocaleTimeString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
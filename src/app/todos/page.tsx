import { db } from "@/db";
import { todos, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";

export default async function Todos() {
  const session = await getServerSession();
  console.log("****", session?.user);
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
  });

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
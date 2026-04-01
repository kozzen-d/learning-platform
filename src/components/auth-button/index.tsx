"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button type="button" onClick={() => signIn("google")}>
        Sign in
      </button>
    );
  }
  return (
    <button type="button" onClick={() => signOut()}>
      Sign out
    </button>
  );
}

// claude

// Пример деструктуризации с переименованием
// const user = {
//   data: "Alisher",
//   age: 32,
// };

// const { data: name, age } = user;

// console.log(name);
// console.log(age);
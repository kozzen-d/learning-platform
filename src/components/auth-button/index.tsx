"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        className="hidden lg:block px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md transition-all active:scale-95"
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/profile/my-account" })}
      >
        Sign in
      </button>
    );
  }
  return (
    <button
      className="hidden lg:block px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md transition-all active:scale-95"
      type="button"
      onClick={() => signOut()}
    >
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

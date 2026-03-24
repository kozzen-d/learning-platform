import Link from "next/link";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-4">Profile</h2>

        <Link href="/profile/my-account" className="hover:text-blue-500">
          Account
        </Link>

        <Link href="/profile/my-programs" className="hover:text-blue-500">
          Programs
        </Link>
      </aside>

      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}

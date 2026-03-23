import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-100 flex gap-4 p-4 shadow-md justify-center">
        <Link
          href={"/about/us"}
          className="px-4 py-2 rounded hover:bg-blue-200 transition"
        >
          Us
        </Link>

        <Link
          href={"/about/me"}
          className="px-4 py-2 rounded hover:bg-blue-200 transition"
        >
          Me
        </Link>
      </nav>

      <div className="p-6 flex-1 bg-gray-50">{children}</div>
    </div>
  );
}

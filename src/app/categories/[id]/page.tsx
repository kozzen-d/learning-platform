import Category from "@/types/Category";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CategoryIdPage({ params }: Props) {
  const { id } = await params;

  // Запрос к API
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`,
    {},
  );

  if (!res.ok) return notFound();

  const category: Category = await res.json();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-sm rounded-xl my-10 border border-gray-100">
      <div className="mb-6">
        <Link
          href="/categories"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center gap-2"
        >
          ← Back to list
        </Link>
      </div>

      <div className="mb-8 border-b border-gray-100 pb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          {category.name}
        </h1>
        <p className="mt-2 text-gray-500 flex items-center gap-2">
          ID:
          <span className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-700">
            {category.id}
          </span>
        </p>
      </div>
      
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-50">
        <Image
          src={category.image}
          alt={category.name}
          width={800}
          height={500}
          priority
          unoptimized
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

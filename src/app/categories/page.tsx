import Category from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

export default async function CategoriesPage() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: Category[] = await res.json();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="group block border border-gray-100 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl mb-4 bg-gray-100">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="text-lg font-semibold text-center text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2 wrap-break-word leading-tight h-12 flex items-center justify-center">
              {cat.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

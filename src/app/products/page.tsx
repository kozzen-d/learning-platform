import Product from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group block border border-gray-100 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl mb-4 bg-gray-100">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2 wrap-break-word leading-tight h-12 flex items-center justify-center">
              {product.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

// SERVER COMPONENTS
// SSG - Static Site Generation -  когда один раз генерируется при билде - и дальше не меняется
// SSR - Server Side Rendering - на каждый запрос
// ISR - Incremental Static Regeneration - когда например по таймеру или при определенных условиях
// {next: {revalidate: 60}}

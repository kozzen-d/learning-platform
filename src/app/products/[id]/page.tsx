import Product from "@/types/Product";

import Image from "next/image";

import Link from "next/link";

import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  if (!res.ok) return notFound();

  const product: Product = await res.json();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-sm rounded-xl my-10 border border-gray-100">
      <div className="mb-6">
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center gap-2"
        >
          ← Back to list
        </Link>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
        {product.title}
      </h2>

      <div className="mt-2 flex items-center gap-4"></div>

      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={200}
          priority
          unoptimized
          className="object-contain p-1 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default ProductPage;

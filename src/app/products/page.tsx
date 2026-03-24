import Product from "@/types/Product";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();
  console.log("Hello!");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded-lg shadow max-w-xs"
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// SERVER COMPONENTS
// SSG - Static Site Generation -  когда один раз генерируется при билде - и дальше не меняется
// SSR - Server Side Rendering - на каждый запрос
// ISR - Incremental Static Regeneration - когда например по таймеру или при определенных условиях
// {next: {revalidate: 60}}

import Category from "@/types/Category";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await res.json();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="bg-white p-4 rounded-lg shadow max-w-xs"
          >
            <p className="font-semibold">{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

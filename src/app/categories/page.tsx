import Category from "@/types/Category";
import { CategoryCard } from "@/components/category-card";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: Category[] = await res.json();

  const categoriesList = (
    <ul className="flex flex-wrap gap-5 items-center justify-center ">
      {categories.map((c) => (
        <li key={c.id}>
          <CategoryCard category={c} />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-blue-200 min-h-screen py-6 px-4 md:px-20">
      <h2 className="text-center text-4xl text-white mb-8">Categories</h2>
      {categoriesList}
    </section>
  );
}


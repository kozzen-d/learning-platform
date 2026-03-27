import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap  bg-violet-200 gap-2 items-center justify-center min-h-24">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/categories">Сategories</Link>
      <Link href="/grids">Grids</Link>
      <Link href="/courses">Courses</Link>
    </nav>
  );
}

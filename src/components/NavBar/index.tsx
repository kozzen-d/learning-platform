import Link from "next/link";
import JoinNowButton from "../joinNowButton";
import Logo from "../logo";

export default function NavBar() {
  return (
    // Фиксируем сверху, добавляем размытие фона и легкую тень
    <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-neutral-50 px-6 py-4 flex items-center justify-between min-h-[72px] shadow-sm">
      {/* Логотип платформы */}

      <Link
        href="/about"
        className="text-2xl font-black tracking-tighter text-blue-600 hover:opacity-80 transition-opacity"
      >
        <Logo />
      </Link>

      {/* Ссылки меню */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Profile", href: "/profile" },
          { name: "Products", href: "/products" },
          { name: "Categories", href: "/categories" },
          { name: "Grids", href: "/grids" },
          { name: "Courses", href: "/courses" },
          { name: "Groups", href: "/groups" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group py-2"
          >
            {link.name}
            {/* Анимированная линия подчеркивания при наведении */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Кнопка "Начать" (для баланса композиции) */}

      <Link href="/courses">
        <JoinNowButton />
      </Link>
    </nav>
  );
}

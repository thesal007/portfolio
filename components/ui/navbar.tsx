"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-gray-200 border-b border-outline-variant/60">
      <nav className="max-w-container-max mx-auto px-gutter h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-on-surface"
        >
          DevPortfolio
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-caps text-label-caps font-medium transition-colors ${
                  active
                    ? "text-on-surface underline underline-offset-8 decoration-2 decoration-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          className="bg-blue-500 text-white font-label-caps text-label-caps font-semibold px-5 py-2 rounded-md hover:brightness-110 transition-all"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

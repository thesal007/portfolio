"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Button } from "./button";

export function Navbar() {
  const pathname = usePathname();

  const routes = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav>
      <div className="flex items-center justify-between px-8 py-4 bg-[#0a0a0f] text-white border-b border-[#1a1a1f]">
        <Link href="/" className="text-xl font-bold tracking-tight text-indigo-300">
          DevPortfolio
        </Link>

        <div className="flex items-center space-x-8">
          <Tabs value={pathname} className="w-auto">
            <TabsList variant="line">
              {routes.map((route) => (
                <TabsTrigger
                  key={route.href}
                  value={route.href}
                  className={cn(
                    "text-sm text-white font-medium transition-colors duration-200",
                    pathname === route.href
                      ? "text-indigo-400"
                      : "hover:text-indigo-400"
                  )}
                >
                  <Link href={route.href}>{route.name}</Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button className="bg-indigo-500 text-white hover:bg-indigo-600 rounded-md px-4 py-2 font-semibold">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}

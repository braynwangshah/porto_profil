"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menus = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/dimas/profile" },
    { name: "Portfolio", href: "/dimas/porto" },
  
  ];

  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-2xl shadow-xl shadow-cyan-500/10">

        

        {/* Menu */}
        <nav className="flex items-center gap-1">
          {menus.map((menu) => {
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.name}
                href={menu.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
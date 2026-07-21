"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const time = currentTime
    ? currentTime.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "--:--:--";
  const date = currentTime
    ? currentTime.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Memuat tanggal...";

  const menus = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/dimas/profile" },
    { name: "Portfolio", href: "/dimas/porto" },
  
  ];

  return (
    <header className="fixed bottom-6 left-1/2 z-50 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2">
      <div className="flex items-center justify-center gap-3 max-lg:flex-wrap max-lg:gap-2">
        <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-white/5 px-4 font-mono text-sm font-semibold tabular-nums text-cyan-300 shadow-xl shadow-cyan-500/10 backdrop-blur-2xl">
          {time}
        </div>

        {/* Menu utama */}
        <nav className="flex h-[52px] items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 shadow-xl shadow-cyan-500/10 backdrop-blur-2xl">
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

        <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-white/5 px-4 text-center text-xs font-medium text-gray-200 shadow-xl shadow-cyan-500/10 backdrop-blur-2xl">
          {date}
        </div>
      </div>
    </header>
  );
}

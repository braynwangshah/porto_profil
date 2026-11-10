"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const menus = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/dimas/profile" },
  { name: "Portfolio", href: "/dimas/porto" },
  { name: "CV", href: "/dimas/cv" },
];

const menuList = {
  closed: {},
  open: { transition: { staggerChildren: 0.075, delayChildren: 0.16 } },
};

const menuItem = {
  closed: { opacity: 0, y: 22 },
  open: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const isOpen = openPath !== null && openPath === pathname;

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const time = currentTime
    ? currentTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
    : "--:--:--";
  const date = currentTime
    ? currentTime.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "Memuat tanggal...";
  const animationDuration = reduceMotion ? 0 : 0.72;
  const listVariants = reduceMotion ? { closed: {}, open: {} } : menuList;
  const itemVariants = reduceMotion
    ? { closed: { opacity: 1, y: 0 }, open: { opacity: 1, y: 0 } }
    : menuItem;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dimas-navigation-overlay"
            id="dimas-navigation-overlay"
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: animationDuration, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] overflow-y-auto bg-[#171717] text-[#f1f0ec]"
          >
            <div className="mx-auto flex min-h-full w-full max-w-[1440px] flex-col px-6 pb-7 pt-28 sm:px-12 sm:pb-9 sm:pt-32 lg:px-20">
              <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:mb-10">
                <span>Navigation</span>
                <span>Dimas Iman Ismail</span>
              </div>

              <motion.nav
                aria-label="Main navigation"
                variants={listVariants}
                initial="closed"
                animate="open"
                className="my-auto"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {menus.map((menu, index) => {
                  const active = pathname === menu.href;
                  const dimmed = hoveredIndex !== null && hoveredIndex !== index;

                  return (
                    <motion.div
                      key={menu.href}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className="border-b border-white/15 first:border-t"
                    >
                      <Link
                        href={menu.href}
                        onClick={() => setOpenPath(null)}
                        aria-current={active ? "page" : undefined}
                        className="group flex min-h-[88px] items-center gap-4 py-3 transition-opacity duration-300 sm:min-h-[112px] sm:gap-7 lg:min-h-[128px]"
                        style={{ opacity: dimmed ? 0.36 : 1 }}
                      >
                        <span className={`w-7 shrink-0 pt-2 font-mono text-[10px] tabular-nums sm:w-9 sm:text-xs ${active ? "text-[#d0ff71]" : "text-white/35"}`}>
                          0{index + 1}
                        </span>
                        <span className={`text-[clamp(2.8rem,8vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.065em] transition-transform duration-500 group-hover:translate-x-2 ${active ? "text-white" : "text-white/55 group-hover:text-white"}`}>
                          {menu.name}
                        </span>
                        <span className="ml-auto hidden pr-2 text-xs uppercase tracking-[0.16em] text-white/35 transition-colors group-hover:text-[#d0ff71] sm:block">
                          {active ? "Current page" : "Open page"}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <footer className="mt-10 grid gap-5 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.16em] text-white/40 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-white/30">Local time · Indonesia</p>
                  <p className="mt-2 font-mono text-xs tabular-nums text-white/65">{time}</p>
                </div>
                <p className="sm:text-right">{date}</p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="dimas-navigation-overlay"
        onClick={() => setOpenPath((current) => current === pathname ? null : pathname)}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        transition={{ type: "spring", stiffness: 360, damping: 25 }}
        className="fixed right-5 top-5 z-[100] grid size-[68px] place-items-center rounded-full border border-white/10 bg-[#171717] text-white shadow-[0_12px_36px_rgba(0,0,0,0.24)] transition-colors hover:bg-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0ff71] sm:right-7 sm:top-7 sm:size-[88px] lg:size-[94px]"
      >
        <span className="flex w-6 flex-col items-center gap-[7px]" aria-hidden="true">
          <motion.span
            animate={isOpen ? { y: 3.5, rotate: 45, width: 26 } : { y: 0, rotate: 0, width: 24 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px bg-white"
          />
          <motion.span
            animate={isOpen ? { y: -3.5, rotate: -45, width: 26 } : { y: 0, rotate: 0, width: 24 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px bg-white"
          />
        </span>
      </motion.button>
    </>
  );
}

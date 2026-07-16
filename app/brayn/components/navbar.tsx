"use client";

import ThemeButton from "./themebutton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <h1 className="text-3xl font-black text-indigo-600 dark:text-cyan-400">
          Brayn.
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#beranda" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Beranda
          </a>

          <a href="#about" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Tentang
          </a>

          <a href="#education" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Pendidikan
          </a>

          <a href="#experience" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Pengalaman
          </a>

          <a href="#achievement" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Prestasi
          </a>

          <a href="#portfolio" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Portofolio
          </a>

          <a href="#contact" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Kontak
          </a>
        </nav>

        <ThemeButton />
      </div>
    </header>
  );
}
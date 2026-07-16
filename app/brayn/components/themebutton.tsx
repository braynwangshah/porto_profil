"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-slate-200
        text-slate-700
        transition-all
        duration-300
        hover:scale-110
        dark:bg-slate-800
        dark:text-yellow-400
      "
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
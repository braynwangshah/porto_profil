"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = currentTime
    ? currentTime.toLocaleTimeString("id-ID", {
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
    : "Memuat...";

  return (
    <header className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-2xl shadow-xl shadow-cyan-500/10">

        <span className="font-mono text-lg font-bold text-cyan-300">
          {time}
        </span>

        <div className="h-6 w-px bg-white/10" />

        <span className="text-sm text-gray-300">
          {date}
        </span>

      </div>
    </header>
  );
}
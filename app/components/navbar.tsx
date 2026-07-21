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
  ? new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h12",
    })
      .format(currentTime)
      .replace(/\s?(AM|PM)/i, "")
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
    <header className="fixed bottom-6 left-1/2 z-50 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2">
  <div className="flex items-center justify-center gap-3">

    {/* Logo */}
    <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-white/5 px-5 backdrop-blur-2xl shadow-xl shadow-cyan-500/10">
      <h1 className="text-base font-bold tracking-wide">
        <span className="text-white">Portfolio </span>
        <span className="text-cyan-400">Team</span>
      </h1>
    </div>

    {/* Jam */}
    <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-white/5 px-4 font-mono text-sm font-semibold text-cyan-300 backdrop-blur-2xl shadow-xl shadow-cyan-500/10">
      {time}
    </div>

    {/* Tanggal */}
    <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-white/5 px-4 text-center text-xs font-medium text-gray-200 backdrop-blur-2xl shadow-xl shadow-cyan-500/10">
      {date}
    </div>

  </div>
</header>
  );
}
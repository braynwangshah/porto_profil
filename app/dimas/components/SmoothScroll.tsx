"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";

const SmoothScrollContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      duration: 1.2,
      gestureOrientation: "vertical",
      syncTouch: false,
    });
    let frameId = 0;
    let published = false;

    const raf = (time: number) => {
      if (!published) {
        published = true;
        setLenis(instance);
      }
      instance.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      instance.destroy();
    };
  }, []);

  return <SmoothScrollContext.Provider value={lenis}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

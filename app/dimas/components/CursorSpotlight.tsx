"use client";

import { useEffect, useRef } from "react";

type PointerTarget = { x: number; y: number; active: boolean; initialized: boolean };

export default function CursorSpotlight() {
  const elementRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<PointerTarget>({ x: 0, y: 0, active: false, initialized: false });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = targetRef.current;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 3;
    let previousTime: number | null = null;
    let frameId = 0;
    let lastWrittenX = Number.NaN;
    let lastWrittenY = Number.NaN;
    let lastWrittenAlpha = Number.NaN;
    let hasWrittenPosition = false;

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      target.x = event.clientX;
      target.y = event.clientY;
      target.active = true;
      target.initialized = true;
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) target.active = false;
    };

    const renderFrame = (time: number) => {
      if (document.hidden) return;

      const dt = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (target.initialized) {
        const factor = 1 - Math.exp(-dt * 8);
        if (!hasWrittenPosition) {
          currentX = target.x;
          currentY = target.y;
        } else {
          currentX += (target.x - currentX) * factor;
          currentY += (target.y - currentY) * factor;
        }

        if (!hasWrittenPosition || Math.abs(currentX - lastWrittenX) >= 0.1 || Math.abs(currentY - lastWrittenY) >= 0.1) {
          element.style.setProperty("--x", `${currentX}px`);
          element.style.setProperty("--y", `${currentY}px`);
          lastWrittenX = currentX;
          lastWrittenY = currentY;
          hasWrittenPosition = true;
        }

        const alpha = target.active ? 1 : 0;
        if (alpha !== lastWrittenAlpha) {
          element.style.setProperty("--spotlight-alpha", `${alpha}`);
          lastWrittenAlpha = alpha;
        }
      }

      frameId = requestAnimationFrame(renderFrame);
    };

    const startLoop = () => {
      if (frameId || document.hidden) return;
      previousTime = null;
      frameId = requestAnimationFrame(renderFrame);
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
        frameId = 0;
        previousTime = null;
      } else {
        startLoop();
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("visibilitychange", onVisibilityChange);
    startLoop();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <div ref={elementRef} className="cursor-spotlight" aria-hidden="true" />;
}

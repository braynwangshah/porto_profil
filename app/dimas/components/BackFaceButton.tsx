"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function BackFaceButton({ onClick }: { onClick: () => void }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);
  const faceRef = useRef<SVGSVGElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const angleRef = useRef(0);
  const speedRef = useRef(360 / 16);
  const targetSpeedRef = useRef(360 / 16);
  const lastFrameTimeRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, hasPosition: false });
  const reducedMotionRef = useRef(Boolean(reduceMotion));
  const touchRef = useRef(false);
  const pointerDownRef = useRef(false);
  const currentPupilRef = useRef({ x: 0, y: 0 });
  const currentFaceRef = useRef({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const currentMagneticRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);
  const blinkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const targetMagneticRef = useRef({ x: 0, y: 0 });
  const [blinking, setBlinking] = useState(false);
  const [mouthShape, setMouthShape] = useState<"normal" | "smile" | "active">("normal");
  reducedMotionRef.current = Boolean(reduceMotion);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        touchRef.current = true;
        mouseRef.current.hasPosition = false;
        targetMagneticRef.current = { x: 0, y: 0 };
        return;
      }
      if (event.pointerType !== "mouse") return;
      touchRef.current = false;
      mouseRef.current = { x: event.clientX, y: event.clientY, hasPosition: true };
    };

    const animate = (timestamp: number) => {
      frameRef.current = null;
      if (document.hidden) {
        lastFrameTimeRef.current = null;
        return;
      }

      const previousTime = lastFrameTimeRef.current;
      const dt = previousTime === null ? 0 : Math.min((timestamp - previousTime) / 1000, 0.05);
      lastFrameTimeRef.current = timestamp;
      const reduced = reducedMotionRef.current;
      const rect = buttonRef.current?.getBoundingClientRect();

      if (rect && !mouseRef.current.hasPosition && !touchRef.current) {
        mouseRef.current.x = rect.left + rect.width / 2;
        mouseRef.current.y = rect.top + rect.height / 2;
        mouseRef.current.hasPosition = true;
      }

      if (rect && mouseRef.current.hasPosition && !touchRef.current && !reduced) {
        const centerX = rect.left + rect.width / 2 - currentMagneticRef.current.x;
        const centerY = rect.top + rect.height / 2 - currentMagneticRef.current.y;
        const dx = mouseRef.current.x - centerX;
        const dy = mouseRef.current.y - centerY;
        const distance = Math.hypot(dx, dy);
        if (!pointerDownRef.current && distance < 160) {
          const pull = (1 - distance / 160) * 16;
          targetMagneticRef.current = { x: (dx / Math.max(distance, 1)) * pull, y: (dy / Math.max(distance, 1)) * pull };
        } else {
          targetMagneticRef.current = { x: 0, y: 0 };
        }

        const pupilDistance = Math.min(3.5, distance === 0 ? 0 : 3.5);
        const targetPupilX = distance === 0 ? 0 : (dx / distance) * pupilDistance;
        const targetPupilY = distance === 0 ? 0 : (dy / distance) * pupilDistance;
        const pupilEase = 1 - Math.exp(-dt * 16);
        currentPupilRef.current.x += (targetPupilX - currentPupilRef.current.x) * pupilEase;
        currentPupilRef.current.y += (targetPupilY - currentPupilRef.current.y) * pupilEase;
        const pupilX = Math.round(currentPupilRef.current.x * 100) / 100;
        const pupilY = Math.round(currentPupilRef.current.y * 100) / 100;
        const pupilTransform = `translate3d(${pupilX}px, ${pupilY}px, 0)`;
        if (leftPupilRef.current && leftPupilRef.current.style.transform !== pupilTransform) leftPupilRef.current.style.transform = pupilTransform;
        if (rightPupilRef.current && rightPupilRef.current.style.transform !== pupilTransform) rightPupilRef.current.style.transform = pupilTransform;

        const targetFaceX = Math.max(-4, Math.min(4, (dx / Math.max(1, window.innerWidth / 2)) * 4));
        const targetFaceY = Math.max(-4, Math.min(4, (dy / Math.max(1, window.innerHeight / 2)) * 4));
        const targetRotateX = Math.max(-5, Math.min(5, (-dy / Math.max(1, rect.height)) * 5));
        const targetRotateY = Math.max(-5, Math.min(5, (dx / Math.max(1, rect.width)) * 5));
        const faceEase = 1 - Math.exp(-dt * 9);
        currentFaceRef.current.x += (targetFaceX - currentFaceRef.current.x) * faceEase;
        currentFaceRef.current.y += (targetFaceY - currentFaceRef.current.y) * faceEase;
        currentFaceRef.current.rotateX += (targetRotateX - currentFaceRef.current.rotateX) * faceEase;
        currentFaceRef.current.rotateY += (targetRotateY - currentFaceRef.current.rotateY) * faceEase;
        if (faceRef.current) {
          const values = currentFaceRef.current;
          const transform = `translate3d(${Math.round(values.x * 100) / 100}px, ${Math.round(values.y * 100) / 100}px, 0) rotateX(${Math.round(values.rotateX * 100) / 100}deg) rotateY(${Math.round(values.rotateY * 100) / 100}deg)`;
          if (faceRef.current.style.transform !== transform) faceRef.current.style.transform = transform;
        }
      } else {
        targetMagneticRef.current = { x: 0, y: 0 };
        const pupilEase = 1 - Math.exp(-dt * 16);
        currentPupilRef.current.x += (0 - currentPupilRef.current.x) * pupilEase;
        currentPupilRef.current.y += (0 - currentPupilRef.current.y) * pupilEase;
        const pupilTransform = `translate3d(${Math.round(currentPupilRef.current.x * 100) / 100}px, ${Math.round(currentPupilRef.current.y * 100) / 100}px, 0)`;
        if (leftPupilRef.current && leftPupilRef.current.style.transform !== pupilTransform) leftPupilRef.current.style.transform = pupilTransform;
        if (rightPupilRef.current && rightPupilRef.current.style.transform !== pupilTransform) rightPupilRef.current.style.transform = pupilTransform;
        const faceEase = 1 - Math.exp(-dt * 9);
        currentFaceRef.current.x += (0 - currentFaceRef.current.x) * faceEase;
        currentFaceRef.current.y += (0 - currentFaceRef.current.y) * faceEase;
        currentFaceRef.current.rotateX += (0 - currentFaceRef.current.rotateX) * faceEase;
        currentFaceRef.current.rotateY += (0 - currentFaceRef.current.rotateY) * faceEase;
        if (faceRef.current) {
          const values = currentFaceRef.current;
          const transform = `translate3d(${Math.round(values.x * 100) / 100}px, ${Math.round(values.y * 100) / 100}px, 0) rotateX(${Math.round(values.rotateX * 100) / 100}deg) rotateY(${Math.round(values.rotateY * 100) / 100}deg)`;
          if (faceRef.current.style.transform !== transform) faceRef.current.style.transform = transform;
        }
      }

      const magneticEase = 1 - Math.exp(-dt * 10);
      currentMagneticRef.current.x += (targetMagneticRef.current.x - currentMagneticRef.current.x) * magneticEase;
      currentMagneticRef.current.y += (targetMagneticRef.current.y - currentMagneticRef.current.y) * magneticEase;
      if (magneticRef.current) {
        const x = Math.round(currentMagneticRef.current.x * 100) / 100;
        const y = Math.round(currentMagneticRef.current.y * 100) / 100;
        const transform = `translate3d(${x}px, ${y}px, 0)`;
        if (magneticRef.current.style.transform !== transform) magneticRef.current.style.transform = transform;
      }

      if (!reduced && ringRef.current) {
        speedRef.current += (targetSpeedRef.current - speedRef.current) * (1 - Math.exp(-dt * 4));
        angleRef.current = (angleRef.current + speedRef.current * dt) % 360;
        const transform = `rotate(${Math.round(angleRef.current * 100) / 100}deg)`;
        if (ringRef.current.style.transform !== transform) ringRef.current.style.transform = transform;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (!document.hidden && frameRef.current === null) frameRef.current = window.requestAnimationFrame(animate);
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
        lastFrameTimeRef.current = null;
      } else {
        lastFrameTimeRef.current = null;
        startLoop();
      }
    };

    const scheduleBlink = () => {
      blinkTimerRef.current = setTimeout(() => {
        setBlinking(true);
        blinkTimerRef.current = setTimeout(() => {
          setBlinking(false);
          scheduleBlink();
        }, 130);
      }, 3000 + Math.random() * 2000);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    touchRef.current = window.matchMedia("(pointer: coarse)").matches;
    startLoop();
    scheduleBlink();
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      lastFrameTimeRef.current = null;
      if (blinkTimerRef.current) clearTimeout(blinkTimerRef.current);
    };
  }, []);

  const pauseMagnet = () => {
    pointerDownRef.current = true;
    targetMagneticRef.current = { x: 0, y: 0 };
    setMouthShape("active");
  };
  const resumeMagnet = () => {
    pointerDownRef.current = false;
    setMouthShape(hoveredRef.current || focusedRef.current ? "smile" : "normal");
  };
  const updateRingSpeed = () => { targetSpeedRef.current = hoveredRef.current || focusedRef.current ? 360 / 7 : 360 / 16; };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="back-face-ring-wrap fixed z-[9999] size-[140px] sm:size-[180px]"
        style={{
          right: "max(12px, calc(clamp(24px, 4vw, 48px) + env(safe-area-inset-right)))",
          bottom: "max(12px, calc(clamp(24px, 4vw, 48px) + env(safe-area-inset-bottom)))",
        }}
      >
        <div ref={magneticRef} className="absolute inset-0">
          <svg ref={ringRef} aria-hidden="true" viewBox="0 0 180 180" className="back-face-ring pointer-events-none absolute inset-0 h-full w-full text-white/70" style={{ willChange: "transform", transformOrigin: "center", transformBox: "fill-box", transition: "color 300ms ease" }}>
            <defs>
              <path id="back-face-circle" d="M90,90 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0" />
            </defs>
            <text fill="currentColor" fontSize="12" letterSpacing="1.5" fontFamily="Arial, Helvetica, sans-serif">
              <textPath href="#back-face-circle" startOffset="0" textLength="402" lengthAdjust="spacing">{t.gallery.faceRing}</textPath>
            </text>
          </svg>
          <motion.button
            ref={buttonRef}
            type="button"
            aria-label={t.gallery.back}
            onPointerDown={pauseMagnet}
            onPointerUp={resumeMagnet}
            onPointerCancel={resumeMagnet}
            onPointerEnter={() => { hoveredRef.current = true; updateRingSpeed(); if (!pointerDownRef.current) setMouthShape("smile"); }}
            onPointerLeave={() => { hoveredRef.current = false; updateRingSpeed(); if (!focusedRef.current && !pointerDownRef.current) setMouthShape("normal"); }}
            onFocus={() => { focusedRef.current = true; updateRingSpeed(); if (!pointerDownRef.current) setMouthShape("smile"); }}
            onBlur={() => { focusedRef.current = false; updateRingSpeed(); if (!hoveredRef.current && !pointerDownRef.current) setMouthShape("normal"); }}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setMouthShape("active"); }}
            onKeyUp={() => setMouthShape(hoveredRef.current || focusedRef.current ? "smile" : "normal")}
            onClick={(event) => { event.preventDefault(); onClick(); }}
            className="group absolute left-1/2 top-1/2 z-[9999] grid size-[88px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-neutral-900/85 text-[#f2f0eb] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:border-[#d0ff71] hover:bg-[#d0ff71] hover:text-[#111110] hover:shadow-[0_0_24px_rgba(208,255,113,0.32)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d0ff71] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111110] sm:size-28"
          >
            <span aria-hidden="true" className="relative block size-14 sm:size-16">
              <svg ref={faceRef} viewBox="0 0 40 40" className="h-full w-full overflow-visible" style={{ willChange: "transform", transformBox: "fill-box", transformOrigin: "center" }}>
                <g className={`origin-center transition-transform duration-100 ${blinking ? "scale-y-[0.08]" : "group-active:scale-y-[0.12] group-hover:scale-105"}`}>
                  <circle cx="12" cy="15" r="7" fill="white" />
                  <circle cx="28" cy="15" r="7" fill="white" />
                  <circle ref={leftPupilRef} cx="12" cy="15" r="2.6" fill="#111110" style={{ willChange: "transform", transformBox: "fill-box", transformOrigin: "center" }} />
                  <circle ref={rightPupilRef} cx="28" cy="15" r="2.6" fill="#111110" style={{ willChange: "transform", transformBox: "fill-box", transformOrigin: "center" }} />
                </g>
                <motion.path
                  d="M12.5 27 Q20 31 27.5 27"
                  animate={{ d: mouthShape === "active" ? "M12.5 27 Q20 28 27.5 27" : mouthShape === "smile" ? "M12.5 27 Q20 36 27.5 27" : "M12.5 27 Q20 31 27.5 27" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.button>
        </div>
      </motion.div>
      <style>{`
        .back-face-ring-wrap:hover .back-face-ring, .back-face-ring-wrap:focus-within .back-face-ring { color: #d0ff71; }
      `}</style>
    </>
  );
}

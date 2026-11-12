"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TransitionEvent } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageProvider";
import LanguageText from "../i18n/LanguageText";
import { useSmoothScroll } from "./SmoothScroll";

type MenuPosition = { x: number; y: number; originX: number; originY: number };

const MENU_WIDTH = 216;
const MENU_HEIGHT = 184;
const VIEWPORT_PADDING = 8;

export default function CustomContextMenu() {
  const { lang, setLang, t } = useLanguage();
  const lenis = useSmoothScroll();
  const [position, setPosition] = useState<MenuPosition | null>(null);
  const [closing, setClosing] = useState(false);
  const [entered, setEntered] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selectedIndexRef = useRef(0);
  const lastTouchTimeRef = useRef(0);

  const closeMenu = useCallback(() => {
    if (!position || closing) return;
    setClosing(true);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setPosition(null);
      setClosing(false);
      closeTimerRef.current = null;
    }, 160);
  }, [closing, position]);

  useEffect(() => {
    const openMenu = (event: MouseEvent) => {
      // Long-press context menus on touch devices retain their native behavior.
      if (("pointerType" in event && event.pointerType === "touch") || Date.now() - lastTouchTimeRef.current < 900) return;
      event.preventDefault();
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setClosing(false);
      setEntered(false);
      setCanGoBack(window.history.length > 1);

      const x = Math.min(event.clientX, window.innerWidth - MENU_WIDTH - VIEWPORT_PADDING);
      const y = Math.min(event.clientY, window.innerHeight - MENU_HEIGHT - VIEWPORT_PADDING);
      setPosition({
        x: Math.max(VIEWPORT_PADDING, x),
        y: Math.max(VIEWPORT_PADDING, y),
        originX: Math.max(0, Math.min(MENU_WIDTH, event.clientX - x)),
        originY: Math.max(0, Math.min(MENU_HEIGHT, event.clientY - y)),
      });
      selectedIndexRef.current = 0;
    };

    const onClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) closeMenu();
    };
    const onTouchStart = () => { lastTouchTimeRef.current = Date.now(); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!position) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const activeIndex = itemRefs.current.findIndex((item) => item === document.activeElement);
        const currentIndex = activeIndex >= 0 ? activeIndex : selectedIndexRef.current;
        selectedIndexRef.current = (currentIndex + (event.key === "ArrowDown" ? 1 : -1) + 4) % 4;
        itemRefs.current[selectedIndexRef.current]?.focus();
      }
    };

    document.addEventListener("contextmenu", openMenu);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", closeMenu, true);
    window.addEventListener("resize", closeMenu);
    const removeLenisScrollListener = lenis?.on("scroll", closeMenu);
    return () => {
      document.removeEventListener("contextmenu", openMenu);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", closeMenu, true);
      window.removeEventListener("resize", closeMenu);
      removeLenisScrollListener?.();
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [canGoBack, closeMenu, position, lang, lenis]);

  useEffect(() => {
    if (!position || closing) return;
    const frame = requestAnimationFrame(() => setEntered(true));
    itemRefs.current[0]?.focus();
    return () => cancelAnimationFrame(frame);
  }, [position, closing]);

  if (!position || typeof document === "undefined") return null;

  const chooseBack = () => {
    if (!canGoBack) return;
    closeMenu();
    window.history.back();
  };
  const chooseReload = () => window.location.reload();
  const chooseLanguage = (language: "en" | "id") => {
    if (lang === language) return;
    setLang(language);
    closeMenu();
  };
  const finishClose = (event: TransitionEvent<HTMLDivElement>) => {
    if (!closing || event.target !== event.currentTarget || event.propertyName !== "opacity") return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
    setPosition(null);
    setClosing(false);
  };

  return createPortal(
    <div
      ref={menuRef}
      role="menu"
      aria-label={t.menu.label}
      onTransitionEnd={finishClose}
      style={{ left: position.x, top: position.y, transformOrigin: `${position.originX}px ${position.originY}px` }}
      className={`fixed z-[2147483647] w-[min(216px,calc(100vw-16px))] rounded-xl border border-white/10 bg-neutral-900/90 p-1.5 text-sm text-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-[opacity,transform] ease-out motion-reduce:transition-opacity motion-reduce:scale-100 ${closing ? "scale-[0.98] opacity-0 duration-100" : entered ? "scale-100 opacity-100 duration-150" : "scale-95 opacity-0 duration-150"}`}
    >
      <button
        ref={(element) => { itemRefs.current[0] = element; }}
        type="button"
        role="menuitem"
        tabIndex={0}
        aria-disabled={!canGoBack}
        onClick={chooseBack}
        className={`flex h-10 w-full items-center gap-3 rounded-lg px-2.5 text-left transition-colors duration-150 motion-reduce:transition-none ${canGoBack ? "hover:bg-[#d0ff71]/15 hover:text-[#d0ff71] focus:bg-[#d0ff71]/15 focus:text-[#d0ff71] focus:outline-none" : "cursor-default opacity-40"}`}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0"><path d="M15.5 10H4.5m0 0 5-5m-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="flex-1"><LanguageText text={t.menu.back} /></span>
        <span className="hidden text-xs text-white/35 sm:inline">Alt + ←</span>
      </button>
      <button
        ref={(element) => { itemRefs.current[1] = element; }}
        type="button"
        role="menuitem"
        tabIndex={-1}
        onClick={chooseReload}
        className="flex h-10 w-full items-center gap-3 rounded-lg px-2.5 text-left transition-colors duration-150 hover:bg-[#d0ff71]/15 hover:text-[#d0ff71] focus:bg-[#d0ff71]/15 focus:text-[#d0ff71] focus:outline-none motion-reduce:transition-none"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0"><path d="M16.2 8A6.5 6.5 0 0 0 5.1 5.2L3.7 6.6M3.7 6.6V3.8m0 2.8h2.8M3.8 12a6.5 6.5 0 0 0 11.1 2.8l1.4-1.4m0 0v2.8m0-2.8h-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="flex-1"><LanguageText text={t.menu.reload} /></span>
        <span className="hidden text-xs text-white/35 sm:inline">Ctrl + R</span>
      </button>
      <div aria-hidden="true" className="my-1.5 border-t border-white/10" />
      <button
        ref={(element) => { itemRefs.current[2] = element; }}
        type="button"
        role="menuitemradio"
        aria-checked={lang === "en"}
        tabIndex={-1}
        onClick={() => chooseLanguage("en")}
        className={`flex h-9 w-full items-center gap-3 rounded-lg px-2.5 text-left transition-colors duration-150 hover:bg-[#d0ff71]/15 hover:text-[#d0ff71] focus:bg-[#d0ff71]/15 focus:text-[#d0ff71] focus:outline-none motion-reduce:transition-none ${lang === "en" ? "text-[#d0ff71]" : ""}`}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" /><path d="M3.5 10h13M10 3c1.8 1.9 2.6 4.2 2.6 7s-.8 5.1-2.6 7c-1.8-1.9-2.6-4.2-2.6-7S8.2 4.9 10 3Z" stroke="currentColor" strokeWidth="1.2" /></svg>
        <span className="flex-1">{t.menu.english}</span>
        {lang === "en" && <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#d0ff71]"><path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </button>
      <button
        ref={(element) => { itemRefs.current[3] = element; }}
        type="button"
        role="menuitemradio"
        aria-checked={lang === "id"}
        tabIndex={-1}
        onClick={() => chooseLanguage("id")}
        className={`flex h-9 w-full items-center gap-3 rounded-lg px-2.5 text-left transition-colors duration-150 hover:bg-[#d0ff71]/15 hover:text-[#d0ff71] focus:bg-[#d0ff71]/15 focus:text-[#d0ff71] focus:outline-none motion-reduce:transition-none ${lang === "id" ? "text-[#d0ff71]" : ""}`}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" /><path d="M3.5 10h13M10 3c1.8 1.9 2.6 4.2 2.6 7s-.8 5.1-2.6 7c-1.8-1.9-2.6-4.2-2.6-7S8.2 4.9 10 3Z" stroke="currentColor" strokeWidth="1.2" /></svg>
        <span className="flex-1">{t.menu.indonesian}</span>
        {lang === "id" && <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#d0ff71]"><path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </button>
    </div>,
    document.body,
  );
}

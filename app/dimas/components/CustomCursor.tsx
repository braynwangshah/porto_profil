"use client";

import { useEffect, useRef } from "react";

const POSITION_SMOOTHING = 12;
const SCALE_SMOOTHING = 14;
const INTERACTIVE_SCALE = 1.8;
const PHOTO_SCALE = 2.2;
const FACE_SCALE = 0;

type CursorTarget = {
  x: number;
  y: number;
  hasMoved: boolean;
  insideWindow: boolean;
  overTextInput: boolean;
  pressed: boolean;
  targetScale: number;
  targetOpacity: number;
};

const INTERACTIVE_SELECTOR = "a, button, [role='button'], [role='menuitem'], [role='menuitemradio']";
const FACE_SELECTOR = ".back-face-ring-wrap";
const PHOTO_SELECTOR = ".cursor-grab, .cursor-grabbing";
const TEXT_INPUT_SELECTOR = "input, textarea, select, [contenteditable='true']";

function getHoverState(target: EventTarget | null, pressed: boolean) {
  const element = target instanceof Element ? target : null;
  const input = element?.closest(TEXT_INPUT_SELECTOR);
  const face = element?.closest(FACE_SELECTOR);
  const photo = element?.closest(PHOTO_SELECTOR);
  const interactive = element?.closest(INTERACTIVE_SELECTOR);

  if (face) return { overTextInput: false, scale: FACE_SCALE, opacity: 1 };
  if (photo) return { overTextInput: false, scale: pressed ? 0.8 : PHOTO_SCALE, opacity: 0.6 };
  if (input) return { overTextInput: true, scale: pressed ? 0.75 : 1, opacity: 1 };
  if (interactive) return { overTextInput: false, scale: pressed ? 0.75 : INTERACTIVE_SCALE, opacity: 1 };
  return { overTextInput: false, scale: pressed ? 0.75 : 1, opacity: 1 };
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<CursorTarget>({
    x: 0,
    y: 0,
    hasMoved: false,
    insideWindow: false,
    overTextInput: false,
    pressed: false,
    targetScale: 1,
    targetOpacity: 1,
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const target = targetRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let currentX = 0;
    let currentY = 0;
    let currentScale = 1;
    let previousTime: number | null = null;
    let frameId: number | null = null;
    let cursorClassAdded = false;
    let lastTransform = "";
    let lastOpacity = "";

    const updateHover = (element: EventTarget | null) => {
      const hover = getHoverState(element, target.pressed);
      target.overTextInput = hover.overTextInput;
      target.targetScale = hover.scale;
      target.targetOpacity = hover.opacity;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.x = event.clientX;
      target.y = event.clientY;
      target.hasMoved = true;
      target.insideWindow = true;
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.insideWindow = true;
      updateHover(event.target);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const nextTarget = event.relatedTarget;
      if (nextTarget === null) {
        target.insideWindow = false;
        target.pressed = false;
        target.overTextInput = false;
        target.targetScale = 1;
        target.targetOpacity = 1;
        return;
      }
      updateHover(nextTarget);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.pressed = true;
      updateHover(event.target);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.pressed = false;
      updateHover(document.elementFromPoint(event.clientX, event.clientY));
    };

    const renderFrame = (time: number) => {
      frameId = null;
      if (document.hidden) return;

      const dt = previousTime === null ? 0 : Math.min(Math.max((time - previousTime) / 1000, 0), 0.05);
      previousTime = time;

      if (target.hasMoved) {
        if (!cursorClassAdded) {
          document.documentElement.classList.add("dimas-custom-cursor");
          cursorClassAdded = true;
          currentX = target.x;
          currentY = target.y;
        } else if (reducedMotion) {
          currentX = target.x;
          currentY = target.y;
        } else {
          const positionEase = 1 - Math.exp(-dt * POSITION_SMOOTHING);
          currentX += (target.x - currentX) * positionEase;
          currentY += (target.y - currentY) * positionEase;
        }

        const scaleEase = reducedMotion ? 1 : 1 - Math.exp(-dt * SCALE_SMOOTHING);
        currentScale += (target.targetScale - currentScale) * scaleEase;
        const x = Math.round(currentX * 100) / 100;
        const y = Math.round(currentY * 100) / 100;
        const scale = Math.round(currentScale * 100) / 100;
        const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;

        if (transform !== lastTransform) {
          cursor.style.transform = transform;
          lastTransform = transform;
        }

        const opacity = target.insideWindow && !target.overTextInput ? target.targetOpacity : 0;
        const opacityValue = `${opacity}`;
        if (opacityValue !== lastOpacity) {
          cursor.style.setProperty("--custom-cursor-opacity", opacityValue);
          lastOpacity = opacityValue;
        }
      }

      frameId = requestAnimationFrame(renderFrame);
    };

    const startLoop = () => {
      if (frameId !== null || document.hidden) return;
      previousTime = null;
      frameId = requestAnimationFrame(renderFrame);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (frameId !== null) cancelAnimationFrame(frameId);
        frameId = null;
        previousTime = null;
      } else {
        startLoop();
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    document.addEventListener("visibilitychange", onVisibilityChange);
    startLoop();

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (cursorClassAdded) document.documentElement.classList.remove("dimas-custom-cursor");
    };
  }, []);

  return <div ref={cursorRef} className="dimas-custom-cursor-dot" aria-hidden="true" />;
}

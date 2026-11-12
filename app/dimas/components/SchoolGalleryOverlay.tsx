"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { createPortal } from "react-dom";
import BackFaceButton from "./BackFaceButton";
import { schoolGalleries } from "../foto";

const schools = [
  { key: "smk-telkom", name: "SMK Telkom Makassar" },
  { key: "prottab", name: "PROTTAB AMT Makassar" },
  { key: "sd-btn-pemda", name: "UPT SPF SD Inpres Unggulan BTN Pemda" },
] as const;

type PhotoPosition = { x: number; y: number; rotation: number; stackRotation: number; width: number; height: number };

export default function SchoolGalleryOverlay({ schoolIndex, onClose, returnFocusRef }: { schoolIndex: number | null; onClose: () => void; returnFocusRef: React.RefObject<HTMLButtonElement | null> }) {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState<PhotoPosition[]>([]);
  const [zOrder, setZOrder] = useState([0, 1, 2, 3, 4]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [landedPhotos, setLandedPhotos] = useState<boolean[]>([]);
  const [closing, setClosing] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const dragOrigin = useRef({ pointerX: 0, pointerY: 0, x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const school = schools[schoolIndex ?? 0];
  const photos = schoolGalleries[school.key];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (landedPhotos.length === photos.length && landedPhotos.length > 0 && landedPhotos.every(Boolean)) {
      setZOrder([4, 3, 2, 1, 0]);
    }
  }, [landedPhotos, photos.length]);

  useEffect(() => {
    if (schoolIndex === null) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousPaddingRight = root.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    setClosing(false);
    setPositions([]);
    setLandedPhotos([]);
    setButtonVisible(false);
    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;
    const maxWidth = Math.min(window.innerWidth < 640 ? 150 : 260, window.innerWidth - 24);
    const maxHeight = Math.max(120, window.innerHeight * 0.38);
    const cols = window.innerWidth < 640 ? 2 : 3;
    const rows = Math.ceil(5 / cols);
    const next = Array.from({ length: 5 }, (_, index) => {
      const image = photos[index];
      const scale = Math.min(maxWidth / image.width, maxHeight / image.height);
      const width = image.width * scale;
      const height = image.height * scale;
      const col = index % cols;
      const row = Math.floor(index / cols);
      const zoneWidth = window.innerWidth / cols;
      const zoneHeight = window.innerHeight / rows;
      const maxX = Math.max(0, Math.min(zoneWidth - width, window.innerWidth - width));
      const maxY = Math.max(0, Math.min(zoneHeight - height, window.innerHeight - height));
      return {
        x: Math.min(window.innerWidth - width, col * zoneWidth + Math.random() * maxX),
        y: Math.min(window.innerHeight - height, row * zoneHeight + Math.random() * maxY),
        rotation: Math.random() * 20 - 10,
        stackRotation: Math.random() * 6 - 3,
        width,
        height,
      };
    });
    setPositions(next);
    setLandedPhotos(Array.from({ length: 5 }, () => false));
    setZOrder([0, 1, 2, 3, 4]);
    setDragging(null);
    if (reduceMotion) setButtonVisible(true);
    else buttonTimerRef.current = setTimeout(() => setButtonVisible(true), 300);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPaddingRight;
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (buttonTimerRef.current) clearTimeout(buttonTimerRef.current);
      setPositions([]);
      setLandedPhotos([]);
      setClosing(false);
      returnFocusRef.current?.focus({ preventScroll: true });
    };
  }, [schoolIndex, returnFocusRef]);

  if (!mounted || schoolIndex === null || !document.body) return null;

  function requestClose() {
    if (closing || closeTimerRef.current) return;
    setClosing(true);
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      onCloseRef.current();
    }, 250);
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>, index: number) => {
    const position = positions[index];
    if (!position || !landedPhotos[index] || closing) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragOrigin.current = { pointerX: event.clientX, pointerY: event.clientY, x: position.x, y: position.y };
    setDragging(index);
    setZOrder((current) => [...current.filter((photoIndex) => photoIndex !== index), index]);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>, index: number) => {
    if (dragging !== index || closing || !containerRef.current) return;
    const { width } = positions[index];
    const height = positions[index].height;
    const x = Math.min(window.innerWidth - width, Math.max(0, dragOrigin.current.x + event.clientX - dragOrigin.current.pointerX));
    const y = Math.min(window.innerHeight - height, Math.max(0, dragOrigin.current.y + event.clientY - dragOrigin.current.pointerY));
    setPositions((current) => current.map((position, photoIndex) => photoIndex === index ? { ...position, x, y } : position));
  };

  return createPortal((
    <>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
        aria-hidden="true" className="pointer-events-none fixed inset-0 z-[120] bg-black/40 backdrop-blur-[6px]"
      />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[121] overflow-hidden"
        role="dialog" aria-modal="true" aria-label={`Galeri foto ${school.name}`}
      >
      {photos.map((photo, index) => {
        const position = positions[index];
        if (!position) return null;
        const isDragging = dragging === index;
        const centerX = window.innerWidth / 2 - position.x - position.width / 2 + (index - 2) * 1.5;
        const centerY = window.innerHeight / 2 - position.y - position.height / 2 + index * 1.5;
        const startRotation = position.stackRotation;
        const landingRotation = position.rotation;
        const staggerDelay = (photos.length - 1 - index) * 0.15;
        return (
          <motion.div
            key={`${school.key}-${index}`}
            initial={reduceMotion
              ? { opacity: 0, scale: 0.96, x: 0, y: 0, rotate: landingRotation }
              : { opacity: 0, scale: 0.6, x: centerX, y: centerY, rotate: startRotation }}
            animate={closing
              ? { opacity: 0, scale: 0.78, x: 0, y: 0, rotate: landingRotation }
              : isDragging
                ? { opacity: 1, scale: 1.045, x: 0, y: 0, rotate: 0, boxShadow: "0 30px 90px rgba(0,0,0,0.75)" }
              : reduceMotion
                ? { opacity: 1, scale: isDragging ? 1.045 : 1, x: 0, y: 0, rotate: isDragging ? 0 : landingRotation }
                : landedPhotos[index]
                  ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: landingRotation, boxShadow: "0 16px 45px rgba(0,0,0,0.48)" }
                : {
                    opacity: [0, 1, 1],
                    scale: [0.6, 1.04, isDragging ? 1.045 : 1],
                    x: [centerX, -Math.sign(centerX || 1) * 5, 0],
                    y: [centerY, -Math.sign(centerY || 1) * 5, 0],
                    rotate: [startRotation, landingRotation + Math.sign(landingRotation - startRotation || 1) * 2, isDragging ? 0 : landingRotation],
                    boxShadow: isDragging
                      ? "0 30px 90px rgba(0,0,0,0.75)"
                      : ["0 8px 20px rgba(0,0,0,0.12)", "0 24px 60px rgba(0,0,0,0.5)", "0 16px 45px rgba(0,0,0,0.48)"],
                  }}
            transition={closing
              ? { duration: 0.25, ease: "easeOut" }
              : reduceMotion
                ? { duration: 0.22, delay: staggerDelay * 0.2, ease: "easeOut" }
                : { duration: 0.72, delay: staggerDelay, ease: [0.22, 1, 0.36, 1], times: [0, 0.84, 1] }}
            onAnimationComplete={() => {
              if (!closing && !landedPhotos[index]) {
                setLandedPhotos((current) => current.map((landed, photoIndex) => photoIndex === index || landed));
              }
            }}
            onPointerDown={(event) => onPointerDown(event, index)}
            onPointerMove={(event) => onPointerMove(event, index)}
            onPointerUp={() => setDragging(null)}
            onPointerCancel={() => setDragging(null)}
            className={`absolute rounded-lg border border-white/20 bg-[#242522] touch-none select-none ${isDragging ? "cursor-grabbing shadow-[0_30px_90px_rgba(0,0,0,0.75)]" : "cursor-grab shadow-[0_16px_45px_rgba(0,0,0,0.48)]"}`}
            style={{ left: position.x, top: position.y, width: position.width, height: position.height, zIndex: isDragging ? 200 : 10 + zOrder.indexOf(index), pointerEvents: landedPhotos[index] && !closing ? "auto" : "none" }}
          >
            <Image src={photo} alt={`Foto ${school.name} ${index + 1}`} width={photo.width} height={photo.height} draggable={false} className="pointer-events-none block h-full w-full rounded-[inherit]" />
          </motion.div>
        );
      })}
        {buttonVisible && <BackFaceButton onClick={requestClose} />}
      </motion.div>
    </>
  ), document.body);
}

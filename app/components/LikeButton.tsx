"use client";

import { useState, useEffect } from "react";

interface LikeButtonProps {
  cardId: string;
}

export default function LikeButton({ cardId }: LikeButtonProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    // Gunakan setTimeout 0ms agar aman dari warning React Compiler
    const timer = setTimeout(() => {
      setIsMounted(true);

      const userLiked = localStorage.getItem(`liked_${cardId}`);
      const storedLikes = localStorage.getItem(`total_likes_${cardId}`);

      if (userLiked === "true") {
        setHasLiked(true);
      }

      if (storedLikes !== null) {
        setLikes(parseInt(storedLikes, 10));
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [cardId]);

  const handleLike = () => {
    let newLikes = likes;

    if (hasLiked) {
      // Batal Like (Kembali ke 0)
      newLikes = Math.max(0, likes - 1);
      setLikes(newLikes);
      setHasLiked(false);

      localStorage.removeItem(`liked_${cardId}`);
      localStorage.setItem(`total_likes_${cardId}`, newLikes.toString());
    } else {
      // Tambah Like (Menjadi 1)
      newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);

      localStorage.setItem(`liked_${cardId}`, "true");
      localStorage.setItem(`total_likes_${cardId}`, newLikes.toString());
    }

    window.dispatchEvent(
      new CustomEvent("team-like-updated", {
        detail: {
          cardId,
          likes: newLikes,
        },
      }),
    );
  };

  // Tampilan awal sebelum browser terhubung (Default angka 0)
  if (!isMounted) {
    return (
      <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-semibold text-gray-400 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <span>0</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center justify-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
        hasLiked
          ? "border border-rose-500/50 bg-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]"
          : "border border-white/10 bg-black/40 text-gray-300 hover:bg-white/10"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={hasLiked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-4 w-4 transition-transform duration-300 ${
          hasLiked ? "scale-110 text-rose-500" : ""
        }`}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
      <span>{likes}</span>
    </button>
  );
}

"use client";

import { useMemo, useState } from "react";
import { X, Trash2, Pencil } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  name: string;
}

interface Comment {
  id: number;
  text: string;
}

export default function CommentModal({
  open,
  onClose,
  name,
}: Props) {
  const storageKey = useMemo(
    () => `comments-${name.toLowerCase()}`,
    [name]
  );

  const [text, setText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const [comments, setComments] = useState<Comment[]>([]);

  // Load komentar setiap modal dibuka
  if (
    open &&
    typeof window !== "undefined" &&
    (comments.length === 0 || editId === null)
  ) {
    const data = localStorage.getItem(storageKey);
    const parsed: Comment[] = data ? JSON.parse(data) : [];

    if (JSON.stringify(parsed) !== JSON.stringify(comments)) {
      queueMicrotask(() => {
        setComments(parsed);
        setText("");
        setEditId(null);
      });
    }
  }

  if (!open) return null;

  const save = (data: Comment[]) => {
    setComments(data);
    localStorage.setItem(storageKey, JSON.stringify(data));

    window.dispatchEvent(
      new CustomEvent("team-comment-updated")
    );
  };

  const addComment = () => {
    if (!text.trim()) return;

    if (editId !== null) {
      const updated = comments.map((item) =>
        item.id === editId
          ? { ...item, text }
          : item
      );

      save(updated);
      setEditId(null);
    } else {
      save([
        ...comments,
        {
          id: Date.now(),
          text,
        },
      ]);
    }

    setText("");
  };

  const deleteComment = (id: number) => {
    save(comments.filter((item) => item.id !== id));
  };

  const editComment = (item: Comment) => {
    setEditId(item.id);
    setText(item.text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-[#171717] p-6">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Komentar {name}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Input */}
        <div className="flex gap-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tulis komentar..."
            className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
          />

          <button
            onClick={addComment}
            className="rounded-xl bg-cyan-500 px-5 font-semibold text-black"
          >
            {editId !== null ? "Update" : "Kirim"}
          </button>
        </div>

        {/* List */}
        <div className="mt-6 max-h-80 space-y-3 overflow-y-auto">

          {comments.length === 0 && (
            <p className="text-gray-400">
              Belum ada komentar.
            </p>
          )}

          {comments.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white/5 p-4"
            >
              <div className="flex items-start justify-between gap-4">

                <p className="flex-1">
                  {item.text}
                </p>

                <div className="flex gap-2">

                  <button
                    onClick={() => editComment(item)}
                    className="text-yellow-400"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deleteComment(item.id)}
                    className="text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: sambungkan ke API route / layanan email (Resend, Formspree, dll)
    // Untuk sekarang cuma menampilkan pesan sukses di UI.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Animasi */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-down {
          opacity: 0;
          animation: fadeInDown 0.7s ease-out forwards;
        }
        .anim-fade-up {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>

      {/* Navbar - konsisten dengan halaman lain */}
      <nav className="anim-fade-down flex items-center justify-between px-6 py-6 md:px-16">
        <span className="text-xl font-light tracking-[0.2em]">YOURNAME</span>

        <ul className="hidden gap-8 text-sm font-light tracking-wide text-neutral-300 md:flex">
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            <Link href="/profile">Home</Link>
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            <Link href="/profile">About</Link>
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            <Link href="/porto">Portfolio</Link>
          </li>
          <li className="cursor-pointer text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            Contact
          </li>
        </ul>

        <button className="flex flex-col gap-1.5 md:hidden" aria-label="Open menu">
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-4 bg-white" />
        </button>
      </nav>

      {/* Page header */}
      <section className="px-6 pb-8 pt-6 md:px-16 md:pb-12 md:pt-10">
        <p
          className="anim-fade-up mb-3 text-xs font-light tracking-[0.4em] text-neutral-400 md:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          GET IN TOUCH
        </p>
        <h1
          className="anim-fade-up max-w-xl text-4xl font-light leading-tight md:text-6xl"
          style={{ animationDelay: "0.2s" }}
        >
          Mari <span className="font-semibold text-white">Berbicara</span>
        </h1>
        <p
          className="anim-fade-up mt-5 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-base"
          style={{ animationDelay: "0.3s" }}
        >
          Ada project atau ide yang ingin didiskusikan? Kirim pesan atau
          hubungi saya langsung lewat kontak di bawah.
        </p>
      </section>

      {/* Content: info + form */}
      <section className="grid gap-12 px-6 pb-24 md:grid-cols-2 md:gap-16 md:px-16">
        {/* Info kontak */}
        <div
          className="anim-fade-up space-y-8"
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <p className="text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
              Email
            </p>
            <a
              href="mailto:hello@yourname.com"
              className="mt-2 inline-block text-lg font-light text-white transition duration-300 hover:text-neutral-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              dillmks23@yourname.com
            </a>
          </div>

          <div>
            <p className="text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
              Telepon
            </p>
            <a
              href="tel:+6281234567890"
              className="mt-2 inline-block text-lg font-light text-white transition duration-300 hover:text-neutral-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              +62 812-3456-7890
            </a>
          </div>

          <div>
            <p className="text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
              Lokasi
            </p>
            <p className="mt-2 text-lg font-light text-white">
              Makassar, Indonesia
            </p>
          </div>

          <div>
            <p className="text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
              Sosial Media
            </p>
            <div className="mt-3 flex gap-5">
              <a
                href="#"
                aria-label="GitHub"
                className="text-neutral-400 transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-neutral-400 transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-neutral-400 transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.86.62 19.1.32 18.22.12 16.95.06 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Form kontak */}
        <div
          className="anim-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {submitted ? (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 text-center">
              <p className="text-lg font-medium text-white">
                Pesan terkirim!
              </p>
              <p className="mt-2 text-sm font-light text-neutral-400">
                Terima kasih sudah menghubungi, saya akan balas secepatnya.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-neutral-600 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:border-white"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama kamu"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-600 transition duration-300 focus:border-white focus:outline-none focus:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@kamu.com"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-600 transition duration-300 focus:border-white focus:outline-none focus:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-light uppercase tracking-[0.3em] text-neutral-500">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Ceritakan project atau ide kamu..."
                  className="w-full resize-none rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-600 transition duration-300 focus:border-white focus:outline-none focus:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
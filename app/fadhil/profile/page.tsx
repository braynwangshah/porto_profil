import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="relative w-full bg-black text-white">
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animasi fade-in, didefinisikan sekali di sini */}
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
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .star {
          position: absolute;
          border-radius: 9999px;
          background: white;
          animation: twinkle 3s ease-in-out infinite;
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .anim-bounce {
          animation: bounceDown 2s ease-in-out infinite;
        }
      `}</style>

      {/* Bintang berkelip tersebar di background */}
      <div className="absolute inset-0 z-[1]">
        <span className="star h-[2px] w-[2px]" style={{ top: "12%", left: "20%", animationDelay: "0s" }} />
        <span className="star h-[3px] w-[3px]" style={{ top: "22%", left: "45%", animationDelay: "0.5s" }} />
        <span className="star h-[2px] w-[2px]" style={{ top: "8%", left: "68%", animationDelay: "1s" }} />
        <span className="star h-[2px] w-[2px]" style={{ top: "35%", left: "12%", animationDelay: "1.5s" }} />
        <span className="star h-[3px] w-[3px]" style={{ top: "15%", left: "85%", animationDelay: "0.8s" }} />
        <span className="star h-[2px] w-[2px]" style={{ top: "48%", left: "30%", animationDelay: "2s" }} />
        <span className="star h-[2px] w-[2px]" style={{ top: "6%", left: "40%", animationDelay: "1.2s" }} />
        <span className="star h-[3px] w-[3px]" style={{ top: "28%", left: "75%", animationDelay: "0.3s" }} />
        <span className="star h-[2px] w-[2px]" style={{ top: "40%", left: "90%", animationDelay: "1.7s" }} />
        <span className="star h-[2px] w-[2px]" style={{ top: "18%", left: "5%", animationDelay: "2.3s" }} />
      </div>

      {/* Background image */}
      <Image
        src="/images/background.avif"
        alt="Crescent moon on a dark night sky"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay, stronger on the left so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <nav className="anim-fade-down flex items-center justify-between px-6 py-6 md:px-16">
          <span className="text-xl font-light tracking-[0.2em]">
            YOURNAME
          </span>

          <ul className="hidden gap-8 text-sm font-light tracking-wide text-neutral-300 md:flex">
            <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">Home</li>
            <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">About</li>
            <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
              <Link href="/porto">Portfolio</Link>
            </li>
            <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile menu button (icon only, hook up state if you need it to open) */}
          <button className="flex flex-col gap-1.5 md:hidden" aria-label="Open menu">
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-4 bg-white" />
          </button>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center px-6 md:px-16">
          <p
            className="anim-fade-up mb-3 text-xs font-light tracking-[0.4em] text-neutral-400 md:text-sm"
            style={{ animationDelay: "0.1s" }}
          >
            WELCOME!
          </p>

          <h1
            className="anim-fade-up max-w-xl text-4xl font-light leading-tight md:text-6xl"
            style={{ animationDelay: "0.25s" }}
          >
            I am{" "}
            <span className="font-semibold text-white">Web Designer</span>
          </h1>

          <p
            className="anim-fade-up mt-5 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-base"
            style={{ animationDelay: "0.4s" }}
          >
            Saya membuat website yang bersih, tenang, dan fokus pada
            pengalaman pengguna — seperti langit malam yang sunyi.
          </p>

          <div
            className="anim-fade-up mt-10 flex gap-4"
            style={{ animationDelay: "0.55s" }}
          >
            <Link href="/contact">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-95">
                Hire Me
              </button>
            </Link>
            <Link href="/porto">
              <button className="rounded-full border border-neutral-500 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95">
                View Work
              </button>
            </Link>
          </div>

          {/* Social icons */}
          <div
            className="anim-fade-up mt-8 flex gap-5"
            style={{ animationDelay: "0.7s" }}
          >
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

        {/* Scroll indicator - klik untuk turun ke About */}
        <a
          href="#about"
          className="anim-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 transition hover:text-white"
          aria-label="Scroll ke bawah"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0-6-6m6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>

    {/* About Me section */}
    <section
      id="about"
      className="bg-gradient-to-b from-black to-neutral-800 px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-light tracking-[0.4em] text-neutral-400 md:text-sm">
          ABOUT ME
        </p>
        <h2 className="text-3xl font-light leading-tight md:text-5xl">
          Sedikit tentang <span className="font-semibold text-white">saya</span>
        </h2>

        <p className="mt-6 text-sm font-light leading-relaxed text-neutral-300 md:text-base">
          Halo! Saya seorang web designer yang senang membangun antarmuka
          yang bersih, fungsional, dan enak dipakai. Saya percaya desain
          yang baik itu tidak berisik — ia membantu orang menyelesaikan apa
          yang mereka butuhkan tanpa terasa rumit.
        </p>
        <p className="mt-4 text-sm font-light leading-relaxed text-neutral-300 md:text-base">
          Di luar mendesain, saya suka mengeksplorasi tren visual baru,
          belajar hal teknis seperti front-end development, dan sesekali
          memandangi langit malam untuk cari inspirasi.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold text-white md:text-3xl">3+</p>
            <p className="mt-1 text-xs font-light text-neutral-400 md:text-sm">
              Tahun Pengalaman
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white md:text-3xl">20+</p>
            <p className="mt-1 text-xs font-light text-neutral-400 md:text-sm">
              Project Selesai
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white md:text-3xl">15+</p>
            <p className="mt-1 text-xs font-light text-neutral-400 md:text-sm">
              Klien Puas
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white md:text-3xl">5</p>
            <p className="mt-1 text-xs font-light text-neutral-400 md:text-sm">
              Tools Dikuasai
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
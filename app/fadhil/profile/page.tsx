import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="w-full bg-white">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatCard {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .anim-fade-down{
          opacity:0;
          animation:fadeInDown .8s forwards;
        }

        .anim-fade-up{
          opacity:0;
          animation:fadeInUp .9s forwards;
        }

        .anim-float{
          animation:floatCard 6s ease-in-out infinite;
        }
      `}</style>

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500">
        {/* Blur Clouds */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-16 h-64 w-80 rounded-full bg-white/40 blur-3xl" />

          <div className="absolute right-0 top-32 h-72 w-96 rounded-full bg-white/30 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-72 w-[36rem] rounded-full bg-white/40 blur-3xl" />

          <div className="absolute bottom-10 right-20 h-56 w-80 rounded-full bg-white/30 blur-3xl" />
        </div>

        {/* ================= NAVBAR ================= */}

        <div className="anim-fade-down relative z-30 flex justify-center px-6 pt-6">
          <nav className="flex w-full max-w-3xl items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-xl backdrop-blur-md">
            <span className="text-lg font-bold text-black">
              Fadhil
              <span className="text-sky-500">.</span>
            </span>

            <ul className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
              <li className="hover:text-black transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-black transition cursor-pointer">
                About
              </li>

              <li className="hover:text-black transition cursor-pointer">
                <Link href="/fadhil/porto">Portfolio</Link>
              </li>
            </ul>

            <Link href="/contact">
              <button className="rounded-full bg-slate-900 px-5 py-2 text-white text-sm hover:bg-slate-700 transition">
                Contact
              </button>
            </Link>
          </nav>
        </div>

        {/* ================= HERO ================= */}

        <div className="relative z-20 flex flex-col items-center px-6 pt-16 text-center">
          <p
            className="anim-fade-up mb-4 text-xs uppercase tracking-[0.35em] text-white/80"
            style={{ animationDelay: ".2s" }}
          >
            WELCOME TO MY WEBSITE
          </p>

          <h1
            className="anim-fade-up max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl"
            style={{ animationDelay: ".35s" }}
          >
            Halo, Saya
            <br />
            <span className="text-white">Fadhil Aditya Hery</span>
            <br />
            <span className="text-white/60">Kelas APPS 1</span>
          </h1>

          <p
            className="anim-fade-up mt-8 max-w-xl text-white/90"
            style={{ animationDelay: ".5s" }}
          >
            Saya membangun website modern dengan desain yang bersih, interaktif
            dan responsif menggunakan teknologi terbaru.
          </p>

          {/* ================= FLOATING CARDS ================= */}

          <div className="relative mt-20 hidden h-[420px] w-full max-w-6xl md:block">
            {/* Card 1 */}

            <div className="anim-float absolute left-0 top-20 w-64 rotate-[-18deg] overflow-hidden rounded-3xl bg-white shadow-2xl transition duration-500 hover:-translate-y-5 hover:rotate-[-12deg]">
              <div className="h-44 w-full flex items-center justify-center bg-slate-200">
                <span className="text-sm text-slate-400">Tambahkan Gambar</span>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Coding
                </p>

                <h3 className="mt-2 text-xl font-bold">Web Development</h3>
              </div>
            </div>

            {/* Card 2 */}

            <div
              className="anim-float absolute left-36 top-4 w-72 rotate-[-10deg] overflow-hidden rounded-3xl bg-white shadow-2xl transition duration-500 hover:-translate-y-6"
              style={{
                animationDelay: ".3s",
              }}
            >
              <div className="h-52 w-full flex items-center justify-center bg-slate-200">
                <span className="text-sm text-slate-400">Tambahkan Gambar</span>
              </div>

              <div className="p-6">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
                  React
                </span>

                <h3 className="mt-4 text-2xl font-bold">Modern Website</h3>

                <p className="mt-2 text-sm text-slate-500">
                  Next.js • Tailwind CSS
                </p>
              </div>
            </div>

            {/* CENTER */}

            <div className="anim-float absolute left-1/2 top-0 z-20 w-80 -translate-x-1/2 overflow-hidden rounded-[32px] bg-white shadow-[0_35px_70px_rgba(0,0,0,.25)] transition duration-500 hover:-translate-y-8">
              <div className="h-64 w-full flex items-center justify-center bg-slate-200">
                <span className="text-base font-medium text-slate-400">
                  Featured Image
                </span>
              </div>

              <div className="space-y-4 p-7">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
                  Featured Project
                </span>

                <h2 className="text-3xl font-bold text-slate-900">UI Design</h2>

                <p className="text-slate-500">
                  Designing beautiful digital experiences for modern brands.
                </p>

                <button className="rounded-full bg-slate-900 px-5 py-3 text-white">
                  View Project →
                </button>
              </div>
            </div>

            {/* Card 4 */}

            <div
              className="anim-float absolute right-36 top-4 z-10 w-72 rotate-[10deg] overflow-hidden rounded-3xl bg-white shadow-2xl transition duration-500 hover:-translate-y-6"
              style={{
                animationDelay: ".5s",
              }}
            >
              <div className="h-52 w-full flex items-center justify-center bg-slate-200">
                <span className="text-sm text-slate-400">Tambahkan Gambar</span>
              </div>

              <div className="p-6">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
                  Design
                </span>

                <h3 className="mt-4 text-2xl font-bold">Creative UI</h3>

                <p className="mt-2 text-sm text-slate-500">Figma • Adobe XD</p>
              </div>
            </div>

            {/* Card 5 */}

            <div
              className="anim-float absolute right-0 top-20 w-64 rotate-[18deg] overflow-hidden rounded-3xl bg-white shadow-2xl transition duration-500 hover:-translate-y-5 hover:rotate-[12deg]"
              style={{
                animationDelay: ".8s",
              }}
            >
              <div className="h-44 w-full flex items-center justify-center bg-slate-200">
                <span className="text-sm text-slate-400">Tambahkan Gambar</span>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Portfolio
                </p>

                <h3 className="mt-2 text-xl font-bold">Creative Works</h3>
              </div>
            </div>
          </div>

          {/* Mobile */}

          <div className="mt-16 md:hidden">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex h-44 w-full items-center justify-center bg-slate-200">
                <span className="text-slate-400">Tambahkan Gambar</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">Modern Web Design</h3>

                <p className="mt-2 text-slate-500">
                  Responsive, Clean & Interactive.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}

          <p
            className="anim-fade-up mt-24 max-w-xl text-center text-sm font-medium text-white/90 md:text-base"
            style={{ animationDelay: ".8s" }}
          >
            Semua tentang saya, project, pengalaman, dan cara menghubungi saya
            tersedia dalam satu tempat.
          </p>

          <Link href="/contact">
            <button
              className="anim-fade-up mt-7 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-900 shadow-xl transition hover:scale-105 hover:bg-slate-100"
              style={{ animationDelay: "1s" }}
            >
              Hubungi Saya →
            </button>
          </Link>

          {/* Scroll */}

          <div className="mt-16 animate-bounce text-white/70">
            ↓ Scroll Down
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-20 md:grid-cols-2">
            {/* LEFT */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Membangun Website
                <br />
                yang Modern &
                <br />
                Menarik.
              </h2>

              <p className="mt-8 leading-8 text-slate-600">
                Halo! Saya adalah seorang UI/UX Designer dan Front-End Developer
                yang fokus membuat website modern, minimalis, responsif, dan
                mudah digunakan. Saya menyukai proses mengubah ide menjadi
                pengalaman digital yang menarik menggunakan Next.js, React,
                Tailwind CSS, dan Figma.
              </p>

              <Link href="/porto">
                <button className="mt-10 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
                  Lihat Portfolio
                </button>
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
                <p className="text-5xl font-bold text-sky-500">20+</p>

                <p className="mt-3 text-slate-500">
                  Project
                  <br />
                  Completed
                </p>
              </div>

              <div className="rounded-3xl bg-slate-900 p-8 text-white">
                <p className="text-5xl font-bold">3+</p>

                <p className="mt-3 text-white/70">
                  Years
                  <br />
                  Experience
                </p>
              </div>

              <div className="rounded-3xl bg-sky-500 p-8 text-white">
                <p className="text-5xl font-bold">15+</p>

                <p className="mt-3 text-white/80">
                  Happy
                  <br />
                  Clients
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
                <p className="text-5xl font-bold text-slate-900">5+</p>

                <p className="mt-3 text-slate-500">
                  Tools
                  <br />
                  Mastered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Teknologi yang Saya Gunakan
          </h2>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "TypeScript",
              "JavaScript",
              "Figma",
              "Photoshop",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="bg-slate-900 px-6 py-28 text-center text-white">
        <h2 className="text-4xl font-bold md:text-5xl">
          Mari Bekerja Bersama.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Saya terbuka untuk project freelance, website perusahaan, landing
          page, dashboard, maupun kolaborasi lainnya.
        </p>

        <Link href="/contact">
          <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Contact Me
          </button>
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[170px]" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <h1 className="text-3xl font-extrabold">
            Portfolio{" "}
            <span className="text-cyan-400">
              Team
            </span>
          </h1>

          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Next.js • Tailwind CSS
          </span>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pt-24 text-center">

        <h1 className="text-6xl font-black leading-tight lg:text-7xl">
          Meet Our
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Development Team
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Pilih anggota tim untuk melihat profile, portfolio,
          maupun contact yang telah dibuat menggunakan
          Next.js dan Tailwind CSS.
        </p>

      </section>

      {/* Cards */}
      <section className="relative z-10 mx-auto mt-20 flex max-w-7xl flex-wrap justify-center gap-10 px-8 pb-24">

        {/* ================= Brayn ================= */}
        <div className="group w-80 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:bg-white/10">

          <div className="pt-10">
            <img
              src="/brayn.jpg"
              alt="Brayn"
              className="mx-auto h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_35px_rgba(34,211,238,.35)] transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="px-8 pt-8 text-center">
            <h2 className="text-3xl font-bold">
              Brayn
            </h2>

            <p className="mt-3 text-gray-400">
              Full Stack Developer
            </p>
          </div>

          <div className="p-8">
            <Link
              href="/brayn"
              className="block rounded-2xl bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
            >
              Masuk CV
            </Link>
          </div>

        </div>

        {/* ================= Dimas ================= */}
        <div className="group w-80 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-green-400/50 hover:bg-white/10">

          <div className="pt-10">
            <img
              src="/fotodimas.png"
              alt="Dimas"
              className="mx-auto h-40 w-40 rounded-full border-4 border-green-400 object-cover shadow-[0_0_35px_rgba(74,222,128,.35)] transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="px-8 pt-8 text-center">
            <h2 className="text-3xl font-bold">
              Dimas
            </h2>

            <p className="mt-3 text-gray-400">
              UI / UX Designer
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-8">

            <Link
              href="/dimas/profile"
              className="rounded-2xl bg-green-500 py-3 text-center font-semibold transition hover:bg-green-400"
            >
              Profile
            </Link>

            <Link
              href="/dimas/porto"
              className="rounded-2xl border border-green-500 py-3 text-center font-semibold transition hover:bg-green-500"
            >
              Portfolio
            </Link>

          </div>

        </div>

        {/* ================= Fadhil ================= */}
        <div className="group w-80 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-purple-400/50 hover:bg-white/10">

          <div className="pt-10">
            <img
              src="/fadhil.jpg"
              alt="Fadhil"
              className="mx-auto h-40 w-40 rounded-full border-4 border-purple-400 object-cover shadow-[0_0_35px_rgba(168,85,247,.35)] transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="px-8 pt-8 text-center">
            <h2 className="text-3xl font-bold">
              Fadhil
            </h2>

            <p className="mt-3 text-gray-400">
              Frontend Developer
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 p-8">

            <Link
              href="/fadhil/profile"
              className="rounded-2xl bg-purple-500 py-3 text-center text-sm font-semibold transition hover:bg-purple-400"
            >
              Profile
            </Link>

            <Link
              href="/fadhil/porto"
              className="rounded-2xl border border-purple-500 py-3 text-center text-sm font-semibold transition hover:bg-purple-500"
            >
              Porto
            </Link>

            <Link
              href="/fadhil/contact"
              className="rounded-2xl border border-purple-500 py-3 text-center text-sm font-semibold transition hover:bg-purple-500"
            >
              Contact
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
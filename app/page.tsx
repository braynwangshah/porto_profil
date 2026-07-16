import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-slate-800 px-12 py-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          Portofolio Team
        </h1>

        <p className="text-gray-400">
          Next.js + Tailwind CSS
        </p>
      </nav>

      {/* Hero */}
      <section className="mt-16 text-center">
        <h1 className="text-5xl font-bold">
          Welcome
        </h1>

        <p className="mt-4 text-gray-400">
          Pilih profile yang ingin dikunjungi
        </p>
      </section>

      {/* Cards */}
      <section className="mt-16 flex flex-wrap justify-center gap-10">

        {/* ================= Brayn ================= */}
        <div className="w-80 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

          <img
            src="/brayn.jpg"
            className="mx-auto mt-8 h-40 w-40 rounded-full border-4 border-cyan-400 object-cover"
            alt="Brayn"
          />

          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold">
              Brayn
            </h2>

            <p className="mt-2 text-gray-400">
              Full Stack Developer
            </p>
          </div>

          <div className="p-8">
            <Link
              href="/brayn"
              className="block rounded-xl bg-cyan-500 py-3 text-center font-medium transition hover:bg-cyan-600"
            >
              Masuk CV
            </Link>
          </div>

        </div>

        {/* ================= Dimas ================= */}
        <div className="w-80 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-green-400/50">

          <img
            src="/dimas.jpg"
            className="mx-auto mt-8 h-40 w-40 rounded-full border-4 border-green-400 object-cover"
            alt="Dimas"
          />

          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold">
              Dimas
            </h2>

            <p className="mt-2 text-gray-400">
              UI / UX Designer
            </p>
          </div>

          <div className="flex gap-3 p-8">

            <Link
              href="/dimas/profile"
              className="flex-1 rounded-xl bg-green-500 py-3 text-center font-medium transition hover:bg-green-600"
            >
              Profile
            </Link>

            <Link
              href="/dimas/porto"
              className="flex-1 rounded-xl border border-green-500 py-3 text-center font-medium transition hover:bg-green-500"
            >
              Portofolio
            </Link>

          </div>

        </div>

        {/* ================= Fadhil ================= */}
        <div className="w-80 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-400/50">

          <img
            src="/fadhil.jpg"
            className="mx-auto mt-8 h-40 w-40 rounded-full border-4 border-purple-400 object-cover"
            alt="Fadhil"
          />

          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold">
              Fadhil
            </h2>

            <p className="mt-2 text-gray-400">
              Frontend Developer
            </p>
          </div>

          <div className="flex gap-3 p-8">

            <Link
              href="/fadhil/profile"
              className="flex-1 rounded-xl bg-purple-500 py-3 text-center font-medium transition hover:bg-purple-600"
            >
              Profile
            </Link>

            <Link
              href="/fadhil/porto"
              className="flex-1 rounded-xl border border-purple-500 py-3 text-center font-medium transition hover:bg-purple-500"
            >
              Portofolio
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
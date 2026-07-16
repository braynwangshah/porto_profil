import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          Portofolio Team
        </h1>

        <p className="text-gray-400">
          Next.js + Tailwind CSS
        </p>
      </nav>

      {/* Hero */}
      <section className="text-center mt-16">
        <h1 className="text-5xl font-bold">
          Welcome
        </h1>

        <p className="mt-4 text-gray-400">
          Pilih profile yang ingin dikunjungi
        </p>
      </section>

      {/* Card */}
      <section className="mt-16 flex justify-center gap-10 flex-wrap">

        {/* Brayn */}
        <div className="w-80 rounded-3xl bg-slate-900 shadow-lg hover:scale-105 duration-300">

          <img
            src="/brayn.jpg"
            className="w-40 h-40 rounded-full mx-auto mt-8 border-4 border-cyan-400 object-cover"
            alt="Brayn"
          />

          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold">
              Brayn
            </h2>

            <p className="text-gray-400 mt-2">
              Full Stack Developer
            </p>
          </div>

          <div className="flex gap-3 p-8">

            <Link
        href="/brayn"
        className="flex-1 rounded-xl bg-cyan-500 py-3 text-center hover:bg-cyan-600"
    >
            Masuk CV
            </Link>

          </div>

        </div>

        {/* Dimas */}
        <div className="w-80 rounded-3xl bg-slate-900 shadow-lg hover:scale-105 duration-300">

          <img
            src="/dimas.jpg"
            className="w-40 h-40 rounded-full mx-auto mt-8 border-4 border-green-400 object-cover"
            alt="Dimas"
          />

          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold">
              Dimas
            </h2>

            <p className="text-gray-400 mt-2">
              UI / UX Designer
            </p>
          </div>

          <div className="flex gap-3 p-8">

            <Link
              href="/dimas/profile"
              className="flex-1 rounded-xl bg-green-500 py-3 text-center hover:bg-green-600"
            >
              Profile
            </Link>

            <Link
              href="/dimas/porto"
              className="flex-1 rounded-xl border border-green-500 py-3 text-center hover:bg-green-500"
            >
              Portofolio
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}
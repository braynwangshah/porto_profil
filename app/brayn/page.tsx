import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Achievement from "./components/achievement";
import Portofolio from "./components/portofolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

interface Proyek {
  id: number;
  judul: string;
  teknologi: string;
  selesai: boolean;
}

export default async function BraynPage() {
  // Mengambil data dari API buatan sendiri
  const response = await fetch("http://localhost:3000/api/proyek", {
    cache: "no-store",
  });

  const daftarProyek: Proyek[] = await response.json();

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-500">
      <Navbar />

      <Hero />

      <About />

      <Education />

      <Experience />

      <Achievement />

      {/* Portfolio lama tetap ada */}
      <Portofolio />

      {/* Data dari API /api/proyek */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500">
              API Projects
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Proyek Saya
            </h2>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Data proyek ini diambil dari API buatan sendiri menggunakan
              Next.js Route Handler.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {daftarProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-400 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
                    #{proyek.id}
                  </span>

                  <span
                    className={
                      proyek.selesai
                        ? "text-xs font-medium text-green-500"
                        : "text-xs font-medium text-yellow-500"
                    }
                  >
                    {proyek.selesai
                      ? "Selesai"
                      : "Dalam Pengembangan"}
                  </span>
                </div>

                <h3 className="text-xl font-bold">
                  {proyek.judul}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Teknologi: {proyek.teknologi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* API Projects */}
<section className="px-6 py-16">
  <div className="mx-auto max-w-6xl">

    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500">
        My Projects
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
        Proyek Saya
      </h2>

      <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
        Daftar proyek yang diambil langsung dari API buatan sendiri
        menggunakan Next.js Route Handler.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {daftarProyek.map((proyek) => (
        <div
          key={proyek.id}
          className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-500/40"
        >
          {/* Nomor & Status */}
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
              #{proyek.id}
            </span>

            <span
              className={
                proyek.selesai
                  ? "rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500"
                  : "rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500"
              }
            >
              {proyek.selesai
                ? "Selesai"
                : "Dalam Pengembangan"}
            </span>
          </div>

          {/* Judul */}
          <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white">
            {proyek.judul}
          </h3>

          {/* Teknologi */}
          <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {proyek.teknologi}
          </p>

          {/* Badge API */}
          <div className="mt-5 border-t border-slate-200 pt-4 dark:border-white/10">
            <span className="text-xs font-medium text-slate-400">
              Data dari API • Next.js
            </span>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      <Contact />

      <Footer />
    </main>
  );
}
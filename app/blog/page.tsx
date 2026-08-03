import Link from "next/link";
import Navbar from "@/app/components/navbar";

interface Artikel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function HalamanBlog() {
  const respon = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const daftarArtikel: Artikel[] = await respon.json();
  const featuredPost = daftarArtikel[0];
  const regularPosts = daftarArtikel.slice(1);

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      {/* Background Decorators */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-tr from-cyan-500/15 to-purple-500/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        {/* Navigation Back */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Blog & Wawasan
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Kumpulan <span className="bg-gradient-to-r from-cyan-400 to-sky-200 bg-clip-text text-transparent">Artikel</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Eksplorasi seluruh artikel yang di-fetch secara real-time dari API JSONPlaceholder menggunakan fitur Fetch Data bawaan Next.js App Router.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-white/20">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Total Artikel</p>
            <div className="mt-3 flex items-baseline justify-between">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400">{daftarArtikel.length}</h2>
              <span className="text-xs text-slate-500">Postings</span>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-white/20">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Sumber Data</p>
            <h2 className="mt-3 text-lg font-semibold text-slate-200">JSONPlaceholder API</h2>
            <p className="mt-1 text-xs text-slate-500">REST Endpoints</p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-white/20">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Framework</p>
            <h2 className="mt-3 text-lg font-semibold text-slate-200">Next.js App Router</h2>
            <p className="mt-1 text-xs text-slate-500">Server Component</p>
          </div>
        </div>

        {/* Featured Post (Artikel Utama) */}
        {featuredPost && (
          <div className="mb-12">
            <article className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition duration-500 hover:border-cyan-400/60">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/20">
                  Featured Article
                </span>
                <span className="text-xs text-slate-400">• User #{featuredPost.userId}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold capitalize text-slate-100 transition group-hover:text-cyan-300">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed max-w-4xl line-clamp-3">
                {featuredPost.body}
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Baca Selengkapnya
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((artikel) => (
            <article
              key={artikel.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400 border border-white/5">
                    #{artikel.id}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">User ID: {artikel.userId}</span>
                </div>

                <h2 className="mb-3 text-lg font-bold capitalize leading-snug text-slate-200 line-clamp-2 transition group-hover:text-cyan-300">
                  {artikel.title}
                </h2>

                <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {artikel.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-slate-200 transition duration-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
                  Baca Selengkapnya
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
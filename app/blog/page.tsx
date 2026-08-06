import Link from "next/link";

interface Artikel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function HalamanBlog() {
  const respon = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-store",
    }
  );

  const daftarArtikel: Artikel[] = await respon.json();

  const featuredPost = daftarArtikel[0];
  const regularPosts = daftarArtikel.slice(1);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0F] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/15 to-purple-500/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Back */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
        >
          ← Kembali ke Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            Blog
          </span>

          <h1 className="mt-4 text-5xl font-black">
            Kumpulan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Artikel
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Seluruh artikel di bawah diambil langsung dari API
            JSONPlaceholder menggunakan Fetch Data pada Next.js App Router.
          </p>
        </div>

        {/* Statistik */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Total Artikel</p>
            <h2 className="mt-2 text-4xl font-black text-cyan-400">
              {daftarArtikel.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Sumber Data</p>
            <h2 className="mt-2 text-xl font-bold">
              JSONPlaceholder API
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Framework</p>
            <h2 className="mt-2 text-xl font-bold">
              Next.js App Router
            </h2>
          </div>
        </div>

        {/* Featured */}
        {featuredPost && (
          <div className="mb-12">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/5 p-8 backdrop-blur-xl">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                Featured Article
              </span>

              <Link href={`/blog/${featuredPost.id}`}>
                <h2 className="mt-5 cursor-pointer text-3xl font-bold capitalize transition hover:text-cyan-400">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="mt-5 text-gray-300 line-clamp-3">
                {featuredPost.body}
              </p>

              <div className="mt-8">
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* List Artikel */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((artikel) => (
            <div
              key={artikel.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  #{artikel.id}
                </span>

                <Link href={`/blog/${artikel.id}`}>
                  <h2 className="mt-4 cursor-pointer text-xl font-bold capitalize transition hover:text-cyan-400">
                    {artikel.title}
                  </h2>
                </Link>

                <p className="mt-4 line-clamp-3 text-gray-400">
                  {artikel.body}
                </p>
              </div>

              <Link
                href={`/blog/${artikel.id}`}
                className="mt-6 rounded-xl border border-cyan-500 py-3 text-center font-semibold transition hover:bg-cyan-500 hover:text-black"
              >
                Baca Selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
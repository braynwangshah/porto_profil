import Link from "next/link";

interface Artikel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailArtikel({ params }: Props) {
  const { id } = await params;

  const respon = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  const artikel: Artikel = await respon.json();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0F] text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/15 to-purple-500/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">

        <div className="mb-10 flex items-center justify-between">

  <Link
    href="/blog"
    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
  >
    ← Kembali ke Blog
  </Link>

  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
    Artikel #{artikel.id}
  </span>

</div>

        {/* Card */}
        <div className="mt-6 rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

          <p className="mb-4 text-sm text-gray-400">
            User ID : {artikel.userId}
          </p>

          <h1 className="text-4xl font-black capitalize leading-tight">
            {artikel.title}
          </h1>

          <div className="my-8 h-px bg-gradient-to-r from-cyan-500/50 via-white/10 to-transparent" />

          <p className="text-lg leading-9 text-gray-300">
            {artikel.body}
          </p>

        </div>

      </div>

    </main>
  );
}
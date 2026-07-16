import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project Satu",
    description: "Poster untuk tim f1 saat mereka menang qualifikasi.",
    tags: ["Next.js", "Tailwind"],
    image: "/gambar1.png",
  },
  {
    id: 2,
    title: "Project Dua",
    description: "Poster untuk tim f1 saat Race Day di Silverstone.",
    tags: ["React", "Node.js"],
    image: "/gambar2.png",
  },
  {
    id: 3,
    title: "Project Tiga",
    description: "Poster untuk tim f1 di British Grand Prix.",
    tags: ["TypeScript", "MongoDB"],
    image: "/gambar3.png",
  },
  {
    id: 4,
    title: "Project Empat",
    description: "Poster hasil race untuk tim f1.",
    tags: ["Figma", "UI/UX"],
    image: "/gambar4.png",
  },
];

export default function PortoPage() {
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
      

          {/* Tombol Kembali */}
    <div className="absolute top-6 left-6 z-50">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300"
      >
        ← Kembali ke Home
      </Link>
    </div>
      {/* Navbar - konsisten dengan halaman profile */}
      <nav className="anim-fade-down flex items-center justify-between px-6 py-6 md:px-16">
        <span className="text-xl font-light tracking-[0.2em]"></span>

        <ul className="hidden gap-8 text-sm font-light tracking-wide text-neutral-300 md:flex">
  <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
    <Link href="/">Home</Link>
  </li>

  <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
    <Link href="/fadhil/profile">About</Link>
  </li>

  <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
    <Link href="/fadhil/porto">Portfolio</Link>
  </li>

  <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
    <Link href="/fadhil/contact">Contact</Link>
  </li>
</ul>

        <button className="flex flex-col gap-1.5 md:hidden" aria-label="Open menu">
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-4 bg-white" />
        </button>
      </nav>

      {/* Page header */}
      <section className="px-6 pb-12 pt-8 md:px-16 md:pb-20 md:pt-12">
        <p
          className="anim-fade-up mb-3 text-xs font-light tracking-[0.4em] text-neutral-400 md:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          MY WORK
        </p>
        <h1
          className="anim-fade-up max-w-xl text-4xl font-light leading-tight md:text-6xl"
          style={{ animationDelay: "0.2s" }}
        >
          Selected <span className="font-semibold text-white">Portfolio</span>
        </h1>
        <p
          className="anim-fade-up mt-5 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-base"
          style={{ animationDelay: "0.3s" }}
        >
          Beberapa project yang pernah saya kerjakan.
        </p>

        <div
          className="anim-fade-up mt-8 h-px w-full max-w-xs bg-gradient-to-r from-white/40 to-transparent"
          style={{ animationDelay: "0.4s" }}
        />
      </section>

      {/* Project grid */}
      <section className="grid grid-cols-2 gap-3 px-6 pb-20 md:grid-cols-3 md:gap-5 md:px-16 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/porto/${project.id}`}
            className="anim-fade-up group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900"
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay gradasi, selalu ada tapi menguat saat hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition duration-300 group-hover:from-black/95" />

            {/* Konten teks di atas overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <p className="text-[10px] font-light uppercase tracking-[0.3em] text-white/50 opacity-0 transition duration-300 group-hover:opacity-100">
                {project.tags[0]}
              </p>
              <h2 className="mt-1 text-base font-medium text-white transition duration-300 group-hover:-translate-y-1 md:text-lg">
                {project.title}
              </h2>
            </div>

            {/* Panah muncul di pojok kanan atas saat hover */}
            <div className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
              </svg>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";

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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>

      <div className="px-6 py-8 md:px-16 md:py-12">
        {/* Tombol kembali */}
        <Link
          href="/porto"
          className="anim-fade-up inline-flex items-center gap-2 text-sm font-light text-neutral-400 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        >
          ← Kembali ke Portfolio
        </Link>

        <div
          className="anim-fade-up mt-8 grid gap-10 md:grid-cols-2 md:items-start"
          style={{ animationDelay: "0.15s" }}
        >
          {/* Gambar besar */}
          <div className="overflow-hidden rounded-2xl border border-neutral-800 transition duration-300 hover:border-neutral-600 hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          {/* Detail teks */}
          <div>
            <h1 className="text-3xl font-light md:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400 md:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-700 px-3 py-1 text-xs font-light text-neutral-300 transition duration-300 hover:border-neutral-400 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/contact">
              <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95">
                Tertarik? Hubungi Saya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";

const projects = [
  {
    title: "BottingKu",
    image: "/project1.png",
    description:
      "Platform digital untuk membantu calon pengantin menemukan vendor, mengatur jadwal, dan melakukan pembayaran dengan sistem escrow.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "Scenica",
    image: "/project2.png",
    description:
      "Website wisata pegunungan dengan fitur pencarian destinasi, galeri foto, dan informasi pendakian.",
    tech: ["React", "Tailwind CSS", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Landing Page Portfolio",
    image: "/project3.png",
    description:
      "Landing page modern yang responsif dengan desain minimalis dan animasi interaktif.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
];

export default function PortfolioBrayn() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          Brayn Portfolio
        </h1>

        <Link
          href="/"
          className="rounded-lg bg-cyan-500 px-5 py-2 hover:bg-cyan-600 transition"
        >
          Home
        </Link>
      </nav>

      {/* Header */}
      <section className="text-center mt-12">
        <h1 className="text-5xl font-bold">
          My Projects
        </h1>

        <p className="text-gray-400 mt-4">
          Beberapa proyek yang telah saya kerjakan.
        </p>
      </section>

      {/* Project Cards */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-cyan-500 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="flex gap-3 mt-6">

                <a
                  href={project.github}
                  className="flex-1 bg-slate-700 text-center py-2 rounded-lg hover:bg-slate-600 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex-1 bg-cyan-500 text-center py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  Demo
                </a>

              </div>

            </div>
          </div>
        ))}

      </section>

    </main>
  );
}
"use client";

const projects = [
  {
    title: "BOTTINGKU",
    tech: ["Flutter", "Next.js", "Firebase"],
    description:
      "Platform wedding-tech terintegrasi yang menggabungkan fitur perencanaan acara (event planning) dan vendor marketplace khusus untuk pernikahan adat Bugis-Makassar. Dikembangkan menggunakan Flutter dan Next.js untuk mempermudah calon pengantin mengelola seluruh proses pernikahan dalam satu aplikasi.",
    image: "/bottingku.png",
  },
  {
    title: "BelajarKu",
    tech: ["Flutter", "Laravel", "MySQL"],
    description:
      "Aplikasi platform edukasi interaktif yang dirancang untuk membantu siswa mengakses materi pembelajaran, rangkuman materi subjek sekolah, serta latihan soal secara terstruktur. Fokus pada kemudahan navigasi dan pengalaman belajar yang personal guna meningkatkan pemahaman akademis siswa.",
    image: "/belajarku.png",
  },
  {
    title: "Temuin",
    tech: ["Flutter", "Google Maps API", "Firebase"],
    description:
      "Aplikasi berbasis mobile yang berfungsi sebagai platform pencarian barang hilang atau penemuan komunitas di area sekitar. Mengintegrasikan sistem pelaporan berbasis peta (map-based) yang responsif dan interaktif untuk mempermudah pengguna melakukan pelacakan dan koordinasi secara real-time.",
    image: "/temuin.png",
  },
];

export default function Portofolio() {
  return (
    <section
      id="portofolio"
      className="
      relative
      overflow-hidden

      py-32

      bg-gradient-to-br
      from-white
      via-slate-50
      to-cyan-50

      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950

      transition-colors
      duration-500
      "
    >
      {/* Background */}

      <div className="absolute -top-44 -left-44 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[160px]" />

      <div className="absolute bottom-0 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-300/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span
            className="
            inline-block

            rounded-full

            bg-cyan-100
            dark:bg-cyan-500/20

            px-5
            py-2

            font-semibold

            text-cyan-700
            dark:text-cyan-300
            "
          >
            My Portofolio
          </span>

          <h2
            className="
            mt-6

            text-5xl
            md:text-6xl

            font-black

            text-slate-900
            dark:text-white
            "
          >
            Featured Projects
          </h2>

          <p
            className="
            mt-6

            max-w-3xl
            mx-auto

            text-lg

            leading-8

            text-slate-600
            dark:text-slate-400
            "
          >
            Berikut beberapa proyek yang telah saya kerjakan selama
            mempelajari pengembangan website dan aplikasi mobile.
          </p>

        </div>

        {/* Projects */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
              group

              flex
              flex-col

              overflow-hidden

              rounded-3xl

              bg-white
              dark:bg-slate-900

              border
              border-slate-200
              dark:border-slate-700

              shadow-lg

              hover:-translate-y-3
              hover:shadow-2xl

              transition-all
              duration-300

              animate-[fadeUp_.8s_ease]
              "
            >

              {/* Image */}

              <div className="relative h-60 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  h-full
                  w-full

                  object-cover

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:rotate-1
                  "
                />

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/50
                  to-transparent

                  opacity-0

                  group-hover:opacity-100

                  transition
                  duration-300
                  "
                />

                <div
                  className="
                  absolute
                  top-4
                  left-4

                  rounded-full

                  bg-cyan-500

                  px-4
                  py-1

                  text-sm
                  font-semibold

                  text-white
                  "
                >
                  Project
                </div>

              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col p-7">

                <h3
                  className="
                  text-3xl

                  font-bold

                  text-slate-900
                  dark:text-white
                  "
                >
                  {project.title}
                </h3>

                {/* Tech */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                      rounded-full

                      bg-cyan-100
                      dark:bg-cyan-500/20

                      px-3
                      py-1

                      text-sm

                      font-medium

                      text-cyan-700
                      dark:text-cyan-300
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Description */}

                <p
                  className="
                  mt-6

                  flex-1

                  leading-8

                  text-slate-600
                  dark:text-slate-300
                  "
                >
                  {project.description}
                </p>

                {/* Button */}

                <div className="mt-8">

                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex

                    items-center
                    justify-center

                    rounded-xl

                    bg-cyan-500
                    hover:bg-cyan-600

                    px-6
                    py-3

                    font-semibold

                    text-white

                    transition-all
                    duration-300

                    hover:scale-105
                  "
                  >
                    Lihat Sertifikat
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "bottingku",
    title: "BOTTINGKU",
    tech: ["Flutter", "Next.js", "Firebase"],
    description:
      "Platform wedding-tech terintegrasi yang menggabungkan fitur perencanaan acara (event planning) dan vendor marketplace khusus untuk pernikahan adat Bugis-Makassar. Dikembangkan menggunakan Flutter dan Next.js untuk mempermudah calon pengantin mengelola seluruh proses pernikahan dalam satu aplikasi.",
    image: "/bottingku.png",
  },
  {
    id: "belajarku",
    title: "BelajarKu",
    tech: ["Flutter", "Laravel", "MySQL"],
    description:
      "Aplikasi platform edukasi interaktif yang dirancang untuk membantu siswa mengakses materi pembelajaran, rangkuman materi subjek sekolah, serta latihan soal secara terstruktur. Fokus pada kemudahan navigasi dan pengalaman belajar yang personal guna meningkatkan pemahaman akademis siswa.",
    image: "/belajarku.png",
  },
  {
    id: "temuin",
    title: "Temuin",
    tech: ["Flutter", "Google Maps API", "Firebase"],
    description:
      "Aplikasi berbasis mobile yang berfungsi sebagai platform pencarian barang hilang atau penemuan komunitas di area sekitar. Mengintegrasikan sistem pelaporan berbasis peta (map-based) yang responsif dan interaktif untuk mempermudah pengguna melakukan pelacakan dan koordinasi secara real-time.",
    image: "/temuin.png",
  },
];

export default function Portofolio() {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextLikes: Record<string, number> = {};
      const nextLikedProjects: Record<string, boolean> = {};

      projects.forEach((project) => {
        const storedLikes = localStorage.getItem(`total_likes_project_${project.id}`);
        const userLiked = localStorage.getItem(`liked_project_${project.id}`);

        nextLikes[project.id] = storedLikes ? parseInt(storedLikes, 10) : 0;
        nextLikedProjects[project.id] = userLiked === "true";
      });

      setLikes(nextLikes);
      setLikedProjects(nextLikedProjects);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const maxLikes = Math.max(0, ...projects.map((project) => likes[project.id] ?? 0));

  const handleProjectLike = (projectId: string) => {
    const alreadyLiked = likedProjects[projectId];
    const currentLikes = likes[projectId] ?? 0;
    const newLikes = alreadyLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1;

    setLikes((current) => ({
      ...current,
      [projectId]: newLikes,
    }));

    setLikedProjects((current) => ({
      ...current,
      [projectId]: !alreadyLiked,
    }));

    if (alreadyLiked) {
      localStorage.removeItem(`liked_project_${projectId}`);
    } else {
      localStorage.setItem(`liked_project_${projectId}`, "true");
    }

    localStorage.setItem(`total_likes_project_${projectId}`, newLikes.toString());
  };

  return (
    <section
      id="portofolio"
      className="
      relative
      overflow-hidden

      flex
      min-h-[calc(100vh-5rem)]
      scroll-mt-20
      items-center
      py-16

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
            mt-4

            text-4xl
            md:text-5xl

            font-black

            text-slate-900
            dark:text-white
            "
          >
            Featured Projects
          </h2>

          <p
            className="
            mt-4

            max-w-3xl
            mx-auto

            leading-7

            text-slate-600
            dark:text-slate-400
            "
          >
            Berikut beberapa proyek yang telah saya kerjakan selama
            mempelajari pengembangan website dan aplikasi mobile.
          </p>

        </div>

        {/* Projects */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            (() => {
              const projectLikes = likes[project.id] ?? 0;
              const isMostLiked = projectLikes > 0 && projectLikes === maxLikes;
              const hasLiked = likedProjects[project.id];

              return (
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

                  <div className="relative h-44 overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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

                    <button
                      type="button"
                      onClick={() => handleProjectLike(project.id)}
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-bold backdrop-blur-md transition ${
                        hasLiked
                          ? "bg-rose-500 text-white shadow-lg"
                          : "bg-black/45 text-white hover:bg-black/65"
                      }`}
                    >
                      ♥ {projectLikes}
                    </button>

                  </div>

                  {/* Content */}

                  <div className="flex flex-1 flex-col p-5">

                    {isMostLiked && (
                      <p className="mb-2 text-sm font-bold text-cyan-600 dark:text-cyan-300">
                        Proyek Terpopuler!
                      </p>
                    )}

                    <h3
                      className="
                      text-2xl

                      font-bold

                      text-slate-900
                      dark:text-white
                      "
                    >
                      {project.title}
                    </h3>

                {/* Tech */}

                    <div className="mt-4 flex flex-wrap gap-2">

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
                      mt-4

                      flex-1

                      text-sm
                      leading-6

                      text-slate-600
                      dark:text-slate-300
                      "
                    >
                      {project.description}
                    </p>

                {/* Button */}

                    <div className="mt-5">

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
              );
            })()

          ))}

        </div>

      </div>
    </section>
  );
}

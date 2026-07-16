"use client";

import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden flex items-center justify-center min-h-screen px-6"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/20 dark:bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/20 dark:bg-cyan-400/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-5xl text-center pt-20">

        {/* Badge */}
        <div
          className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2

          rounded-full

          bg-indigo-100
          dark:bg-slate-800

          text-indigo-700
          dark:text-cyan-300

          font-medium

          animate-[fadeUp_.8s_ease]
          "
        >
          <Sparkles size={18} />
          Welcome to My Portfolio
        </div>

        {/* Judul */}
        <h1
          className="
          mt-8

          text-5xl
          md:text-7xl

          font-extrabold

          text-slate-900
          dark:text-white

          leading-tight

          animate-[fadeUp_1s_ease]
          "
        >
          Halo, Saya
          <br />

          <span
            className="
            bg-gradient-to-r

            from-indigo-600
            via-blue-500
            to-cyan-500

            dark:from-cyan-400
            dark:via-sky-400
            dark:to-indigo-400

            bg-clip-text
            text-transparent
            "
          >
            Brayn Richard Wangshah
          </span>
        </h1>

        {/* Sub Title */}
        <p
          className="
          mt-6

          text-xl

          font-semibold

          text-indigo-600
          dark:text-cyan-400

          animate-[fadeUp_1.2s_ease]
          "
        >
          Full Stack Developer • Web Developer • Mobile Developer
        </p>

        {/* Deskripsi */}
        <p
          className="
          max-w-3xl

          mx-auto

          mt-8

          leading-9

          text-lg

          text-slate-600
          dark:text-slate-300

          animate-[fadeUp_1.4s_ease]
          "
        >
          Halo! Saya <strong>Brayn Richard Wangshah</strong>, seorang siswa
          kelas XII jurusan Rekayasa Perangkat Lunak yang berfokus pada
          pengembangan website dan aplikasi mobile. Saya memiliki pengalaman
          membangun proyek aplikasi menggunakan <strong>Javascript</strong>,
          <strong> Next.js</strong>, <strong>Tailwind CSS</strong>, dan
          <strong> Flutter</strong>. Saya sangat suka merancang solusi digital
          terintegrasi yang dapat membantu mempermudah kebutuhan nyata, salah
          satunya seperti sistem manajemen vendor pernikahan.
        </p>

        {/* Button */}
        <div
          className="
          flex

          flex-col
          sm:flex-row

          justify-center

          gap-5

          mt-12

          animate-[fadeUp_1.6s_ease]
          "
        >
          <a
            href="#about"
            className="
            px-8
            py-4

            rounded-full

            bg-gradient-to-r
            from-indigo-600
            to-cyan-500

            text-white
            font-semibold

            shadow-xl

            hover:scale-105
            hover:-translate-y-1

            transition-all
            duration-300
            "
          >
            Kenali Saya
          </a>

          <a
            href="#contact"
            className="
            px-8
            py-4

            rounded-full

            border-2

            border-indigo-500
            dark:border-cyan-400

            text-indigo-600
            dark:text-cyan-300

            hover:bg-indigo-600
            hover:text-white

            dark:hover:bg-cyan-400
            dark:hover:text-slate-900

            transition-all
            duration-300
            "
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll */}
        <div className="mt-24 animate-bounce">
          <a
            href="#about"
            className="
            inline-flex
            items-center
            justify-center

            w-12
            h-12

            rounded-full

            bg-white
            dark:bg-slate-800

            shadow-lg

            text-indigo-600
            dark:text-cyan-400
            "
          >
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}
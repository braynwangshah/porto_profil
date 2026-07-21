"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import FallingEffects from "../components/falling-effects";
import { EyeOff } from "lucide-react";
import { useState } from "react";

export default function Porto() {
  const certificates = [
    { src: "/jse.png", title: "JavaScript Essentials 2", issuer: "Cisco Networking Academy • 2026" },
    { src: "/Dimas Iman Ismail (1).png", title: "UI / UX Design", issuer: "DevForger UC Makassar • 2025" },
    { src: "/digidaw.png", title: "Completed the Training Program for Digital Marketing", issuer: "Telkom DigiUp • 2025" },
  ];
  const [selectedCertificate, setSelectedCertificate] = useState(0);
  const [isCertificatePreviewVisible, setIsCertificatePreviewVisible] = useState(true);

  const showCertificate = (index: number) => {
    setSelectedCertificate(index);
    setIsCertificatePreviewVisible(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
      <>
  <Navbar />

  {/* isi halaman */}
</>
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-[170px]" />

      {/* Animasi salju & bunga sakura */}
      <FallingEffects />

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 z-20 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
      >
        ← Back
      </Link>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 pb-60 lg:px-20">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* isikontenny dikiri */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-400">
              PORTFOLIO
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Crafting digital
              <br />
              experiences that
              <span className="text-cyan-400"> inspire.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Halo, saya{" "}
              <span className="font-semibold text-white">
                Dimas Iman Ismail
              </span>
              . Saya merupakan siswa SMK Telkom Makassar yang memiliki
              ketertarikan pada pengembangan website, aplikasi mobile,
              UI/UX Design, dan Graphic Design.
            </p>

            </div>

          {/* skillnya dikanan */}
          <div>

            <h2 className="mb-8 text-3xl font-bold">
              My Skills
            </h2>

            <div className="grid gap-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
                <h3 className="mb-2 text-xl font-semibold">
                   Web Developer
                </h3>
                <p className="text-gray-400">
                  HTML, CSS, JavaScript, React, Next.js, Laravel dan pengembangan website modern.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
                <h3 className="mb-2 text-xl font-semibold">
                   UI / UX Designer
                </h3>
                <p className="text-gray-400">
                  Mendesain antarmuka yang bersih, modern, dan mudah digunakan menggunakan Figma.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
                <h3 className="mb-2 text-xl font-semibold">
                   Mobile Developer
                </h3>
                <p className="text-gray-400">
                  Mengembangkan aplikasi Android menggunakan Kotlin dan Jetpack Compose.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
                <h3 className="mb-2 text-xl font-semibold">
                   Graphic Designer
                </h3>
                <p className="text-gray-400">
                  Membuat logo, banner, poster, branding, dan konten visual yang menarik.
                </p>
              </div>

            </div>

          </div>

        </div>
            
                          {/* ================= CERTIFICATES ================= */}
      <div className="mt-32">
        <div className="mb-14 text-center">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            My Achievements
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Certificates
          </h2>

          <p className="mt-3 text-gray-400">
            Beberapa sertifikat yang telah saya peroleh selama belajar dan mengembangkan kemampuan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* ================= Certificate 1 ================= */}
          <button
            type="button"
            onClick={() => showCertificate(0)}
            className={`group overflow-hidden rounded-3xl border bg-white/5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-400/70 ${selectedCertificate === 0 && isCertificatePreviewVisible ? "border-cyan-400/70" : "border-white/10"}`}
            aria-label="Tampilkan sertifikat JavaScript Essentials 2"
          >

            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="/jse.png"
                alt="Certificate 1"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                Certificate
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                JavaScript Essentials 2
              </h3>

              <p className="mt-2 text-gray-400">
                Cisco Networking Academy • 2026
              </p>
            </div>
          </button>

          {/* ================= Certificate 2 ================= */}
          <button
            type="button"
            onClick={() => showCertificate(1)}
            className={`group overflow-hidden rounded-3xl border bg-white/5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-400/70 ${selectedCertificate === 1 && isCertificatePreviewVisible ? "border-cyan-400/70" : "border-white/10"}`}
            aria-label="Tampilkan sertifikat UI UX Design"
          >

            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="/Dimas Iman Ismail (1).png"
                alt="Certificate 2"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                Certificate
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                UI / UX Design
              </h3>

              <p className="mt-2 text-gray-400">
                DevForger UC Makassar • 2025
              </p>
            </div>
          </button>

          {/* ================= Certificate 3 ================= */}
          <button
            type="button"
            onClick={() => showCertificate(2)}
            className={`group overflow-hidden rounded-3xl border bg-white/5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-400/70 ${selectedCertificate === 2 && isCertificatePreviewVisible ? "border-cyan-400/70" : "border-white/10"}`}
            aria-label="Tampilkan sertifikat Digital Marketing"
          >

            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="/digidaw.png"
                alt="Certificate 3"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                Certificate
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Completed the Training Program for Digital Marketing
              </h3>

              <p className="mt-2 text-gray-400">
                Telkom DigiUp • 2025
              </p>
            </div>
          </button>

        </div>

        {isCertificatePreviewVisible && (
          <section
            className="mt-10 overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/5 p-3 shadow-[0_0_45px_rgba(34,211,238,0.12)] backdrop-blur-md sm:p-4"
            aria-live="polite"
          >
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-400">Certificate Preview</p>
                <h3 className="mt-0.5 text-base font-bold sm:text-lg">{certificates[selectedCertificate].title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCertificatePreviewVisible(false)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/20 px-2.5 py-1.5 text-xs font-medium text-gray-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label="Sembunyikan pratinjau sertifikat"
              >
                <EyeOff className="h-4 w-4" />
                <span className="hidden sm:inline">Hide</span>
              </button>
            </div>
            <div className="relative aspect-[4/3] min-h-[300px] w-full overflow-hidden rounded-2xl bg-black sm:aspect-[16/9]">
              <Image
                src={certificates[selectedCertificate].src}
                alt=""
                fill
                aria-hidden="true"
                className="scale-110 object-cover opacity-55 blur-xl saturate-125"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <Image
                src={certificates[selectedCertificate].src}
                alt={`Pratinjau ${certificates[selectedCertificate].title}`}
                fill
                className="z-10 object-contain p-3 drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] sm:p-5"
                sizes="(max-width: 1280px) 100vw, 1152px"
                priority
              />
            </div>
          </section>
        )}
      </div>

              {/* ================= PROJECTS ================= */}
<div className="mt-36">

  <h2 className="text-center text-5xl font-bold tracking-tight">
    Featured <span className="text-cyan-400">Projects</span>
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-gray-400">
    Beberapa project terbaik yang pernah saya kerjakan mulai dari website,
    company profile hingga aplikasi modern.
  </p>

  <div className="mt-16 grid gap-10 lg:grid-cols-3">

    {/* ================= Project 1 ================= */}
    <div className="project-card-web project-card-web--cyan group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">

      <div className="relative h-60 overflow-hidden">

        <Image
          src="/matrix.png"
          alt="Matrix Company Profile"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent"></div>

        <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
          Company Profile
        </span>

      </div>

      <div className="flex min-h-[360px] flex-col p-7">

        <h3 className="text-2xl font-bold">
          Matrix Company Profile
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-400">
          Website company profile modern dengan desain profesional dan
          responsif untuk kebutuhan branding perusahaan.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
            Next.js
          </span>

          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
            Tailwind CSS
          </span>

        </div>

        <a
          href="https://www.matrixcompanyprofile.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40"
        >
          Lihat Project 
        </a>

      </div>

    </div>

        {/* ================= Project 2 ================= */}
    <div className="project-card-web project-card-web--purple group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-400/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.18)]">

      <div className="relative h-60 overflow-hidden">

        <Image
          src="/portoo.png"
          alt="Portfolio"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent"></div>

        <span className="absolute left-5 top-5 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
          Portfolio
        </span>

      </div>

      <div className="flex min-h-[360px] flex-col p-7">

        <h3 className="text-2xl font-bold">
          Personal Portfolio
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-400">
          Website portfolio modern yang dibuat menggunakan AI serta dikembangkan
          menggunakan Next.js dan Tailwind CSS.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
            AI
          </span>

          <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
            Next.js
          </span>

          <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
            Tailwind CSS
          </span>

        </div>

        <a
          href="https://portofllai.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/40"
        >
          Lihat Project →
        </a>

      </div>

    </div>

        {/* ================= Project 3 ================= */}
    <div className="project-card-web project-card-web--red group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:shadow-[0_0_50px_rgba(239,68,68,0.20)]">

      <div className="relative h-60 overflow-hidden">

        <Image
          src="/rmstore.png"
          alt="RMSTORE"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          Inventory System
        </span>

      </div>

      <div className="flex min-h-[360px] flex-col p-7">

        <h3 className="text-2xl font-bold">
          RMSTORE Inventory
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-400">
          Website inventory Roblox menggunakan React dan Supabase dengan
          tampilan modern dan performa tinggi.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">
            React
          </span>

          <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">
            Supabase
          </span>

          <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">
            TypeScript
          </span>

        </div>

        <a
          href="https://rmstore.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/40"
        >
          Lihat Project →
        </a>

      </div>

    </div>

                  {/* ================= Project 4 ================= */}
    <div className="project-card-web project-card-web--amber group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-amber-400/60 hover:shadow-[0_0_60px_rgba(251,191,36,0.35)]">

      <div className="relative h-60 overflow-hidden">

        <Image
          src="/bbt.png"
          alt="BOTTINGKU"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">
          Mobile Application
        </span>

      </div>

      <div className="flex min-h-[360px] flex-col p-7">

        <h3 className="text-2xl font-bold">
          BOTTINGKU
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-400">
          Aplikasi mobile untuk membantu pengelolaan proses pernikahan adat Makassar
          dengan tampilan modern dan pengalaman pengguna yang mudah digunakan.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm text-amber-300">
            Kotlin
          </span>

          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm text-amber-300">
            Jetpack Compose
          </span>

          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm text-amber-300">
            Android
          </span>

        </div>

        <a
          href="https://www.figma.com/design/DzN2obyDWvAiiQV1ut4Bbk/BOTTINGKU?node-id=0-1&t=Eu4k6fDOag1Ajplo-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center rounded-2xl bg-amber-400 py-3 font-semibold text-black transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/40"
        >
          Lihat Project →
        </a>

      </div>

    </div>

          {/* ================= Project 5 ================= */}
      <div className="project-card-web project-card-web--teal group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-teal-400/60 hover:shadow-[0_0_60px_rgba(45,212,191,0.35)]">

        <div className="relative h-60 overflow-hidden">

          <Image
            src="/bljr.png"
            alt="BelajarKu"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-teal-400 px-3 py-1 text-xs font-semibold text-black">
            Website Course
          </span>

        </div>

        <div className="flex min-h-[360px] flex-col p-7">

          <h3 className="text-2xl font-bold">
            BelajarKu
          </h3>

          <p className="mt-3 flex-1 leading-7 text-gray-400">
            Website pembelajaran digital yang membantu siswa mengakses materi,
            latihan, dan informasi belajar dengan tampilan modern serta mudah digunakan.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            <span className="rounded-full bg-teal-400/10 px-3 py-1 text-sm text-teal-300">
              Next.js
            </span>

            <span className="rounded-full bg-teal-400/10 px-3 py-1 text-sm text-teal-300">
              Tailwind CSS
            </span>

          </div>

          <a
            href="https://www.figma.com/design/tn62vFE8i3imnLXGDGTbde/BelajarKU?node-id=0-1&t=tpAcmBtRljJPKIMu-1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex w-full items-center justify-center rounded-2xl bg-teal-400 py-3 font-semibold text-black transition-all duration-300 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/40"
          >
            Lihat Project →
          </a>

        </div>

      </div>
  </div>

</div>

                         {/* ================= CONTACT ================= */}
<div className="mt-32 border-t border-white/10 pt-14">

  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
      CONTACT
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      Let&apos;s Connect
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
      Tertarik bekerja sama atau ingin berdiskusi mengenai project?
      Saya selalu terbuka untuk kesempatan baru.
    </p>
  </div>

  <div className="mx-auto mt-12 max-w-5xl rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

    <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr]">

      {/* Contact Information */}
      <div>

        <h3 className="mb-8 text-2xl font-semibold">
          Contact Information
        </h3>

        <div className="space-y-6">

          <div className="border-b border-white/10 pb-5">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Phone
            </p>

            <p className="mt-2 text-lg text-white">
              0821-9455-9594
            </p>
          </div>

          <div className="border-b border-white/10 pb-5">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Email
            </p>

            <p className="mt-2 text-lg text-white">
              dimas.makassar.2020@gmail.com
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Address
            </p>

            <p className="mt-2 leading-8 text-gray-300">
              Kompleks Gerhana Alauddin Blok F/17
              <br />
              Kel. Mangasa, Kec. Tamalate
              <br />
              Kota Makassar, Sulawesi Selatan 90221
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-between rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-7">

        <div>

          <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm text-cyan-300">
            Available for Freelance
          </span>

          <h3 className="mt-6 text-2xl font-bold">
            Let&apos;s Build Something Great
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Saya berpengalaman membuat website modern, UI/UX Design,
            serta aplikasi mobile menggunakan teknologi terbaru.
          </p>

        </div>

        <div className="mt-10 space-y-3">

          <a
            href="https://github.com/lelegoreng0926"
            target="_blank"
            className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <p className="font-semibold">
              GitHub
            </p>

            <p className="text-sm text-gray-400">
              github.com/lelegoreng0926
            </p>
          </a>

          <a
            href="https://www.instagram.com/d_yimas"
            target="_blank"
            className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <p className="font-semibold">
              Instagram
            </p>

            <p className="text-sm text-gray-400">
              @d_yimas
            </p>
          </a>

        </div>

      </div>

    </div>

  </div>
</div>
      </div>

              

      </div>
  

    
  );
}

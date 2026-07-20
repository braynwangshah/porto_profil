"use client";

import { ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-200
        dark:border-slate-800

        bg-white
        dark:bg-slate-950

        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}

          <div>

            <h2
              className="
                text-4xl
                font-black

                text-indigo-600
                dark:text-cyan-400
              "
            >
              Brayn.
            </h2>

            <p
              className="
                mt-5

                leading-8

                text-slate-600
                dark:text-slate-400
              "
            >
              Terima kasih sudah berkunjung!<br /> Di sini saya membagikan seluruh pengalaman, sertifikasi, dan projek Web & Mobile Development yang telah saya bangun.
Lets connect!
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a href="#beranda" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Beranda
              </a>

              <a href="#about" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Tentang
              </a>

              <a href="#education" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Pendidikan
              </a>

              <a href="#experience" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Pengalaman
              </a>

              <a href="#achievement" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Prestasi
              </a>

              <a href="#portofolio" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Portofolio
              </a>

              <a href="#contact" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">
                Kontak
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-bold">
              Connect With Me
            </h3>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              Mari terhubung melalui media sosial maupun platform profesional.
            </p>

            <div className="mt-8 flex gap-5">

              <a
                href="https://github.com/braynwangshah"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-slate-100
                  dark:bg-slate-800

                  hover:bg-indigo-600
                  hover:text-white

                  dark:hover:bg-cyan-500
                  dark:hover:text-slate-900

                  transition-all
                  duration-300
                "
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/braynrichardwangshah"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-slate-100
                  dark:bg-slate-800

                  hover:bg-indigo-600
                  hover:text-white

                  dark:hover:bg-cyan-500
                  dark:hover:text-slate-900

                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-14
            flex
            flex-col
            md:flex-row
            items-center
            justify-between

            border-t
            border-slate-200
            dark:border-slate-800

            pt-8
          "
        >

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Brayn Richard Wangshah. All Rights Reserved.
          </p>

          <a
            href="#beranda"
            className="
              mt-5
              md:mt-0

              flex
              items-center
              gap-2

              rounded-full

              bg-indigo-600
              dark:bg-cyan-500

              px-5
              py-3

              font-semibold

              text-white
              dark:text-slate-900

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <ChevronUp size={18} />
            Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}
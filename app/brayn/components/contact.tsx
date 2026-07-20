"use client";

import { Mail, Phone, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
        bg-gradient-to-br
        from-slate-50
        via-white
        to-indigo-50
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span
            className="
              inline-block
              rounded-full
              bg-indigo-100
              dark:bg-cyan-500/20
              px-5
              py-2
              font-semibold
              text-indigo-700
              dark:text-cyan-300
            "
          >
            Contact Me
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
            {"Let's Build Something Amazing"}
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
            Saya selalu terbuka untuk berdiskusi mengenai proyek, kolaborasi,
            magang, maupun kesempatan belajar baru di bidang pengembangan
            website, aplikasi mobile, dan teknologi digital.
          </p>

        </div>

        {/* Content */}

        <div
          className="
            mt-20
            grid
            lg:grid-cols-2
            gap-10

            rounded-[35px]

            bg-white/80
            dark:bg-slate-900/80

            backdrop-blur-xl

            border
            border-slate-200
            dark:border-slate-700

            shadow-2xl

            p-10
          "
        >

          {/* LEFT */}

          <div>

            <h3 className="text-3xl font-bold">
              Informasi Kontak
            </h3>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              Jangan ragu menghubungi saya apabila Anda memiliki pertanyaan,
              ingin berkolaborasi, ataupun berdiskusi mengenai sebuah proyek.
            </p>

            <div className="mt-10 space-y-5">

              {/* EMAIL */}

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=wangshahbrayn@gmail.com&su=Halo%20Brayn&body=Halo%20Brayn,%20saya%20ingin%20menghubungi%20Anda."
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    gap-5

    rounded-2xl

    p-4

    transition-all
    duration-300

    hover:bg-indigo-50
    dark:hover:bg-slate-800
  "
>
  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center

      rounded-2xl

      bg-indigo-100
      dark:bg-cyan-500/20
    "
  >
    <Mail className="text-indigo-600 dark:text-cyan-400" />
  </div>

  <div>
    <h4 className="font-bold">
      Email
    </h4>

    <p className="text-slate-600 dark:text-slate-400">
      wangshahbrayn@gmail.com
    </p>
  </div>
</a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/6289510872641"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  p-4

                  transition-all
                  duration-300

                  hover:bg-green-50
                  dark:hover:bg-slate-800
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-green-100
                    dark:bg-green-500/20
                  "
                >
                  <Phone className="text-green-600 dark:text-green-400" />
                </div>

                <div>

                  <h4 className="font-bold">
                    WhatsApp
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400">
                    +62 895 1087 2641
                  </p>

                </div>

              </a>

              {/* LOKASI */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  p-4
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-indigo-100
                    dark:bg-cyan-500/20
                  "
                >
                  <MapPin className="text-indigo-600 dark:text-cyan-400" />
                </div>

                <div>

                  <h4 className="font-bold">
                    Lokasi
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400">
                    Makassar, Sulawesi Selatan
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-center">

            <div className="space-y-5">

              {/* GITHUB */}

              <a
                href="https://github.com/braynwangshah"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-slate-200
                  dark:border-slate-700

                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-indigo-50

                  dark:hover:bg-slate-800
                "
              >

                <FaGithub
                  size={28}
                  className="text-indigo-600 dark:text-cyan-400"
                />

                <div>

                  <h4 className="font-bold">
                    GitHub
                  </h4>

                  <p className="text-slate-500">
                    github.com/braynwangshah
                  </p>

                </div>

              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/in/braynrichardwangshah"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-slate-200
                  dark:border-slate-700

                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-indigo-50

                  dark:hover:bg-slate-800
                "
              >

                <FaLinkedin
                  size={28}
                  className="text-indigo-600 dark:text-cyan-400"
                />

                <div>

                  <h4 className="font-bold">
                    LinkedIn
                  </h4>

                  <p className="text-slate-500">
                    linkedin.com/in/braynrichardwangshah
                  </p>

                </div>

              </a>

              {/* DOWNLOAD CV */}

              <a
                href="/CV-Brayn.pdf"
                download
                className="
                  mt-8

                  flex
                  items-center
                  justify-center
                  gap-3

                  rounded-2xl

                  bg-gradient-to-r
                  from-indigo-600
                  to-cyan-500

                  px-6
                  py-4

                  text-lg
                  font-bold

                  text-white

                  shadow-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >

                <Download size={22} />

                Download CV

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
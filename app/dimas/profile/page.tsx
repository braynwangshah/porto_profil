import Link from "next/link";

export default function Profile() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-[170px]" />

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 z-20 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
      >
        ← Back
      </Link>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 lg:px-20">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-400">
              PROFILE
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              About
              <br />
              <span className="text-cyan-400">
                Me.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Halo, saya{" "}
              <span className="font-semibold text-white">
                Dimas Iman Ismail
              </span>
              . Saya adalah siswa SMK Telkom Makassar jurusan Rekayasa
              Perangkat Lunak yang memiliki minat pada Web Development,
              Mobile Development, UI/UX Design, dan Graphic Design.
            </p>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                <h2 className="text-4xl font-bold text-cyan-400 transition group-hover:scale-110">
                  3+
                </h2>

                <p className="mt-2 text-gray-400">
                  Projects
                </p>
              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                <h2 className="text-4xl font-bold text-cyan-400 transition group-hover:scale-110">
                  3
                </h2>

                <p className="mt-2 text-gray-400">
                  Certificates
                </p>
              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                <h2 className="text-4xl font-bold text-cyan-400 transition group-hover:scale-110">
                  4
                </h2>

                <p className="mt-2 text-gray-400">
                  Skills
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <h3 className="text-xl font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
                 Nama
              </h3>

              <p className="mt-2 text-gray-300 transition-colors group-hover:text-white">
                Dimas Iman Ismail
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <h3 className="text-xl font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
                 Pendidikan
              </h3>

              <p className="mt-2 text-gray-300 transition-colors group-hover:text-white">
                SMK Telkom Makassar
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <h3 className="text-xl font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
                 Jurusan
              </h3>

              <p className="mt-2 text-gray-300 transition-colors group-hover:text-white">
                Rekayasa Perangkat Lunak (RPL)
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <h3 className="text-xl font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
                 Hobi
              </h3>

              <p className="mt-2 text-gray-300 transition-colors group-hover:text-white">
                Coding, UI/UX Design, Graphic Design, belajar teknologi baru,
                dan membangun berbagai project.
              </p>
            </div>

          </div>

        </div>

        {/* About Me */}
        <div className="mt-32">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              ABOUT
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              About Me
            </h2>

            <p className="mt-4 text-gray-400">
              Sedikit cerita mengenai diri saya.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">

            <p className="text-lg leading-9 text-gray-300">
              Saya merupakan seorang siswa SMK Telkom Makassar yang memiliki
              semangat tinggi untuk terus belajar dan berkembang di bidang
              teknologi. Saya memiliki ketertarikan dalam membangun website,
              aplikasi mobile, mendesain antarmuka modern menggunakan Figma,
              serta membuat berbagai desain grafis. Saya percaya bahwa
              kombinasi antara desain yang baik dan kode yang rapi mampu
              menghasilkan pengalaman pengguna yang berkualitas dan
              profesional.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
import Link from "next/link";

export default function Porto() {
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
        <h2 className="mb-3 text-4xl font-bold text-center">
            Certificates
        </h2>

        <p className="mb-12 text-center text-gray-400">
            Sertifikat Yang Saya Punya.
        </p>

        <div className="grid gap-8 md:grid-cols-3">

            {/* Sertifikat 1 */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="flex h-56 items-center justify-center bg-white/10 text-gray-500">
                Gambar Sertifikat
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold">
                Web Development
                </h3>

                <p className="mt-2 text-gray-400">
                Dummy • 2026
                </p>
            </div>
            </div>

            {/* Sertifikat 2 */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="flex h-56 items-center justify-center bg-white/10 text-gray-500">
                Gambar Sertifikat
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold">
                UI / UX Design
                </h3>

                <p className="mt-2 text-gray-400">
                Dummy • 2026
                </p>
            </div>
            </div>

            {/* Sertifikat 3 */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="flex h-56 items-center justify-center bg-white/10 text-gray-500">
                Gambar Sertifikat
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold">
                Mobile Development
                </h3>

                <p className="mt-2 text-gray-400">
                Dummy • 2026
                </p>
            </div>
            </div>

        </div>
        </div>

              {/* ================= CONTACT ================= */}
      <div className="mt-32 border-t border-white/10 pt-12">
        <h2 className="mb-3 text-4xl font-bold text-center">
          Contact
        </h2>

        <p className="mb-12 text-center text-gray-400">
          Hubungi saya melalui informasi di bawah ini.
        </p>

        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Phone */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                 Nomor Telepon
              </h3>

              <p className="text-lg text-gray-300">
                0821-9455-9594
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                 Alamat
              </h3>

              <p className="leading-7 text-gray-300">
                Kompleks Gerhana Alauddin Blok F/17
                <br />
                Kel. Mangasa, Kec. Tamalate
                <br />
                Kota Makassar, Sulawesi Selatan 90221
              </p>
            </div>

          </div>
        </div>
      </div>

      </div>
    </div>

    
  );
}
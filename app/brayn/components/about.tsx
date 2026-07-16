export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
            Tentang Saya
          </h2>

          <div className="w-24 h-1 bg-indigo-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="flex flex-col items-center">

            <div
              className="
                overflow-hidden
                rounded-full
                border-[6px]
                border-indigo-600
                shadow-xl
                transition-all
                duration-500
                hover:scale-105
                hover:-translate-y-2
                hover:shadow-indigo-500/40
              "
            >
              <img
                src="/brayn.jpg"
                alt="Brayn"
                className="w-72 h-72 object-cover"
              />
            </div>

            <h3 className="mt-8 text-4xl font-bold text-center text-slate-800 dark:text-white">
              Brayn Richard
              <br />
              Wangshah
            </h3>

            <p className="mt-2 text-indigo-600 font-semibold text-lg">
              Siswa SMK Telkom Makassar
            </p>

          </div>

          {/* DESKRIPSI */}
          <div>

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">

              Saya adalah siswa kelas XII Rekayasa Perangkat Lunak yang
              berfokus pada <b>web development</b>, <b>mobile development</b>,
              dan <b>UI/UX Design</b>. Saya aktif mengembangkan kemampuan
              teknis dan logika melalui proyek nyata, mulai dari merancang
              sistem solusi digital hingga menyusun strategi produk.

              <br />
              <br />

              Saya memiliki komitmen tinggi untuk terus belajar, adaptif
              terhadap tantangan baru, dan siap memberikan kontribusi terbaik
              di lingkungan profesional.

            </p>

            {/* TAG */}
            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "Web Development",
                "Mobile Development",
                "UI / UX Design",
                "Problem Solving",
                "Business Strategy",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    bg-indigo-100
                    dark:bg-slate-800
                    px-5
                    py-2

                    text-indigo-700
                    dark:text-cyan-400

                    transition-all
                    duration-300

                    hover:scale-105
                    hover:-translate-y-1
                    hover:bg-indigo-600
                    hover:text-white
                  "
                >
                  {item}
                </span>
              ))}

            </div>

            <div
  className="
    mt-10
    rounded-3xl

    bg-white
    dark:bg-slate-800

    p-8

    border
    border-slate-200
    dark:border-slate-700

    shadow-xl

    transition-all
    duration-300

    hover:-translate-y-2
    hover:shadow-2xl
    hover:border-indigo-500
  "
>
  <div className="space-y-5 text-lg">

    <div className="flex">
      <span className="font-bold w-36 text-slate-800 dark:text-white">
        Nama
      </span>
      <span className="text-slate-600 dark:text-slate-300">
        : Brayn Richard Wangshah
      </span>
    </div>

    <div className="flex">
      <span className="font-bold w-36 text-slate-800 dark:text-white">
        Sekolah
      </span>
      <span className="text-slate-600 dark:text-slate-300">
        : SMK Telkom Makassar
      </span>
    </div>

    <div className="flex">
      <span className="font-bold w-36 text-slate-800 dark:text-white">
        Jurusan
      </span>
      <span className="text-slate-600 dark:text-slate-300">
        : Rekayasa Perangkat Lunak
      </span>
    </div>

    <div className="flex">
      <span className="font-bold w-36 text-slate-800 dark:text-white">
        Status
      </span>
      <span className="text-slate-600 dark:text-slate-300">
        : Pelajar
      </span>
    </div>

    <div className="flex">
      <span className="font-bold w-36 text-slate-800 dark:text-white">
        Hobi
      </span>
      <span className="text-slate-600 dark:text-slate-300">
        : Berenang, Menghitung, dan Mempelajari Hal Baru
      </span>
    </div>

  </div>
</div>

          </div>

        </div>

      </div>
    </section>
  );
}
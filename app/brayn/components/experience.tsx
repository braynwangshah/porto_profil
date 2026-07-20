"use client";

const experiences = [
  {
    title: "OSIS SMK Telkom Makassar",
    period: "2025 - Sekarang",
    place: "SMK Telkom Makassar",
    description:
      "Aktif berkontribusi dalam perencanaan dan pelaksanaan program kerja OSIS, mengkoordinasikan berbagai kegiatan kesiswaan, serta menjembatani aspirasi siswa dengan pihak sekolah untuk menciptakan lingkungan sekolah yang dinamis.",
  },
  {
    title: "OSIS SMK Telkom Makassar",
    period: "2024 - 2025",
    place: "SMK Telkom Makassar",
    description:
      "Berpartisipasi aktif dalam menjalankan agenda organisasi, menyukseskan berbagai event internal sekolah, serta mengembangkan keterampilan kepemimpinan dan kerja sama tim melalui program kerja kesiswaan.",
  },
  {
    title: "CAPTURE",
    period: "2024 - Sekarang",
    place: "SMK Telkom Makassar",
    description:
      "Terlibat aktif dalam kegiatan dokumentasi, pengembangan kreativitas visual, serta pengelolaan proyek multimedia di lingkungan sekolah maupun event luar untuk mengasah keahlian teknis secara konsisten.",
  },
  {
    title: "Panitia Stelkphoria",
    period: "2025",
    place: "SMK Telkom Makassar",
    description:
      "Berkontribusi langsung dalam tim kepanitiaan untuk merancang, mempersiapkan, dan mengeksekusi rangkaian acara pentas seni dan festival Stelkphoria agar berjalan sukses dan meriah.",
  },
  {
    title: "OSIS SMP Katolik Rajawali",
    period: "2023 - 2024",
    place: "SMP Katolik Rajawali",
    description:
      "Berperan aktif dalam kegiatan organisasi siswa di tingkat pertama, membantu kelancaran program kerja sekolah, serta belajar dasar-dasar manajemen organisasi dan komunikasi antarsiswa.",
  },
  {
    title: "Panitia Rajawali Cup",
    period: "2023",
    place: "SMP Katolik Rajawali",
    description:
      "Menjadi bagian dari tim pelaksana turnamen olahraga Rajawali Cup, bertanggung jawab atas kelancaran kompetisi, koordinasi teknis di lapangan, serta menyukseskan jalannya acara dari awal hingga akhir.",
  },
  {
    title: "Panitia Fancy Fair",
    period: "2023",
    place: "SMP Katolik Rajawali",
    description:
      "Berpartisipasi sebagai panitia pelaksana kegiatan Fancy Fair, mengelola persiapan teknis acara, serta bekerja sama memastikan event amal dan bazar sekolah ini berjalan dengan tertib dan menghibur.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
      relative
      py-32

      bg-gradient-to-br
      from-cyan-50
      via-sky-50
      to-indigo-100

      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950

      transition-colors
      duration-500
      "
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 blur-[170px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-300/20 blur-[170px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-24">

          <h2 className="text-5xl font-black text-slate-800 dark:text-white">
            Pengalaman Organisasi
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-slate-600 dark:text-slate-400">
            Riwayat organisasi, kepanitiaan, dan aktivitas yang membentuk
            kemampuan kepemimpinan, komunikasi, serta kerja sama tim.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500 via-sky-500 to-indigo-500" />

          <div className="space-y-20">

            {experiences.map((item, index) => (

              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >

                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-white shadow-lg" />

                <div
                  className="
                  w-[470px]

                  rounded-3xl

                  bg-white

                  dark:bg-slate-900

                  p-8

                  shadow-xl

                  border

                  border-slate-100
                  dark:border-slate-700

                  transition-all
                  duration-300

                  hover:-translate-y-3
                  hover:shadow-2xl
                  hover:border-cyan-400
                  "
                >

                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h3>

                  <span className="inline-block mt-5 rounded-full bg-cyan-100 px-5 py-2 font-semibold text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                    {item.period}
                  </span>

                  <p className="mt-4 font-semibold text-indigo-600 dark:text-cyan-400">
                    {item.place}
                  </p>

                  <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
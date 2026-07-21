"use client";

const achievements = [
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    description:
      "Sertifikasi kompetensi tingkat lanjut yang memvalidasi pemahaman mendalam tentang pemrograman JavaScript objek-sentris (OOP), penanganan pengecualian (exceptions), serta konsep pemrosesan asinkronus untuk pengembangan aplikasi web yang kompleks.",
    image: "/ciscobrayn.png",
  },
  {
    title: "Bootcamp DigiUp: Digital Marketing",
    issuer: "DigiUp",
    description:
      "Sertifikat pelatihan intensif yang mencakup penguasaan strategi pemasaran digital, analisis audiens, optimalisasi media sosial, serta perencanaan kampanye digital untuk meningkatkan visibilitas dan pertumbuhan sebuah brand atau produk.",
    image: "/digiupbrayn.png",
  },
  {
    title: "Finalis UI/UX Competition",
    issuer: "DevForge",
    description:
      "Penghargaan sebagai finalis dalam kompetisi perancangan antarmuka dan pengalaman pengguna (UI/UX), yang diraih melalui proses riset pengguna, pembuatan wireframe, hingga pengembangan prototipe desain aplikasi yang interaktif dan solutif.",
    image: "/uiuxdevorge.png",
  },
];

export default function Achievement() {
  return (
    <section
      id="achievement"
      className="py-32 bg-slate-100 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 font-semibold">
            My Achievements
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 dark:text-white">
            Certificates
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Beberapa sertifikat dan penghargaan yang saya peroleh selama belajar
            dan mengembangkan kemampuan.
          </p>

        </div>

        {/* Card */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              {/* Image */}

              <div className="relative h-60 overflow-hidden bg-slate-200 dark:bg-slate-800">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 px-4 py-1 rounded-full bg-cyan-500 text-white text-sm font-semibold">
                  Certificate
                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-cyan-600">
                  {item.issuer}
                </p>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
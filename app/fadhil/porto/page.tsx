import Link from "next/link";

const certificates = [
  {
    id: 1,
    title: "Sertifikat Satu",
    issuer: "Nama Penyelenggara",
    date: "2024",
    image: "/cert1.png",
  },
  {
    id: 2,
    title: "Sertifikat Dua",
    issuer: "Nama Penyelenggara",
    date: "2024",
    image: "/cert2.png",
  },
  {
    id: 3,
    title: "Sertifikat Tiga",
    issuer: "Nama Penyelenggara",
    date: "2025",
    image: "/cert3.png",
  },
  {
    id: 4,
    title: "Sertifikat Empat",
    issuer: "Nama Penyelenggara",
    date: "2025",
    image: "/cert4.png",
  },
];

export default function PortoPage() {
  return (
    <main className="w-full bg-white overflow-hidden">

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-fade-down {
          opacity: 0;
          animation: fadeInDown .7s ease-out forwards;
        }

        .anim-fade-up {
          opacity: 0;
          animation: fadeInUp .7s ease-out forwards;
        }
      `}</style>


      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 pb-28">

        {/* Cloud Effect */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-10 top-16 h-52 w-72 rounded-full bg-white/40 blur-3xl" />

          <div className="absolute right-0 top-32 h-64 w-96 rounded-full bg-white/30 blur-3xl" />

          <div className="absolute bottom-0 left-1/4 h-56 w-96 rounded-full bg-white/40 blur-3xl" />

        </div>


        {/* Navbar */}
        <div className="anim-fade-down relative z-20 flex justify-center px-6 pt-6">

          <nav className="flex w-full max-w-3xl items-center justify-between gap-6 rounded-full bg-white/90 px-6 py-3 shadow-lg backdrop-blur-md">

            <span className="text-base font-bold tracking-tight text-slate-900">
              Fadhil<span className="text-sky-500">.</span>
            </span>


            <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">

              <li>
                <Link
                  href="/fadhil/profile"
                  className="transition hover:text-slate-900"
                >
                  Home
                </Link>
              </li>


              <li>
                <Link
                  href="/fadhil/profile"
                  className="transition hover:text-slate-900"
                >
                  About
                </Link>
              </li>


              <li className="font-semibold text-slate-900">
                Portfolio
              </li>

            </ul>


            <Link href="/contact">

              <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">

                Contact

              </button>

            </Link>

          </nav>

        </div>



        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center md:pt-20">

          <p
            className="anim-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80"
            style={{
              animationDelay: "0.1s",
            }}
          >
            My Achievements
          </p>



          <h1
            className="anim-fade-up max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
            style={{
              animationDelay: "0.2s",
            }}
          >
            Sertifikat & Pencapaian
          </h1>



          <p
            className="anim-fade-up mt-5 max-w-md text-sm font-medium text-white/85 md:text-base"
            style={{
              animationDelay: "0.35s",
            }}
          >
            Beberapa sertifikat yang pernah saya raih,
            semua tersimpan rapi di satu tempat.
          </p>

        </div>


      </section>




      {/* Certificate Grid */}

      <section className="relative z-20 mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2 md:px-16">


        {certificates.map((cert, index) => (

          <div
            key={cert.id}
            className="anim-fade-up group overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              animationDelay: `${0.1 * index}s`,
            }}
          >


            {/* Certificate Image */}

            <div className="aspect-video w-full overflow-hidden bg-slate-100">

              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />

            </div>



            {/* Content */}

            <div className="p-5">


              <p className="text-xs font-medium uppercase tracking-wide text-sky-600">

                {cert.issuer} · {cert.date}

              </p>



              <h2 className="mt-1 text-base font-semibold text-slate-900">

                {cert.title}

              </h2>


            </div>


          </div>

        ))}


      </section>


    </main>
  );
}
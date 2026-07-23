"use client";

const education = [
  {
    school: "SMK Telkom Makassar",
    major: "Rekayasa Perangkat Lunak (RPL)",
    year: "2024 - 2027",
  },
  {
    school: "SMP Katolik Rajawali",
    major: "",
    year: "2021 - 2024",
  },
  {
    school: "SD Santo Joseph Rajawali",
    major: "",
    year: "2015 - 2021",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
      flex
      min-h-[calc(100vh-5rem)]
      scroll-mt-20
      items-center
      py-16
      px-6

      bg-slate-50
      dark:bg-slate-950

      transition-colors
      duration-500
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}

        <div className="text-center mb-10">

          <p className="text-indigo-600 dark:text-cyan-400 font-semibold uppercase tracking-[5px]">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            Riwayat Pendidikan
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Perjalanan pendidikan yang membentuk kemampuan akademik,
            logika berpikir, serta keterampilan saya dalam dunia teknologi.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Line */}

          <div
            className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2

            w-1
            h-full

            rounded-full

            bg-gradient-to-b
            from-indigo-500
            to-cyan-400
            "
          />

          {education.map((item, index) => (

            <div
              key={index}
              className={`
                relative
                mb-8
                flex
                items-center

                ${
                  index % 2 === 0
                    ? "justify-start md:justify-end"
                    : "justify-start"
                }
              `}
            >

              {/* Dot */}

              <div
                className="
                absolute
                left-1/2
                -translate-x-1/2

                w-5
                h-5

                rounded-full

                bg-indigo-600
                dark:bg-cyan-400

                ring-8
                ring-slate-50
                dark:ring-slate-950

                z-20
                "
              />

              {/* Card */}

              <div
                className={`
                w-full
                md:w-[43%]

                rounded-3xl

                bg-white
                dark:bg-slate-900

                border
                border-slate-200
                dark:border-slate-800

                p-6

                shadow-xl

                transition-all
                duration-500

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-2xl

                animate-[fadeUp_.8s_ease]

                ${
                  index % 2 === 0
                    ? "md:mr-14"
                    : "md:ml-14"
                }
                `}
              >

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {item.school}
                </h3>

                {item.major && (
                  <p className="mt-3 text-indigo-600 dark:text-cyan-400 font-medium">
                    {item.major}
                  </p>
                )}

                <div
                  className="
                  inline-block
                  mt-4

                  px-5
                  py-2

                  rounded-full

                  bg-indigo-100
                  dark:bg-cyan-500/10

                  text-indigo-700
                  dark:text-cyan-300

                  font-semibold
                  "
                >
                  {item.year}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

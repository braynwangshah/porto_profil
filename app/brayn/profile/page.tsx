import Link from "next/link";

const skills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 85 },
  { name: "Laravel", level: 85 },
  { name: "Flutter", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "MySQL", level: 80 },
];

export default function BraynProfile() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-800/60 backdrop-blur bg-slate-950/70">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Brayn Profile</h1>
          <Link href="/" className="rounded-xl bg-cyan-500 px-5 py-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.35)]">Home</Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto p-8">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.2)]">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img src="/brayn.jpg" alt="Brayn" className="w-56 h-56 rounded-full object-cover border-4 border-cyan-400 transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-[0_0_35px_rgba(34,211,238,.4)]"/>
            <div>
              <h1 className="text-5xl font-bold">Brayn Richard Wangshah</h1>
              <p className="text-cyan-400 text-xl mt-2">Full Stack Developer</p>
              <span className="inline-block mt-3 rounded-full bg-emerald-500/20 px-4 py-1 text-emerald-300">Available for Internship</span>
              <p className="mt-6 text-gray-300 leading-8">Halo! Saya siswa SMK Telkom Makassar jurusan RPL yang berfokus pada pengembangan website dan aplikasi mobile menggunakan Next.js, Laravel, React, Flutter, Tailwind CSS dan MySQL.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            ["🎓 Pendidikan", <div key="p"><p><b>Sekolah</b><br/>SMK Telkom Makassar</p><br/><p><b>Jurusan</b><br/>Rekayasa Perangkat Lunak</p><br/><p><b>Kelas</b><br/>XII RPL 2</p></div>],
            ["📞 Kontak", <div key="k"><p>Email<br/>wangshahbrayn@gmail.com</p><br/><p>GitHub<br/>github.com/braynwangshah</p><br/><p>Instagram<br/>@brrynnn_21</p></div>],
            ["🎯 Hobi", <ul key="h" className="space-y-2"><li>🏊 Swimming</li><li>💻 Coding</li><li>🎮 Gaming</li><li>📚 Learning Technology</li></ul>]
          ].map(([title,body],i)=>(
            <div key={i} className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.2)]">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>{body}
            </div>
          ))}

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.2)]">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">💻 Skills</h2>
            <div className="space-y-5">
              {skills.map(s=>(
                <div key={s.name}>
                  <div className="flex justify-between mb-1"><span>{s.name}</span><span>{s.level}%</span></div>
                  <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full rounded-full bg-cyan-400 transition-all duration-700 hover:bg-cyan-300" style={{width:`${s.level}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-400 mt-12 py-6 border-t border-slate-800">
          © 2026 Brayn Richard Wangshah
        </footer>
      </section>
    </main>
  );
}

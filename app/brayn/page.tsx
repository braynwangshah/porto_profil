import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Achievement from "./components/achievement";
import Portofolio from "./components/portofolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function BraynPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-500">
      <Navbar />

      <Hero />

      <About />

      <Education />

      <Experience />

      <Achievement />

      <Portofolio />

      <Contact />

      <Footer />
    </main>
  );
}
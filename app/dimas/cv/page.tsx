"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowUpRight, Download, MapPin } from "lucide-react";
import type { IconType } from "react-icons";
import { FaAndroid, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaLaravel, FaReact } from "react-icons/fa";
import { SiJetpackcompose, SiKotlin, SiMysql, SiNextdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";


const projects = [
  { name: "Matrix Company Profile", type: "Company website", image: "/matrix.png", description: "A modern, responsive company profile built to support a clear and professional brand presence.", stack: "Next.js · Tailwind CSS", href: "https://www.matrixcompanyprofile.com/" },
  { name: "Personal Portfolio", type: "Digital portfolio", image: "/portoo.png", description: "A contemporary personal portfolio designed with AI and developed for the web.", stack: "AI · Next.js · Tailwind CSS", href: "https://portofllai.lovable.app/" },
  { name: "RMSTORE Inventory", type: "Inventory system", image: "/rmstore.png", description: "A Roblox inventory website with a modern interface and Supabase powered data.", stack: "React · Supabase · TypeScript", href: "https://rmstore.vercel.app/" },
  { name: "BOTTINGKU", type: "Mobile application", image: "/bbt.png", description: "A mobile app concept for organizing Makassar traditional wedding processes, with a simple user experience.", stack: "Kotlin · Jetpack Compose · Android", href: "https://www.figma.com/design/DzN2obyDWvAiiQV1ut4Bbk/BOTTINGKU?node-id=0-1&t=Eu4k6fDOag1Ajplo-1" },
  { name: "BelajarKu", type: "Learning website", image: "/bljr.png", description: "A digital learning experience that brings lessons, exercises, and study information together.", stack: "Next.js · Tailwind CSS", href: "https://www.figma.com/design/tn62vFE8i3imnLXGDGTbde/BelajarKU?node-id=0-1&t=tpAcmBtRljJPKIMu-1" },
];

const skills = [
  ["Frontend", "HTML · CSS · JavaScript · React · Next.js · Tailwind CSS"],
  ["Backend", "Laravel"],
  ["Mobile", "Kotlin · Jetpack Compose · Android"],
  ["Database", "MySQL · Supabase"],
  ["UI / UX", "Figma"],
  ["Development tools", "GitHub"],
];

const certificates = [
  ["JavaScript Essentials 2", "Cisco Networking Academy", "2026"],
  ["UI / UX Design", "DevForger UC Makassar", "2025"],
  ["Digital Marketing Training Program", "Telkom DigiUp", "2025"],
];

const education = [
  {
    school: "SMK Telkom Makassar",
    level: "Senior High School / Vocational School",
    major: "Rekayasa Perangkat Lunak (RPL)",
    location: "Makassar, Indonesia",
  },
  {
    school: "PROTTAB AMT Makassar",
    level: "Junior High School",
    location: "Makassar, Indonesia",
  },
  {
    school: "UPT SPF SD Inpres Unggulan BTN Pemda",
    level: "Elementary School",
    location: "Makassar, Indonesia",
  },
];

const technologies: { name: string; icon: IconType; color: string }[] = [
  { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
  { name: "Kotlin", icon: SiKotlin, color: "#a97bff" },
  { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285f4" },
  { name: "Android", icon: FaAndroid, color: "#3ddc84" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
  { name: "Figma", icon: FaFigma, color: "#f24e1e" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
];

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function ScrollColorWord({
  word,
  index,
  count,
  progress,
  rangeStart,
  rangeEnd,
}: {
  word: string;
  index: number;
  count: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  rangeStart: number;
  rangeEnd: number;
}) {
  const start = rangeStart + (index / count) * (rangeEnd - rangeStart);
  const end = start + Math.min(0.07, (rangeEnd - rangeStart) / count);
  const color = useTransform(progress, [start, end], ["#777777", "#FFFFFF"]);

  return <motion.span style={{ color }}>{word} </motion.span>;
}

function EducationEntry({
  entry,
  index,
  progress,
  reduceMotion,
}: {
  entry: (typeof education)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduceMotion: boolean;
}) {
  const colorStart = index * 0.16;
  const schoolColor = useTransform(progress, [colorStart, Math.min(colorStart + 0.6, 1)], ["#777777", "#f2f0eb"]);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduceMotion ? 0 : 0.95, delay: reduceMotion ? 0 : index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 py-6 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5 sm:py-7"
    >
      <span className="pt-1 font-mono text-xs tabular-nums text-[#d0ff71]">0{index + 1}</span>
      <div>
        <motion.h2 style={{ color: reduceMotion ? "#f2f0eb" : schoolColor }} className="text-xl font-medium leading-tight tracking-[-0.04em] sm:text-2xl lg:text-3xl">
          {entry.school}
        </motion.h2>
        <div className="mt-3 flex flex-col gap-1.5 text-xs leading-5 text-white/45 sm:text-sm">
          <p>{entry.level}</p>
          {entry.major && <p className="text-white/70">{entry.major}</p>}
          <p>{entry.location}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function DimasCV() {
  const reduceMotion = useReducedMotion();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [previewHeight, setPreviewHeight] = useState(0);
  const projectListRef = useRef<HTMLDivElement>(null);
  const previewViewportRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const pointerPosition = useRef({ x: 0, y: 0 });
  const pointerOverProject = useRef(false);
  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const hasPreviewPosition = useRef(false);
  const frameRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  useEffect(() => {
    const viewport = previewViewportRef.current;
    if (!viewport) return;

    const measure = () => setPreviewHeight(viewport.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncProjectUnderPointer = () => {
      if (!pointerOverProject.current) return;
      const { x, y } = pointerPosition.current;
      const hoveredElement = document.elementFromPoint(x, y)?.closest<HTMLElement>("[data-project-index]");
      const row = hoveredElement && projectListRef.current?.contains(hoveredElement) ? hoveredElement : null;

      if (!row) {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setActiveProjectIndex(null), 180);
        return;
      }

      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = null;
      const index = Number(row.dataset.projectIndex);
      setActiveProjectIndex(index);
      setSelectedProjectIndex(index);
    };

    window.addEventListener("scroll", syncProjectUnderPointer, { passive: true });
    return () => window.removeEventListener("scroll", syncProjectUnderPointer);
  }, []);

  const positionPreview = (x: number, y: number, followPointer = true) => {
    targetPosition.current = { x, y };

    if (!hasPreviewPosition.current || reduceMotion || !followPointer) {
      currentPosition.current = { ...targetPosition.current };
      hasPreviewPosition.current = true;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (!followPointer || reduceMotion) {
        if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
        lastFrameTime.current = null;
      }
    }

    if (reduceMotion || !followPointer || frameRef.current !== null) return;
    const tick = (time: number) => {
      const elapsed = lastFrameTime.current === null ? 16.67 : Math.min(time - lastFrameTime.current, 48);
      lastFrameTime.current = time;
      const current = currentPosition.current;
      const target = targetPosition.current;
      const damping = 1 - Math.exp(-elapsed / 45);
      current.x += (target.x - current.x) * damping;
      current.y += (target.y - current.y) * damping;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      const remaining = Math.abs(target.x - current.x) + Math.abs(target.y - current.y);
      if (remaining > 0.2) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        current.x = target.x;
        current.y = target.y;
        frameRef.current = null;
        lastFrameTime.current = null;
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  };

  const showProjectPreview = (projectIndex: number, x: number, y: number, followPointer = true) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = null;
    pointerPosition.current = { x, y };
    setActiveProjectIndex(projectIndex);
    setSelectedProjectIndex(projectIndex);
    positionPreview(x, y, followPointer);
  };

  const schedulePreviewHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setActiveProjectIndex(null), 180);
  };

  const aboutRef = useRef<HTMLElement>(null);
  // Trigger as soon as the About section enters the viewport, even on short screens.
  const aboutHeadingInView = useInView(aboutRef, { amount: 0.08 });
  const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ["start 90%", "end 20%"] });
  const educationRef = useRef<HTMLElement>(null);
  const { scrollYProgress: educationProgress } = useScroll({ target: educationRef, offset: ["start 88%", "end 25%"] });
  const enter = reduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.15 }, variants: reveal, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } };

  return (
    
    
    <main className="cv-page min-h-screen overflow-hidden bg-[#111110] text-[#f2f0eb] selection:bg-[#d0ff71] selection:text-[#111110]">
      <div ref={previewRef} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[70] will-change-transform">
        <motion.div
          ref={previewViewportRef}
          animate={{ opacity: activeProjectIndex !== null ? 1 : 0, scale: activeProjectIndex !== null ? 1 : 0.9 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] w-[min(82vw,360px)] overflow-hidden bg-[#252522] shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
        >
          <motion.div
            className="absolute left-0 top-0 flex flex-col will-change-transform"
            style={{ height: previewHeight * projects.length, width: "100%" }}
            animate={{ y: -(selectedProjectIndex * previewHeight) }}
            transition={{ duration: reduceMotion ? 0 : 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            {projects.map((project) => (
              <div key={project.name} className="relative w-full flex-none" style={{ height: previewHeight, flexBasis: previewHeight }}>
                <Image src={project.image} alt="" fill sizes="(max-width: 640px) 82vw, 360px" className="object-cover" />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-[76px] place-items-center rounded-full bg-[#455ce9] text-sm font-medium text-white shadow-lg sm:size-[88px]">View</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none fixed left-0 top-0 z-[-1] h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        {projects.map((project) => (
          <Image key={`preload-${project.name}`} src={project.image} alt="" width={800} height={600} sizes="360px" loading="eager" fetchPriority="low" className="h-px w-px" />
        ))}
      </div>

      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide"><span className="grid size-9 place-items-center rounded-full bg-[#d0ff71] text-sm font-black text-[#111110]">D</span><span>Dimas Iman Ismail<span className="ml-2 text-white/35">/ CV</span></span></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-xs uppercase tracking-[0.16em] text-white/55 md:flex">
          <a className="transition hover:text-white" href="#about">About</a><a className="transition hover:text-white" href="#work">Selected work</a><a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
        <Link href="/dimas/porto" className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/65 transition hover:text-[#d0ff71]"><ArrowLeft size={14} /> Portfolio</Link>
      </header>

      <section className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[1440px] flex-col justify-center px-5 pb-16 pt-14 sm:px-10 sm:pt-20 lg:px-16">
        <div className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/50"><span className="size-2 rounded-full bg-[#d0ff71]" /> Developer &amp; Digital Creative <span className="hidden text-white/25 sm:inline">— Indonesia</span></div>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 text-[clamp(3.5rem,12vw,11.5rem)] font-semibold uppercase leading-[0.79] tracking-[-0.085em]">
          <span className="block">Dimas Iman</span><span className="block text-[#d0ff71]">Ismail<span className="text-white">.</span></span>
        </motion.h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">I build thoughtful digital experiences across web, mobile, and interface design — shaped by curiosity, clarity, and care.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/dimas-cv.pdf" download className="inline-flex items-center gap-3 rounded-full bg-[#d0ff71] px-6 py-3.5 text-sm font-semibold text-[#111110] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0ff71]">Download CV <Download size={16} /></a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium transition hover:border-white hover:bg-white/5">Contact me <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="mt-12 flex items-end justify-between border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:mt-16">
          <span className="flex items-center gap-2"><MapPin size={13} /> Indonesia</span><a href="#about" className="flex items-center gap-2 transition hover:text-white">Scroll to explore <ArrowDown size={13} /></a>
        </div>
        <div aria-hidden="true" className="cv-marquee mt-8 overflow-hidden border-b border-white/10 pb-4 text-[clamp(1rem,2vw,1.6rem)] font-medium uppercase tracking-[0.2em] text-white/20"><div className="cv-marquee__track">Design with purpose&nbsp;·&nbsp; Build with curiosity&nbsp;·&nbsp; Design with purpose&nbsp;·&nbsp; Build with curiosity&nbsp;·&nbsp;</div></div>
      </section>

      <section ref={aboutRef} id="about" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.65fr_1.35fr] lg:px-16">
        <div>
          <p className="cv-kicker">01 / A little about me</p>
          <h2 className="mt-5 max-w-xs text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">
            {[["Curious", "by", "nature."], ["Builder", "by", "choice."]].map((line, lineIndex) => (
              <span key={line.join("-")} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  initial={{ opacity: 0, y: reduceMotion ? "35%" : "110%" }}
                  animate={aboutHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? "35%" : "110%" }}
                  transition={{ duration: reduceMotion ? 1.4 : 2.8, delay: lineIndex * (reduceMotion ? 0.3 : 0.55), ease: [0.22, 1, 0.36, 1] }}
                  className="block will-change-transform"
                >
                  {line.map((word, wordIndex) => {
                    const index = lineIndex * line.length + wordIndex;
                    return <ScrollColorWord key={`${word}-${index}`} word={word} index={index} count={6} progress={aboutProgress} rangeStart={0.04} rangeEnd={0.28} />;
                  })}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>
        <motion.div {...enter} className="grid gap-8 md:grid-cols-[minmax(0,1fr)_230px] md:items-end">
          <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl">
            {"I’m a software development student at SMK Telkom Makassar, exploring how design and technology can make everyday digital experiences more useful and human. My interests span web and mobile development, software engineering, and UI/UX design.".split(" ").map((word, index, words) => <ScrollColorWord key={`${word}-${index}`} word={word} index={index} count={words.length} progress={aboutProgress} rangeStart={0.22} rangeEnd={0.94} />)}
          </p>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[230px] overflow-hidden bg-[#272724] md:mx-0"><Image src="/fotodimas.png" alt="Portrait of Dimas Iman Ismail" fill sizes="(max-width: 768px) 80vw, 230px" className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" /><span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white/80">Makassar, Indonesia</span></div>
        </motion.div>
      </section>

      <section ref={educationRef} className="border-y border-white/10 bg-[#171716]">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="cv-kicker">02 / Academic background</p>
            <div className="mt-7 divide-y divide-white/15 border-y border-white/15">
              {education.map((entry, index) => (
                <EducationEntry key={entry.school} entry={entry} index={index} progress={educationProgress} reduceMotion={Boolean(reduceMotion)} />
              ))}
            </div>
          </div>
          <motion.div {...enter}><p className="cv-kicker">03 / Skills &amp; tools</p><div className="mt-6 divide-y divide-white/10">{skills.map(([category, tools]) => <div key={category} className="grid gap-2 py-4 sm:grid-cols-[170px_1fr] sm:gap-5"><h3 className="text-sm text-white/45">{category}</h3><p className="text-sm leading-6 text-white/80">{tools}</p></div>)}</div></motion.div>
        </div>
        <div className="cv-tech-marquee group overflow-hidden border-t border-white/10 py-8" aria-label="Technologies and tools">
          <div className="cv-tech-track flex w-max items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
            {[...technologies, ...technologies].map(({ name, icon: Icon, color }, index) => <div key={`${name}-${index}`} aria-hidden={index >= technologies.length} className="group/tech flex min-w-max items-center gap-3 text-white/35 transition-colors duration-300 hover:text-white" style={{ "--tech-color": color } as CSSProperties}>
              <Icon aria-hidden="true" className="cv-tech-icon text-3xl transition duration-300 group-hover/tech:scale-110" />
              <span className="text-sm font-medium tracking-wide">{name}</span>
            </div>)}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 sm:py-32 lg:px-12">
        <motion.div {...enter} className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="cv-kicker">04 / Selected work</p><h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">Made with intent<span className="text-[#d0ff71]">.</span></h2></div><p className="max-w-sm text-sm leading-6 text-white/45">A selection of web, mobile, and product design projects. Each one an opportunity to learn by making.</p></motion.div>
        <div ref={projectListRef} className="mx-auto max-w-[1040px] divide-y divide-white/15 border-y border-white/15">
          {projects.map((project, index) => {
            const isActive = activeProjectIndex === index;
            const isDimmed = activeProjectIndex !== null && !isActive;

            return (
              <motion.a
                {...enter}
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name}, ${project.type}. Open project`}
                data-project-index={index}
                onPointerEnter={(event) => {
                  if (event.pointerType !== "touch") {
                    pointerOverProject.current = true;
                    const rect = event.currentTarget.getBoundingClientRect();
                    const cursorX = rect.left + (event.clientX - rect.left);
                    const cursorY = rect.top + (event.clientY - rect.top);
                    pointerPosition.current = { x: cursorX, y: cursorY };
                    showProjectPreview(index, cursorX, cursorY);
                  }
                }}
                onPointerMove={(event) => {
                  if (event.pointerType !== "touch") {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const cursorX = rect.left + (event.clientX - rect.left);
                    const cursorY = rect.top + (event.clientY - rect.top);
                    pointerPosition.current = { x: cursorX, y: cursorY };
                    positionPreview(cursorX, cursorY);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== "touch") {
                    pointerOverProject.current = false;
                    schedulePreviewHide();
                  }
                }}
                onFocus={() => showProjectPreview(index, window.innerWidth / 2, window.innerHeight / 2, false)}
                onBlur={schedulePreviewHide}
                onClick={(event) => {
                  if (window.matchMedia("(hover: none), (pointer: coarse)").matches && !isActive) {
                    event.preventDefault();
                    showProjectPreview(index, window.innerWidth / 2, window.innerHeight / 2, false);
                  }
                }}
                style={{ opacity: isDimmed ? 0.4 : 1 }}
                className={`${isActive ? "cursor-none" : "cursor-pointer"} group grid grid-cols-[30px_1fr_20px] items-center gap-3 py-7 transition-[opacity,background-color] duration-300 hover:bg-white/[0.025] sm:grid-cols-[44px_1fr_auto_24px] sm:gap-4 sm:py-9`}
              >
                <span className="text-xs tabular-nums text-white/35">0{index + 1}</span>
                <div>
                  <h3 className="text-3xl font-medium leading-tight tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#d0ff71] sm:text-5xl lg:text-6xl">{project.name}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:hidden">{project.type}</p>
                </div>
                <p className="hidden justify-self-end text-xs uppercase tracking-[0.16em] text-white/45 sm:block">{project.type}</p>
                <ArrowUpRight size={19} className="text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d0ff71]" />
              </motion.a>
            );
          })}
        </div>
      </section>

      <section className="bg-[#d0ff71] text-[#111110]"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:px-16"><div><p className="text-[10px] uppercase tracking-[0.2em] text-black/55">05 / Certificates</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.06em]">Learning, in practice.</h2></div><div className="divide-y divide-black/20 border-y border-black/20">{certificates.map(([title, issuer, year]) => <div key={title} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-center"><div><h3 className="font-medium">{title}</h3><p className="mt-1 text-sm text-black/55">{issuer}</p></div><span className="text-sm text-black/55">{year}</span></div>)}</div></div></section>

      <footer id="contact" className="mx-auto max-w-[1440px] px-5 pb-28 pt-24 sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
        <p className="cv-kicker">06 / Get in touch</p><h2 className="mt-7 max-w-5xl text-[clamp(3.2rem,10vw,9rem)] font-medium uppercase leading-[0.83] tracking-[-0.08em]">Let&apos;s create<br />something <span className="text-[#d0ff71]">great.</span></h2>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/15 pt-7 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[0.18em] text-white/40">Have a project in mind?</p><a href="mailto:dimas.makassar.2020@gmail.com" className="mt-3 inline-flex items-center gap-2 text-lg transition hover:text-[#d0ff71] sm:text-xl">dimas.makassar.2020@gmail.com <ArrowUpRight size={17} /></a></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55"><a className="transition hover:text-[#d0ff71]" href="https://github.com/lelegoreng0926" target="_blank" rel="noreferrer">GitHub ↗</a><a className="transition hover:text-[#d0ff71]" href="https://www.instagram.com/d_yimas" target="_blank" rel="noreferrer">Instagram ↗</a><a className="transition hover:text-[#d0ff71]" href="tel:+6282194559594">+62 821 9455 9594</a></div></div>
        <div className="mt-16 flex justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-white/30"><span>Dimas Iman Ismail</span><Link href="/dimas/porto" className="transition hover:text-white">Back to portfolio ↑</Link></div>
      </footer>
    </main>
  );
}

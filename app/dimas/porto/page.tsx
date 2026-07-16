"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Porto() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;
    
    // Array untuk menyimpan bintang jatuh
    let shootingStars = [];
    
    // Setting canvas
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Class untuk bintang jatuh
    class ShootingStar {
      constructor() {
        this.reset();
      }
      
      reset() {
        // Posisi awal acak
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.4;
        this.length = Math.random() * 120 + 60; // lebih panjang
        this.speed = Math.random() * 1.5 + 1; // LEBIH LAMBAT (sebelumnya 4-10)
        this.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
        this.opacity = 1;
        this.trail = [];
        this.maxTrail = 40; // lebih banyak trail
        this.active = false;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 150; // lebih lama (sebelumnya 50-150)
        this.waitTime = Math.random() * 400 + 200; // jeda lebih lama (sebelumnya 50-250)
        this.waitCounter = 0;
        this.fadeSpeed = 0.008; // fade lebih lambat (sebelumnya 0.02)
      }
      
      update() {
        if (!this.active) {
          this.waitCounter++;
          if (this.waitCounter >= this.waitTime) {
            this.active = true;
            this.waitCounter = 0;
            this.opacity = 1;
            this.life = 0;
            // Reset posisi
            this.x = Math.random() * width;
            this.y = Math.random() * height * 0.2;
          }
          return;
        }
        
        // Update posisi - lebih lambat
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Tambah trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrail) {
          this.trail.shift();
        }
        
        // Opacity fade out - lebih lambat
        this.life++;
        if (this.life > this.maxLife) {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) {
            this.active = false;
            this.trail = [];
            this.waitCounter = 0;
            this.waitTime = Math.random() * 500 + 300; // jeda lebih lama
          }
        }
      }
      
      draw(ctx) {
        if (!this.active && this.trail.length === 0) return;
        
        // Gambar trail dengan efek glow
        for (let i = 0; i < this.trail.length; i++) {
          const progress = i / this.trail.length;
          const alpha = progress * this.opacity * 0.7;
          const size = progress * 3 + 0.5;
          
          // Efek glow
          const gradient = ctx.createRadialGradient(
            this.trail[i].x, this.trail[i].y, 0,
            this.trail[i].x, this.trail[i].y, size * 3
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.8})`);
          gradient.addColorStop(0.5, `rgba(200, 230, 255, ${alpha * 0.4})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Bintang kecil
          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.fill();
        }
        
        // Kepala bintang (lebih terang)
        if (this.trail.length > 0) {
          const last = this.trail[this.trail.length - 1];
          
          // Glow besar
          const gradient = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 12);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.9})`);
          gradient.addColorStop(0.2, `rgba(200, 230, 255, ${this.opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          ctx.beginPath();
          ctx.arc(last.x, last.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Inti bintang
          const gradient2 = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 4);
          gradient2.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
          gradient2.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
          gradient2.addColorStop(1, `rgba(200, 230, 255, 0)`);
          ctx.beginPath();
          ctx.arc(last.x, last.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient2;
          ctx.fill();
        }
      }
    }
    
    // Inisialisasi bintang jatuh - kurangi jumlah agar lebih eksklusif
    const numStars = 6;
    for (let i = 0; i < numStars; i++) {
      const star = new ShootingStar();
      star.waitCounter = Math.random() * 500;
      star.waitTime = Math.random() * 400 + 300;
      star.speed = Math.random() * 1.5 + 0.8; // lebih lambat
      shootingStars.push(star);
    }
    
    // Animasi
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update dan draw semua bintang jatuh
      shootingStars.forEach(star => {
        star.update();
        star.draw(ctx);
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
      {/* Canvas untuk bintang jatuh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Background Blur - tetap di atas canvas */}
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
        {/* semua konten tetap sama seperti sebelumnya */}
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
          <div className="mb-14 text-center">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              My Achievements
            </span>
            <h2 className="mt-5 text-4xl font-bold">
              Certificates
            </h2>
            <p className="mt-3 text-gray-400">
              Beberapa sertifikat yang telah saya peroleh selama belajar dan mengembangkan kemampuan.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Certificate 1 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/jse.png"
                  alt="Certificate 1"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                  Certificate
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  JavaScript Essentials 2
                </h3>
                <p className="mt-2 text-gray-400">
                  Cisco Networking Academy • 2026
                </p>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/Dimas Iman Ismail (1).png"
                  alt="Certificate 2"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                  Certificate
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  UI / UX Design
                </h3>
                <p className="mt-2 text-gray-400">
                  DevForger UC Makassar • 2025
                </p>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/digidaw.png"
                  alt="Certificate 3"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                  Certificate
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Completed the Training Program for Digital Marketing
                </h3>
                <p className="mt-2 text-gray-400">
                  Telkom DigiUp • 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROJECTS ================= */}
        <div className="mt-36">
          <h2 className="text-center text-5xl font-bold tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-gray-400">
            Beberapa project terbaik yang pernah saya kerjakan mulai dari website,
            company profile hingga aplikasi modern.
          </p>
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/matrix.png"
                  alt="Matrix Company Profile"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent"></div>
                <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                  Company Profile
                </span>
              </div>
              <div className="flex h-[290px] flex-col p-7">
                <h3 className="text-2xl font-bold">
                  Matrix Company Profile
                </h3>
                <p className="mt-3 flex-1 leading-7 text-gray-400">
                  Website company profile modern dengan desain profesional dan
                  responsif untuk kebutuhan branding perusahaan.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                    Next.js
                  </span>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="https://www.matrixcompanyprofile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40"
                >
                  Lihat Project 
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/portoo.png"
                  alt="Portfolio"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent"></div>
                <span className="absolute left-5 top-5 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                  Portfolio
                </span>
              </div>
              <div className="flex h-[290px] flex-col p-7">
                <h3 className="text-2xl font-bold">
                  Personal Portfolio
                </h3>
                <p className="mt-3 flex-1 leading-7 text-gray-400">
                  Website portfolio modern yang dibuat menggunakan AI serta dikembangkan
                  menggunakan Next.js dan Tailwind CSS.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                    AI
                  </span>
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                    Next.js
                  </span>
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                    Tailwind
                  </span>
                </div>
                <a
                  href="https://portofllai.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40"
                >
                  Lihat Project 
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/rmstore.png"
                  alt="RMSTORE"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/10 to-transparent"></div>
                <span className="absolute left-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  Inventory System
                </span>
              </div>
              <div className="flex h-[290px] flex-col p-7">
                <h3 className="text-2xl font-bold">
                  RMSTORE Inventory
                </h3>
                <p className="mt-3 flex-1 leading-7 text-gray-400">
                  Website inventory Roblox menggunakan React dan Supabase dengan
                  tampilan modern dan performa tinggi.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">
                    React
                  </span>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">
                    Supabase
                  </span>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">
                    TypeScript
                  </span>
                </div>
                <a
                  href="https://rmstore.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40"
                >
                  Lihat Project 
                </a>
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
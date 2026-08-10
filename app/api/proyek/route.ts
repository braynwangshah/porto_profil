import { NextResponse } from "next/server";

// Data proyek Brayn
const daftarProyek = [
  {
    id: 1,
    judul: "BottingKu",
    teknologi: "Laravel, MySQL, Bootstrap",
    selesai: true,
  },
  {
    id: 2,
    judul: "Landing Page Portfolio",
    teknologi: "Next.js, Tailwind CSS",
    selesai: true,
  },
  {
    id: 3,
    judul: "Beautiful Scenery",
    teknologi: "React, Tailwind CSS",
    selesai: true,
  },
  {
    id: 4,
    judul: "Scenica",
    teknologi: "React, Laravel, MySQL",
    selesai: false,
  },
];

// Fungsi GET untuk mengambil data proyek
export async function GET() {
  return NextResponse.json(daftarProyek);
}
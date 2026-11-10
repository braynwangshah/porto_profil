import { writeFileSync } from "node:fs";

// Small, dependency-free PDF generator for the static CV download.
const pages = [
  [
    { text: "DIMAS IMAN ISMAIL", size: 27, font: "B", color: "D0FF71" },
    { text: "DEVELOPER & DIGITAL CREATIVE", size: 10, font: "B", color: "888888", gap: 8 },
    { text: "Indonesia  |  +62 821 9455 9594", size: 10, color: "555555" },
    { text: "dimas.makassar.2020@gmail.com", size: 10, color: "555555" },
    { text: "github.com/lelegoreng0926  |  instagram.com/d_yimas", size: 10, color: "555555", gap: 20 },
    { text: "PROFILE", size: 11, font: "B", color: "111111", gap: 3 },
    { text: "Software development student at SMK Telkom Makassar interested in building", size: 10 },
    { text: "useful digital experiences across web and mobile development, software", size: 10 },
    { text: "engineering, and UI/UX design.", size: 10, gap: 18 },
    { text: "EDUCATION", size: 11, font: "B", color: "111111", gap: 3 },
    { text: "SMK Telkom Makassar", size: 12, font: "B" },
    { text: "Rekayasa Perangkat Lunak (RPL)", size: 10, gap: 18 },
    { text: "SKILLS", size: 11, font: "B", color: "111111", gap: 3 },
    { text: "Frontend  |  HTML, CSS, JavaScript, React, Next.js, Tailwind CSS", size: 10 },
    { text: "Backend  |  Laravel", size: 10 },
    { text: "Mobile  |  Kotlin, Jetpack Compose, Android", size: 10 },
    { text: "Database  |  MySQL, Supabase", size: 10 },
    { text: "UI/UX  |  Figma      Tools  |  GitHub", size: 10, gap: 18 },
    { text: "SELECTED PROJECTS", size: 11, font: "B", color: "111111", gap: 7 },
    { text: "01  Matrix Company Profile", size: 12, font: "B" },
    { text: "Responsive company website for a professional brand presence.", size: 9 },
    { text: "Next.js, Tailwind CSS  |  matrixcompanyprofile.com", size: 9, gap: 9 },
    { text: "02  Personal Portfolio", size: 12, font: "B" },
    { text: "Contemporary personal portfolio designed with AI for the web.", size: 9 },
    { text: "AI, Next.js, Tailwind CSS  |  portofllai.lovable.app", size: 9, gap: 9 },
    { text: "03  RMSTORE Inventory", size: 12, font: "B" },
    { text: "Roblox inventory website with a modern interface and Supabase data.", size: 9 },
    { text: "React, Supabase, TypeScript  |  rmstore.vercel.app", size: 9, gap: 9 },
    { text: "04  BOTTINGKU", size: 12, font: "B" },
    { text: "Mobile app concept for Makassar traditional wedding planning.", size: 9 },
    { text: "Kotlin, Jetpack Compose, Android  |  Figma project", size: 9, gap: 9 },
    { text: "05  BelajarKu", size: 12, font: "B" },
    { text: "Digital learning experience for lessons, exercises, and study info.", size: 9 },
    { text: "Next.js, Tailwind CSS  |  Figma project", size: 9, gap: 18 },
    { text: "CERTIFICATES", size: 11, font: "B", color: "111111", gap: 4 },
    { text: "JavaScript Essentials 2 - Cisco Networking Academy (2026)", size: 9 },
    { text: "UI/UX Design - DevForger UC Makassar (2025)", size: 9 },
    { text: "Digital Marketing Training Program - Telkom DigiUp (2025)", size: 9 },
  ],
];

function esc(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
const stream = ["0.07 0.07 0.06 rg", "0 0 595 842 re f", "1 1 1 rg"];
let y = 790;
for (const item of pages[0]) {
  y -= item.gap ?? (item.size > 20 ? 0 : 16);
  const hex = item.color ?? "E8E7E2";
  const rgb = [0, 2, 4].map((i) => (parseInt(hex.slice(i, i + 2), 16) / 255).toFixed(3)).join(" ");
  stream.push(`${rgb} rg BT /${item.font ?? "R"} ${item.size} Tf 48 ${y} Td (${esc(item.text)}) Tj ET`);
  y -= item.size > 20 ? 8 : 0;
}
stream.push("0.816 1 0.443 rg 48 820 44 3 re f");
const content = stream.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /R 4 0 R /B 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
}
const xref = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const offset of offsets.slice(1)) pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
writeFileSync("public/dimas-cv.pdf", Buffer.from(pdf, "latin1"));

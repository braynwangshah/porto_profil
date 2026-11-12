export const en = {
  nav: { about: "About", work: "Selected work", contact: "Contact", portfolio: "Portfolio", label: "Main navigation" },
  hero: {
    subtitle: "Developer & Digital Creative — Indonesia",
    description: "I build thoughtful digital experiences across web, mobile, and interface design — shaped by curiosity, clarity, and care.",
    download: "Download CV",
    contact: "Contact me",
    scroll: "Scroll to explore",
    marquee: "Design with purpose · Build with curiosity",
    localTime: "Local time",
  },
  about: {
    section: "01 / A little about me",
    heading: ["Curious by nature.", "Builder by choice."],
    paragraph: "I’m a software development student at SMK Telkom Makassar, exploring how design and technology can make everyday digital experiences more useful and human. My interests span web and mobile development, software engineering, and UI/UX design.",
    portraitAlt: "Portrait of Dimas Iman Ismail",
    location: "Makassar, Indonesia",
  },
  academic: {
    section: "02 / Academic background",
    levels: { senior: "Senior High School / Vocational School", junior: "Junior High School", elementary: "Elementary School" },
  },
  skills: { section: "03 / Skills & tools", developmentTools: "Development tools", marqueeLabel: "Technologies and tools" },
  work: {
    section: "04 / Selected work",
    heading: "Made with intent",
    description: "A selection of web, mobile, and product design projects. Each one an opportunity to learn by making.",
    view: "View",
    openProject: "Open project",
    types: ["Company website", "Digital portfolio", "Inventory system", "Mobile application", "Learning website"],
    descriptions: [
      "A modern, responsive company profile built to support a clear and professional brand presence.",
      "A contemporary personal portfolio designed with AI and developed for the web.",
      "A Roblox inventory website with a modern interface and Supabase powered data.",
      "A mobile app concept for organizing Makassar traditional wedding processes, with a simple user experience.",
      "A digital learning experience that brings lessons, exercises, and study information together.",
    ],
  },
  certificates: { section: "05 / Certificates", heading: "Learning, in practice.", view: "View certificate" },
  contact: {
    section: "06 / Get in touch",
    heading: ["Let’s create", "something great."],
    prompt: "Have a project in mind?",
  },
  footer: { portfolio: "Back to portfolio", name: "Dimas Iman Ismail" },
  gallery: {
    schoolTitle: "Photo gallery",
    certificateTitle: "Certificate gallery",
    photoAlt: "Photo",
    back: "Return to CV page",
    certificateAltPrefix: "Certificate",
    faceRing: "BACK • BACK • BACK • BACK • ",
  },
  menu: { back: "Back", reload: "Reload", language: "Language", english: "English", indonesian: "Bahasa Indonesia", label: "Page actions" },
  language: { switchEnglish: "Switch to English", switchIndonesian: "Ganti ke Bahasa Indonesia" },
  introLabel: "Welcome intro",
  greetings: ["Hello", "Ciao", "Marhaba", "Nǐ hǎo", "Privet", "Konnichiwa", "Annyeonghaseyo", "Bonjour", "Sawasdee", "Guten Tag"],
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? Widen<Item>[]
    : T extends object
      ? { [Key in keyof T]: Widen<T[Key]> }
      : T;

export type Language = "en" | "id";
export type Dictionary = Widen<typeof en>;

export const id: Dictionary = {
  nav: { about: "Tentang", work: "Karya pilihan", contact: "Kontak", portfolio: "Portofolio", label: "Navigasi utama" },
  hero: {
    subtitle: "Developer & Kreator Digital — Indonesia",
    description: "Saya membangun pengalaman digital yang dipikirkan matang di web, mobile, dan desain antarmuka — dibentuk oleh rasa ingin tahu, kejelasan, dan ketelitian.",
    download: "Unduh CV",
    contact: "Hubungi saya",
    scroll: "Gulir untuk menjelajah",
    marquee: "Desain dengan tujuan · Bangun dengan rasa ingin tahu",
    localTime: "Waktu lokal",
  },
  about: {
    section: "01 / Sedikit tentang saya",
    heading: ["Penasaran sejak lahir.", "Pembangun karena pilihan."],
    paragraph: "Saya siswa rekayasa perangkat lunak di SMK Telkom Makassar yang sedang menjelajahi bagaimana desain dan teknologi bisa membuat pengalaman digital sehari-hari lebih berguna dan manusiawi. Minat saya mencakup pengembangan web dan mobile, rekayasa perangkat lunak, dan desain UI/UX.",
    portraitAlt: "Foto Dimas Iman Ismail",
    location: "Makassar, Indonesia",
  },
  academic: {
    section: "02 / Latar belakang pendidikan",
    levels: { senior: "SMK", junior: "SMP", elementary: "SD" },
  },
  skills: { section: "03 / Keahlian & perangkat", developmentTools: "Perangkat pengembangan", marqueeLabel: "Teknologi dan perangkat" },
  work: {
    section: "04 / Karya pilihan",
    heading: "Dibuat dengan tujuan",
    description: "Kumpulan proyek web, mobile, dan desain produk. Masing-masing adalah kesempatan belajar lewat berkarya.",
    view: "Lihat",
    openProject: "Buka proyek",
    types: ["Situs profil perusahaan", "Portofolio digital", "Sistem inventaris", "Aplikasi mobile", "Situs belajar"],
    descriptions: [
      "Situs profil perusahaan modern dan responsif untuk membangun citra merek yang jelas dan profesional.",
      "Portofolio pribadi modern yang dirancang dengan AI dan dikembangkan untuk web.",
      "Situs inventaris Roblox dengan antarmuka modern dan data yang didukung Supabase.",
      "Konsep aplikasi mobile untuk mengatur proses pernikahan adat Makassar dengan pengalaman yang sederhana.",
      "Pengalaman belajar digital yang menyatukan materi, latihan, dan informasi belajar.",
    ],
  },
  certificates: { section: "05 / Sertifikat", heading: "Belajar, lewat praktik.", view: "Lihat sertifikat" },
  contact: {
    section: "06 / Hubungi saya",
    heading: ["Mari buat", "sesuatu yang hebat."],
    prompt: "Punya proyek yang ingin diwujudkan?",
  },
  footer: { portfolio: "Kembali ke portofolio", name: "Dimas Iman Ismail" },
  gallery: {
    schoolTitle: "Galeri foto",
    certificateTitle: "Galeri sertifikat",
    photoAlt: "Foto",
    back: "Kembali ke halaman CV",
    certificateAltPrefix: "Sertifikat",
    faceRing: "KEMBALI • KEMBALI • KEMBALI • KEMBALI • ",
  },
  menu: { back: "Kembali", reload: "Muat ulang", language: "Bahasa", english: "English", indonesian: "Bahasa Indonesia", label: "Aksi halaman" },
  language: { switchEnglish: "Switch to English", switchIndonesian: "Ganti ke Bahasa Indonesia" },
  introLabel: "Intro sambutan",
  greetings: ["Halo", "Hai", "Marhaban", "Nǐ hǎo", "Privet", "Konnichiwa", "Annyeonghaseyo", "Bonjour", "Sawasdee", "Guten Tag"],
};

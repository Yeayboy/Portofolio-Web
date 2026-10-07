export const personalInfo = {
  name: "Farih Ramdan Wildantama",
  shortName: "F.RW",
  roles: ["UI/UX Designer", "Frontend Dev", "Full Stack"],
  tagline: "Building pixel-perfect interfaces & scalable systems —",
  taglineSub: "dari wireframe sampai production, siap dari hari pertama.",
  bio: "Mahasiswa aktif Teknologi Informasi di Universitas Bina Sarana Informatika (GPA 3.55) dengan passion di bidang UI/UX Design dan Web Development. Berpengalaman membangun produk dari wireframe hingga production-ready code menggunakan Next.js, Tailwind CSS, dan Framer Motion.",
  bioEn:
    "An active Information Technology student with a deep enthusiasm for crafting intuitive digital experiences. From designing pixel-perfect interfaces in Figma to building responsive full-stack web applications.",
  education: "Universitas Bina Sarana Informatika",
  gpa: "3.55 / 4.00",
  location: "Kelapa Gading, Jakarta Utara",
  certification: "Sistem Basis Data 2025",
  email: "farihrmdn123@gmail.com",
  phone: "+62 852-1014-2214",
  linkedin: "https://linkedin.com/in/farih-ramdan-wildantama",
  github: "https://github.com/Yeayboy",
  githubUsername: "Yeayboy",
  cvPath: "/images/Farih_CV.pdf",
  photo: "/images/profile.jpeg",
};

export const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "3.55", label: "GPA / 4.00" },
  { num: "2", label: "Years Coding" },
];

export const skillCategories = [
  {
    title: "UI/UX Design",
    icon: "🎨",
    color: "blue",
    items: [
      "UI Design",
      "UX Research",
      "Wireframing",
      "High-Fi Prototype",
      "Design System",
      "Figma / FigJam",
    ],
  },
  {
    title: "Frontend",
    icon: "💻",
    color: "red",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS / JS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: "🔧",
    color: "yellow",
    items: [
      "PHP / Laravel",
      "MySQL",
      "Database Design",
      "REST API (Basic)",
      "SQL / CRUD",
      "ERD Modeling",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "dark",
    items: [
      "Figma / Canva",
      "VS Code",
      "Python",
      "Android Studio",
      "MySQL Workbench",
      "Git / GitHub",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Plants E-Commerce App",
    category: "uiux",
    categoryLabel: "UI/UX",
    description:
      "Perancangan UI/UX aplikasi mobile e-commerce tanaman hias. Mencakup wireframe, design system, dan high-fidelity prototype berbasis Figma.",
    tech: ["Figma", "Wireframe", "Design System"],
    github: "https://github.com/Yeayboy/Plant-Apps-Design",
    demo: null,
    journal: null,
    image: "/images/proj-plants.png",
  },
  {
    id: 2,
    title: "Kopi Tugu Lampung",
    category: "webdev",
    categoryLabel: "Web Dev",
    description:
      "Website promosi UMKM kopi dengan animasi interaktif Framer Motion, katalog produk, dan performa optimal di Next.js.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Yeayboy/Website-Kopi-Tugu",
    demo: "https://kopi-tugu-web.vercel.app",
    journal: null,
    image: "/images/proj-kopi.png",
  },
  {
    id: 3,
    title: "Perpus Bubuku",
    category: "webdev",
    categoryLabel: "Web Dev",
    description:
      "Sistem informasi manajemen perpustakaan web — sirkulasi peminjaman, inventaris buku, ERD relasional, dan operasi CRUD lengkap.",
    tech: ["PHP", "MySQL", "CRUD"],
    github: "https://github.com/Yeayboy/Perpus-Bubuku",
    demo: null,
    journal: null,
    image: "/images/proj-perpus.png",
  },
  {
    id: 4,
    title: "Klasifikasi Hoax TF-IDF SVM",
    category: "aiml",
    categoryLabel: "AI/ML",
    description:
      "Model klasifikasi berita hoaks berbahasa Indonesia menggunakan TF-IDF + SVM. Dipublikasikan di jurnal internasional Jerkin (2026).",
    tech: ["Python", "TF-IDF", "SVM"],
    github: null,
    demo: null,
    journal: "https://jerkin.org/index.php/jerkin/article/view/5078",
    image: "/images/proj-hoax.png",
  },
  {
    id: 5,
    title: "AI Auto Video Clipper",
    category: "aiml",
    categoryLabel: "AI/ML",
    description:
      "Pipeline otomatis end-to-end: potong video panjang (podcast/livestream) menjadi klip pendek vertikal dengan AI transcription dan smart editing.",
    tech: ["Python", "FFmpeg", "Gemini API", "Deepgram"],
    github: "https://github.com/Yeayboy/AI-Auto-Clipp-Python-Program",
    demo: null,
    journal: null,
    image: "/images/proj-clipper.png",
  },
];

export const marqueeItems = [
  "UI/UX Design",
  "Frontend Development",
  "Next.js",
  "Figma",
  "Tailwind CSS",
  "Framer Motion",
  "Full Stack Developer",
  "Laravel & PHP",
  "MySQL",
];

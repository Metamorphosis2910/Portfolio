/**
 * Все данные (контент) портфолио в одном месте.
 *
 * Чтобы обновить текст, навыки, проекты или опыт работы —
 * достаточно отредактировать этот файл, компоненты трогать не нужно.
 */

/* ---------------------------------- Типы ---------------------------------- */

/** Пункт навигации в шапке: подпись, якорная ссылка и id секции. */
export type NavItem = { label: string; href: string; id: string };

/** Группа навыков: название категории и список технологий-тегов. */
export type SkillGroup = { title: string; tags: string[] };

/** Карточка проекта в секции Projects. */
export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  /** Путь к скриншоту проекта (лежат в public/projects/). */
  image?: string;
  /** Ссылка на работающий сайт. */
  liveUrl?: string;
  /** Ссылка на репозиторий с кодом. */
  codeUrl?: string;
};

/** Запись об опыте работы в секции Experience. */
export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

/* ------------------------------- Контакты --------------------------------- */

/** Контактные данные и ссылки на профили (используются в hero, Contact и футере). */
export const CONTACTS = {
  email: "mir-hank@yandex.ru",
  phone: "+998 (70) 195-33-39",
  telegram: "@vktdrkstdt",
  telegramUrl: "https://t.me/vktdrkstdt",
  githubUrl: "https://github.com/Metamorphosis2910",
  location: "Tashkent, Uzbekistan",
};

/** Файл резюме: лежит в public/, при скачивании получает оригинальное имя. */
export const RESUME = {
  url: `${import.meta.env.BASE_URL}resume.pdf`,
  downloadName: "Мирзаматов Артур Алимович.pdf",
};

/* ------------------------------- Навигация -------------------------------- */

/** Секции сайта, на которые ведёт меню в шапке. */
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

/* -------------------------------- Навыки ---------------------------------- */

/** Категории навыков для секции Skills (соответствуют резюме). */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend Frameworks",
    tags: ["React", "Next.js", "Vite", "Bootstrap 4.1"],
  },
  {
    title: "Language & Markup",
    tags: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Pug"],
  },
  {
    title: "Styling & Layout",
    tags: ["Tailwind CSS", "Responsive Design", "Cross-browser Layout"],
  },
  {
    title: "Backend & APIs",
    tags: ["Node.js", "JSON API", "PostgreSQL"],
  },
  {
    title: "AI Tools",
    tags: ["Claude", "ChatGPT"],
  },
  {
    title: "Tooling & DevOps",
    tags: ["Git", "GitHub", "npm", "ESLint", "Gulp", "Docker", "Linux", "Vercel"],
  },
];

/* -------------------------------- Проекты --------------------------------- */

/** Карточки проектов для секции Projects. */
export const PROJECTS: ProjectItem[] = [
  {
    title: "FPZH.uz — My Startup",
    description:
      "A full-stack web application startup I founded and developed. Features user registration/authorization, database management, and adaptive cross-browser design. Built with modern backend technologies.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Go", "PostgreSQL", "Docker"],
    image: `${import.meta.env.BASE_URL}projects/fpzh.png`,
    liveUrl: "https://fpzh.uz",
    codeUrl: "https://github.com/Leha23112004/fpzh_frame",
  },
  {
    title: "Multi-page Website",
    description:
      "A responsive static website showcasing adaptive cross-browser development skills. Features mobile-optimized design for all screen resolutions and clean, semantic markup.",
    tags: ["HTML5", "CSS3", "Responsive Design", "Cross-browser Compatibility"],
    image: `${import.meta.env.BASE_URL}projects/multipage.jpg`,
    liveUrl: "https://metamorphosis2910.github.io/5pages/",
    codeUrl: "https://github.com/Metamorphosis2910/5pages",
  },
  {
    title: "Developer Portfolio (This Project)",
    description:
      "A modern, responsive portfolio website built with a clean component architecture. Features dark/light mode toggle and smooth section navigation.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,
    liveUrl: "https://metamorphosis2910.github.io/Portfolio/",
    codeUrl: "https://github.com/Metamorphosis2910/Portfolio",
  },
];

/* ----------------------------- Опыт работы -------------------------------- */

/** Записи об опыте работы для секции Experience (соответствуют резюме). */
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Team Lead & Founder",
    company: "FPZH.uz — Фонд Помощи Животным (Own Startup)",
    period: "Jul 2025 — Present",
    description:
      "Founded and led a 4-person development team to create a full-stack web application. Managed project timeline, coordinated team members, and served as supreme frontend developer while overseeing the entire development process.",
    achievements: [
      "Successfully founded and launched fpzh.uz startup",
      "Led team of 4: back-end developer, UI/UX designer, and SMM manager",
      "Implemented user registration/authorization system with Go and PostgreSQL",
      "Delivered adaptive cross-browser design with mobile optimization",
      "Managed project using Docker for containerization and deployment",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Bootstrap 4", "HTML5", "CSS3", "Go Language", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer (NDA Project)",
    company: "Okna v Tsvet LLC, Moscow",
    period: "Aug 2024 — Jul 2025",
    description:
      "Worked on a commercial web platform under NDA, contributing to frontend architecture and feature development in a cross-functional team. Collaborated closely with backend engineers and designers to deliver production-ready features and improve overall system performance.",
    achievements: [
      "Developed and maintained scalable UI components using React and TypeScript",
      "Implemented API integrations and handled complex state management",
      "Improved performance and reduced unnecessary re-renders",
      "Participated in code reviews and architectural discussions",
      "Contributed to deployment and build optimization processes",
    ],
    technologies: ["React", "Next.js", "TypeScript", "REST API", "Redux/Zustand", "Git"],
  },
];

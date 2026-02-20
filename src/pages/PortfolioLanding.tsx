import React, { useEffect, useMemo, useState } from "react";
import {
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  MapPin, 
  Phone,
  Send,
  ExternalLink,
  Code2,
  Image as ImageIcon,
  
} from "lucide-react";


type NavItem = { label: string; href: string; id: string };

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 72;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function PortfolioLanding() {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: "About", href: "#about", id: "about" },
      { label: "Skills", href: "#skills", id: "skills" },
      { label: "Projects", href: "#projects", id: "projects" },
      { label: "Experience", href: "#experience", id: "experience" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    scrollToId(item.id);
    history.replaceState(null, "", item.href);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", "#");
            }}
            className="text-sm font-medium tracking-tight text-zinc-900 no-underline hover:underline dark:text-zinc-50"
            aria-label="Go to top"
          >
            Arthur
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => onNavClick(e, item)}
                className="text-sm text-zinc-500 no-underline transition-colors hover:text-zinc-900  dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              setTheme((t) => {
                const next = t === "dark" ? "light" : "dark";
                applyTheme(next);
                localStorage.setItem("theme", next);
                return next;
            });
            }}

            className={cx(
              "inline-flex h-9 w-9 items-center justify-center rounded-full",
              "border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-50",
              "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
            )}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative">
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex min-h-[72vh] flex-col items-center justify-center py-14 text-center">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Exploring impactful opportunities
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                Hi, I’m Arthur
                <br />
                I build systems, not just interfaces.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                Frontend developer focused on scalable architecture, performance, and real product impact using React, Next.js, and TypeScript.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("contact");
                    history.replaceState(null, "", "#contact");
                  }}
                  className={cx(
                    "no-underline",
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                    "bg-zinc-900 text-white shadow-sm transition-colors hover:bg-zinc-800",
                    "dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                  )}
                >
                  <Mail size={16} />
                  Get In Touch
                  <ChevronRight size={16} className="opacity-70" />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className={cx(
                    "no-underline",
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                    "border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                  )}
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>

              <div className="mt-7 flex items-center justify-center gap-5 text-zinc-500 dark:text-zinc-400">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mir-hank@yandex.ru"
                  aria-label="Email"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

<AboutSection />
<SkillsSection />
<ExperienceSection />
<ProjectsSection />
<ContactSection />


<footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:items-center">
    <div>
      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Mirzamatov Arthur</div>
      <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">Frontend Developer &amp; Team Lead</div>
    </div>

    <div className="flex items-center gap-5 text-zinc-500 md:justify-center dark:text-zinc-400">
      <a
        href="https://github.com/Metamorphosis2910?tab=repositories"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub"
        className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
        className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="mailto:mir-hank@yandex.ru"
        aria-label="Email"
        className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        <Mail size={20} />
      </a>
    </div>

    <div className="text-xs text-zinc-600 md:text-right dark:text-zinc-400">
      <div>Made with ❤️ using React &amp; Tailwind CSS</div>
      <div className="mt-2">© {new Date().getFullYear()} Mirzamatov Arthur. All rights reserved.</div>
    </div>
  </div>
</footer>
      </main>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            About Me
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Get to know more about my background and what drives me
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* Left: text */}
          <div className="space-y-7 text-base leading-6 text-zinc-700 dark:text-zinc-300">
            <p>
              I&apos;m Mirzamatov Arthur, a 22-year-old passionate frontend developer with 2 years of
              professional experience building web applications. Currently pursuing my degree in
              &quot;Экономика предприятий и организаций&quot; at РЭУ Им. Плеханова in Moscow, I
              specialize in React, Next.js, TypeScript, and Vue.js.
            </p>

            <p>
              As a team leader, I founded and led the development of fpzh.uz, managing a 4-person team
              consisting of a back-end developer, UI/UX Figma designer, and SMM manager. This
              experience taught me valuable leadership skills and project management capabilities
              alongside my technical expertise.
            </p>

            <p>
              With B2+ English proficiency and experience working with international teams, I&apos;m
              always excited about new challenges and opportunities to work on innovative projects
              that make a real impact.
            </p>
          </div>

          {/* Right: cards */}
          <div className="space-y-3">
            <StatCard
              label="Experience"
              value="2 Years"
              sub="Frontend Development"
            />
            <StatCard label="Projects" value="3 completed, 3 NDA" sub="Web Applications" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <StatCard label="Languages" value="B2+" sub="English Level" />
            <StatCard label="Languages" value="Native" sub="Russian Level" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SkillGroup = {
  title: string;
  tags: string[];
};

function SkillsSection() {
  const groups: SkillGroup[] = [
    {
      title: "Frontend Frameworks",
      tags: ["React", "Vite", "Bootstrap 4.1"],
    },
    {
      title: "Language & Markup",
      tags: ["TypeScript", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Styling",
      tags: ["Tailwind CSS"],
    },
    {
      title: "UI & Icons",
      tags: ["Lucide React", "shadcn/ui", "Framer Motion"],
    },
    {
      title: "Routing & Navigation",
      tags: ["Anchor navigation (SPA)"],
    },
    {
      title: "Tooling",
      tags: ["npm", "ESLint", "Webpack", "Vite", "Git", "Github", "Docker", "Node.js", "Vercel", "PostgreSQL"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {g.title}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* последняя карточка слева снизу как на макете можно сделать шире,
            но сейчас сетка автоматически поставит её красиво */}
      </div>
    </section>
  );
}

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

function ProjectsSection() {
  const projects: ProjectItem[] = [
    {
      title: "FPZH.uz — My Startup",
      description:
        "A full-stack web application startup I founded and developed. Features user registration/authorization, database management, and adaptive cross-browser design. Built with modern backend technologies.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Go", "PostgreSQL", "Docker"],
      liveUrl: "https://fpzh.uz",
      codeUrl: "https://github.com/Metamorphosis2910?tab=repositories",
    },
    {
      title: "Multi-page Website",
      description:
        "A responsive static website showcasing adaptive cross-browser development skills. Features mobile-optimized design for all screen resolutions and clean, semantic markup.",
      tags: ["HTML5", "CSS3", "Responsive Design", "Cross-browser Compatibility"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/Metamorphosis2910?tab=repositories",
    },
    {
      title: "Developer Portfolio (This Project)",
      description:
        "A modern, responsive portfolio website built with a clean component architecture. Features dark/light mode toggle and smooth section navigation.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
      liveUrl: "#",
      codeUrl: "https://github.com/Metamorphosis2910?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            A showcase of my web development projects using different technology stacks
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              {/* image placeholder */}
              <div className="flex h-44 items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                <div className="flex items-center gap-2 text-zinc-400">
                  <ImageIcon size={28} />
                </div>
              </div>

              <div className="p-6">
                <div className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={p.liveUrl || "#"}
                    target={p.liveUrl && p.liveUrl !== "#" ? "_blank" : undefined}
                    rel={p.liveUrl && p.liveUrl !== "#" ? "noreferrer noopener" : undefined}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium no-underline",
                      "bg-zinc-900 text-white shadow-sm transition-colors hover:bg-zinc-800",
                      "dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                    )}
                    aria-label={`Open live demo: ${p.title}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={p.codeUrl || "#"}
                    target={p.codeUrl ? "_blank" : undefined}
                    rel={p.codeUrl ? "noreferrer noopener" : undefined}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium no-underline",
                      "border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50",
                      "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                    )}
                    aria-label={`Open code: ${p.title}`}
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = "mirzamatov.arthur@example.com"; // поменяешь на свой реальный
    const subject = form.subject?.trim() || "Message from portfolio";
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ];
    const body = bodyLines.join("\n");

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Let&apos;s discuss your next project or opportunity
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <div className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Let&apos;s Connect
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              I&apos;m always interested in hearing about new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon={<Mail size={18} />}
                label="Email"
                value="mir-hank@yandex.ru"
              />
              <ContactRow
                icon={<Phone size={18} />}
                label="Phone"
                value="+7 (XXX) XXX-XX-XX"
              />
              <ContactRow
                icon={<MapPin size={18} />}
                label="Location"
                value="Moscow, Russia"
              />
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Send Me a Message
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder=""
                  type="text"
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder=""
                  type="email"
                />
              </div>

              <Field
                label="Subject"
                value={form.subject}
                onChange={onChange("subject")}
                placeholder=""
                type="text"
              />

              <div>
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  rows={4}
                  className={cx(
                    "mt-2 w-full resize-none rounded-lg px-3 py-2 text-sm outline-none",
                    "border border-zinc-200 bg-zinc-100/60 text-zinc-900 placeholder:text-zinc-400",
                    "focus:ring-2 focus:ring-zinc-900/10",
                    "dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-50 dark:focus:ring-zinc-50/10"
                  )}
                />
              </div>

              <button
                type="submit"
                className={cx(
                  "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                  "bg-zinc-900 text-white shadow-sm transition-colors hover:bg-zinc-800",
                  "dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                )}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow(props: { icon: React.ReactNode; label: string; value: string }) {
  const { icon, label, value } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
        {icon}
      </div>
      <div>
        <div className="text-xs text-zinc-600 dark:text-zinc-400">{label}</div>
        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{value}</div>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
}) {
  const { label, value, onChange, type, placeholder } = props;
  return (
    <div>
      <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cx(
          "mt-2 w-full rounded-lg px-3 py-2 text-sm outline-none",
          "border border-zinc-200 bg-zinc-100/60 text-zinc-900 placeholder:text-zinc-400",
          "focus:ring-2 focus:ring-zinc-900/10",
          "dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-50 dark:focus:ring-zinc-50/10"
        )}
      />
    </div>
  );
}


function StatCard(props: { label: string; value: string; sub: string }) {
  const { label, value, sub } = props;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-xs text-zinc-600 dark:text-zinc-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {value}
      </div>
      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{sub}</div>
    </div>
  );
}

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

function ExperienceSection() {
const items: ExperienceItem[] = [
  {
    role: "Team Lead & Founder",
    company: "FPZH.uz (Own Startup)",
    period: "2025 - 2026",
    description:
      "Founded and led a 4-person development team to create a full-stack web application. Managed project timeline, coordinated team members, and served as supreme frontend developer while overseeing the entire development process.",
    achievements: [
      "Successfully founded and launched fpzh.uz startup",
      "Led team of 4: back-end developer, UI/UX designer, and SMM manager",
      "Implemented user registration/authorization system with Go and PostgreSQL",
      "Delivered adaptive cross-browser design with mobile optimization",
      "Managed project using Docker for containerization and deployment",
    ],
    technologies: ["Bootstrap 4", "HTML5", "CSS3", "Go Language", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer (NDA Project)",
    company: "Confidential Product",
    period: "2024 - 2025",
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




  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            My professional journey in frontend development
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {items.map((item) => (
            <div
              key={`${item.role}-${item.period}`}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {item.role}
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.company}
                  </div>
                </div>

                <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                  {item.period}
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>

              <div className="mt-6">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Key Achievements:
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span className="leading-6">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Technologies:
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


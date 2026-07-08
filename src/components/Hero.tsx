/**
 * Hero-секция (первый экран): приветствие, краткое позиционирование,
 * кнопки «Get In Touch» и «Download Resume», ссылки на соцсети.
 */
import { ChevronRight, Download, Github, Mail, Send } from "lucide-react";
import { CONTACTS, RESUME } from "../data/portfolio";
import { cx, scrollToId } from "../lib/utils";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex min-h-[72vh] flex-col items-center justify-center py-14 text-center">
          {/* Бейдж со статусом поиска работы */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Exploring impactful opportunities
            </span>
          </div>

          {/* Главный заголовок */}
          <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Hi, I’m Arthur
            <br />
            I build systems, not just interfaces.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Frontend developer focused on scalable architecture, performance, and real product impact using React, Next.js, and TypeScript.
          </p>

          {/* Основные CTA-кнопки */}
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

            {/* Скачивание резюме (PDF лежит в public/resume.pdf) */}
            <a
              href={RESUME.url}
              download={RESUME.downloadName}
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

          {/* Ссылки на GitHub, Telegram и почту */}
          <div className="mt-7 flex items-center justify-center gap-5 text-zinc-500 dark:text-zinc-400">
            <a
              href={CONTACTS.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              <Github size={20} />
            </a>
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              <Send size={20} />
            </a>
            <a
              href={`mailto:${CONTACTS.email}`}
              aria-label="Email"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

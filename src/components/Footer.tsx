/**
 * Футер сайта: имя и роль, ссылки на соцсети, копирайт.
 */
import { Github, Mail, Send } from "lucide-react";
import { CONTACTS } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:items-center">
        {/* Имя и роль */}
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Mirzamatov Arthur
          </div>
          <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Frontend Developer &amp; Team Lead
          </div>
        </div>

        {/* Соцсети */}
        <div className="flex items-center gap-5 text-zinc-500 md:justify-center dark:text-zinc-400">
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

        {/* Копирайт */}
        <div className="text-xs text-zinc-600 md:text-right dark:text-zinc-400">
          <div>Made with ❤️ using React &amp; Tailwind CSS</div>
          <div className="mt-2">
            © {new Date().getFullYear()} Mirzamatov Arthur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

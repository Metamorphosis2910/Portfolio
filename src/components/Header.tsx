/**
 * Фиксированная шапка сайта: логотип-имя, якорное меню по секциям
 * и кнопка переключения светлой/тёмной темы.
 */
import React from "react";
import { Moon, Sun } from "lucide-react";
import { NAV_ITEMS, type NavItem } from "../data/portfolio";
import { cx, scrollToId } from "../lib/utils";
import { useTheme } from "../lib/theme";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  /** Перехватывает клик по пункту меню: плавный скролл вместо прыжка по якорю. */
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    scrollToId(item.id);
    history.replaceState(null, "", item.href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Логотип: клик возвращает наверх страницы */}
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

        {/* Меню секций (скрыто на мобильных) */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => onNavClick(e, item)}
              className="text-sm text-zinc-500 no-underline transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Переключатель темы */}
        <button
          type="button"
          onClick={toggleTheme}
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
  );
}

/**
 * Логика светлой/тёмной темы.
 *
 * Тема хранится в localStorage и применяется через класс `dark`
 * на <html> — так работают dark:-модификаторы Tailwind.
 */
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

/**
 * Определяет начальную тему: сначала смотрит сохранённый выбор в localStorage,
 * если его нет — берёт системную настройку (prefers-color-scheme).
 */
export function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

/** Применяет тему к документу: добавляет/убирает класс `dark` на <html>. */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

/**
 * Хук управления темой: держит текущее значение в состоянии,
 * синхронизирует его с <html> и localStorage, отдаёт функцию переключения.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}

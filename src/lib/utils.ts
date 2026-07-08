/**
 * Общие утилиты, используемые по всему приложению.
 */

/**
 * Склеивает CSS-классы в одну строку, отбрасывая falsy-значения
 * (лёгкий аналог библиотеки clsx). Удобно для условных классов Tailwind.
 */
export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Плавно прокручивает страницу к секции с указанным id,
 * учитывая высоту фиксированной шапки (чтобы заголовок секции не прятался под ней).
 */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 72; // высота шапки + небольшой отступ
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

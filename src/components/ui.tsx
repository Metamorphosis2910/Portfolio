/**
 * Мелкие переиспользуемые UI-элементы (строительные блоки секций).
 */
import React from "react";
import { cx } from "../lib/utils";

/**
 * Заголовок секции: крупный тайтл + серый подзаголовок по центру.
 * Используется во всех секциях (About, Skills, Projects и т.д.).
 */
export function SectionHeading(props: { title: string; subtitle: string }) {
  const { title, subtitle } = props;
  return (
    <div className="text-center">
      <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
    </div>
  );
}

/**
 * Маленький «чип» с названием технологии.
 * Используется в навыках, карточках проектов и опыте работы.
 */
export function Tag(props: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      {props.children}
    </span>
  );
}

/**
 * Карточка со статистикой в секции About
 * (годы опыта, число проектов, уровень языков).
 */
export function StatCard(props: { label: string; value: string; sub: string }) {
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

/**
 * Строка контакта в секции Contact: иконка в квадратике + подпись + значение.
 */
export function ContactRow(props: { icon: React.ReactNode; label: string; value: string }) {
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

/**
 * Текстовое поле формы обратной связи (label + input).
 */
export function Field(props: {
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

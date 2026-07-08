/**
 * Секция «Work Experience»: карточки с местами работы —
 * должность, компания, период, описание, достижения и стек технологий.
 * Данные лежат в data/portfolio.ts (EXPERIENCE_ITEMS).
 */
import { EXPERIENCE_ITEMS } from "../data/portfolio";
import { SectionHeading, Tag } from "./ui";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey in frontend development"
        />

        <div className="mt-14 space-y-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={`${item.role}-${item.period}`}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              {/* Шапка карточки: должность, компания и период работы */}
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

              {/* Список ключевых достижений */}
              <div className="mt-6">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Key Achievements:
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span className="leading-6">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Использованные технологии */}
              <div className="mt-7">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Technologies:
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
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

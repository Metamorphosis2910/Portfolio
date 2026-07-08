/**
 * Секция «Skills & Technologies»: сетка карточек с категориями навыков.
 * Сами навыки описаны в data/portfolio.ts (SKILL_GROUPS).
 */
import { SKILL_GROUPS } from "../data/portfolio";
import { SectionHeading, Tag } from "./ui";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {group.title}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

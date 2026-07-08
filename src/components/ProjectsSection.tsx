/**
 * Секция «Featured Projects»: карточки проектов со скриншотом,
 * описанием, тегами технологий и кнопками Live Demo / Code.
 * Данные лежат в data/portfolio.ts (PROJECTS), скриншоты — в public/projects/.
 */
import { Code2, ExternalLink, Image as ImageIcon } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import { cx } from "../lib/utils";
import { SectionHeading, Tag } from "./ui";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my web development projects using different technology stacks"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              {/* Скриншот проекта (или иконка-заглушка, если его нет) */}
              <div className="flex h-44 items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex items-center gap-2 text-zinc-400">
                    <ImageIcon size={28} />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Теги технологий проекта */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {/* Кнопки: открыть сайт и посмотреть код */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.liveUrl || "#"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noreferrer noopener" : undefined}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium no-underline",
                      "bg-zinc-900 text-white shadow-sm transition-colors hover:bg-zinc-800",
                      "dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                    )}
                    aria-label={`Open live demo: ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.codeUrl || "#"}
                    target={project.codeUrl ? "_blank" : undefined}
                    rel={project.codeUrl ? "noreferrer noopener" : undefined}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium no-underline",
                      "border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50",
                      "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                    )}
                    aria-label={`Open code: ${project.title}`}
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

/**
 * Секция «About Me»: рассказ о себе (слева)
 * и карточки со статистикой — опыт, проекты, языки (справа).
 */
import { SectionHeading, StatCard } from "./ui";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and what drives me"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* Слева: текст о себе */}
          <div className="space-y-7 text-base leading-6 text-zinc-700 dark:text-zinc-300">
            <p>
              I&apos;m Mirzamatov Arthur, a 22-year-old passionate frontend developer with 2 years of
              professional experience building web applications. Currently pursuing my degree in
              &quot;Экономика предприятий и организаций&quot; at РЭУ Им. Плеханова in Moscow, I
              specialize in React, Next.js, TypeScript, and Node.js.
            </p>

            <p>
              As a team leader, I founded and led the development of fpzh.uz, managing a 4-person team
              consisting of a back-end developer, UI/UX Figma designer, and SMM manager. This
              experience taught me valuable leadership skills and project management capabilities
              alongside my technical expertise.
            </p>

            <p>
              With B2 English proficiency and experience working with international teams, I&apos;m
              always excited about new challenges and opportunities to work on innovative projects
              that make a real impact. Currently I&apos;m studying backend development to become a
              full-fledged fullstack engineer.
            </p>
          </div>

          {/* Справа: карточки со статистикой */}
          <div className="space-y-3">
            <StatCard label="Experience" value="2 Years" sub="Frontend Development" />
            <StatCard label="Projects" value="3 completed, 3 NDA" sub="Web Applications" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <StatCard label="Languages" value="B2" sub="English Level" />
              <StatCard label="Languages" value="Native" sub="Russian Level" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

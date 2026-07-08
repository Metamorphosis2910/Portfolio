/**
 * Главная (и единственная) страница портфолио.
 *
 * Собирает лендинг из отдельных секций-компонентов:
 * шапка → hero → обо мне → навыки → опыт → проекты → контакты → футер.
 *
 * Контент секций лежит в src/data/portfolio.ts,
 * сами секции — в src/components/.
 */
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />

      {/* pt-20 — отступ под фиксированную шапку */}
      <main className="pt-20">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

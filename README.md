# Portfolio — Arthur Mirzamatov

Персональный сайт-портфолио frontend-разработчика: обо мне, навыки, опыт работы, проекты и контакты. Одностраничный лендинг с якорной навигацией, светлой/тёмной темой и скачиванием резюме в PDF.

**Живой сайт:** https://metamorphosis2910.github.io/Portfolio/

## Стек

- **React 19** + **TypeScript** — UI и типизация
- **Vite 7** — сборка и dev-сервер
- **Tailwind CSS 4** — стилизация (включая тёмную тему через класс `dark`)
- **lucide-react** — иконки
- **GitHub Actions + GitHub Pages** — автодеплой

## Структура проекта

```
├── index.html                  # HTML-каркас, точка входа Vite
├── public/
│   ├── resume.pdf              # Резюме (кнопка Download Resume)
│   └── projects/               # Скриншоты проектов для карточек
├── src/
│   ├── main.tsx                # Монтирование React-приложения
│   ├── App.tsx                 # Корневой компонент
│   ├── pages/
│   │   └── PortfolioLanding.tsx  # Композиция страницы из секций
│   ├── components/
│   │   ├── Header.tsx          # Шапка: меню + переключатель темы
│   │   ├── Hero.tsx            # Первый экран: приветствие, CTA, соцсети
│   │   ├── AboutSection.tsx    # Обо мне + карточки статистики
│   │   ├── SkillsSection.tsx   # Навыки по категориям
│   │   ├── ExperienceSection.tsx # Опыт работы
│   │   ├── ProjectsSection.tsx # Карточки проектов
│   │   ├── ContactSection.tsx  # Контакты + форма (mailto)
│   │   ├── Footer.tsx          # Футер
│   │   └── ui.tsx              # Мелкие переиспользуемые элементы
│   ├── data/
│   │   └── portfolio.ts        # Весь контент сайта (тексты, ссылки, навыки)
│   └── lib/
│       ├── theme.ts            # Логика светлой/тёмной темы
│       └── utils.ts            # cx(), плавный скролл к секциям
└── .github/workflows/deploy.yml  # Деплой на GitHub Pages
```

## Как редактировать контент

Практически весь контент (навыки, проекты, опыт, контакты, путь к резюме) вынесен в [`src/data/portfolio.ts`](src/data/portfolio.ts) — компоненты менять не нужно:

- **Обновить резюме** — заменить `public/resume.pdf`
- **Добавить проект** — дописать объект в массив `PROJECTS`, скриншот положить в `public/projects/`
- **Изменить навыки/опыт** — отредактировать `SKILL_GROUPS` / `EXPERIENCE_ITEMS`
- **Контакты и соцсети** — объект `CONTACTS`

Тексты секции About находятся в `src/components/AboutSection.tsx`.

## Запуск локально

```bash
npm install       # установить зависимости
npm run dev       # dev-сервер с hot reload (http://localhost:5173/Portfolio/)
npm run build     # production-сборка в dist/
npm run preview   # локальный просмотр production-сборки
npm run lint      # проверка ESLint
```

## Деплой

Сайт автоматически собирается и публикуется на GitHub Pages при каждом пуше в ветку `main` (workflow [`deploy.yml`](.github/workflows/deploy.yml)). База путей `/Portfolio/` задана в [`vite.config.ts`](vite.config.ts).

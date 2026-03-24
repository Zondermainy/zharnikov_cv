# Zharnikov Nikolay — DevOps Engineer CV

## Concept & Vision

Минималистичная, но эффектная сайт-визитка DevOps инженера с терминальной/консольной эстетикой. Визуальная метафора — "DevOps как код": элементы интерфейса напоминают терминал, логи, конфигурационные файлы. При этом сайт современный, отзывчивый и запоминающийся. Переключение языков — бесшовное, как hot-reload в CI/CD pipeline.

## Design Language

### Aesthetic Direction
Тёмная тема в стиле терминала/IDE с акцентами в виде "syntax highlighting" — зелёный для успеха/статуса, голубой для информации, оранжевый для акцентов. Моноширинный шрифт для "кода", современный sans-serif для контента.

### Color Palette
- `--bg-primary`: #0d1117 (GitHub dark)
- `--bg-secondary`: #161b22
- `--bg-card`: #21262d
- `--text-primary`: #e6edf3
- `--text-secondary`: #8b949e
- `--accent-green`: #3fb950 (status/success)
- `--accent-blue`: #58a6ff (links/info)
- `--accent-orange`: #d29922 (highlights)
- `--accent-purple`: #a371f7 (special)
- `--border`: #30363d

### Typography
- Headings: `JetBrains Mono` (monospace, technical feel)
- Body: `Inter` (readable, modern)
- Code/Terminal elements: `Fira Code` or `JetBrains Mono`

### Spatial System
- Base unit: 8px
- Section padding: 64px vertical
- Card padding: 24px
- Gap between elements: 16px

### Motion Philosophy
- Typing effect для заголовков (как в терминале печатается)
- Smooth fade-in для секций при скролле
- Subtle glow effect на hover для интерактивных элементов
- Language switcher с анимацией "reload" 

## Layout & Structure

### Hero Section
- Большой терминальный блок с "печатающимся" текстом: имя, должность
-ascii-art или терминальная рамка
- Быстрые контакты (email, telegram, linkedin) в стиле "shell commands"

### Experience Section
- Карточки в стиле "log entries" с timestamp
- Визуальная timeline с точками как в git log
- Технологии отображаются как "теги" в стиле issue labels

### Skills Section
- В стиле "package.json dependencies" или "docker-compose labels"
- Progress bars как "health checks" или "uptime indicators"

### Language Switcher
- В правом верхнем углу, в стиле "flag icons" или "locale codes" (RU/EN/JP)
- Выбранный язык подсвечен

### Footer
- Минималистичный, "Copyright 2024 zharnikov.dev | Built with Nuxt"

## Features & Interactions

### Language Switching
- URL-based locale: `/en/`, `/ru/`, `/jp/`
- Сохранение выбора в cookie
- Анимация перехода контента (fade)

### Contact Links
- Email: открывает mailto
- Telegram: открывает t.me
- LinkedIn: открывает в новой вкладке
- Hover эффект: подсветка + tooltip

### Responsive Design
- Desktop: полная терминальная эстетика
- Mobile: упрощенный layout, но сохранение стиля

## Component Inventory

1. **TerminalHeader** — "Окно" терминала с кнопками (× ○ ●)
2. **TypingTitle** — Компонент с эффектом печати
3. **ExperienceCard** — Карточка опыта с timeline
4. **SkillBadge** — Тег технологии (стиль issue label)
5. **ContactLink** — Ссылка с иконкой и hover
6. **LanguageSwitcher** — Переключатель языков
7. **ProgressBar** — Индикатор уровня навыка (health check style)

## Technical Approach

- **Framework**: Nuxt 3
- **Styling**: CSS Variables + scoped styles (no Tailwind)
- **i18n**: @nuxtjs/i18n модуль
- **Fonts**: Google Fonts (JetBrains Mono, Inter)
- **Icons**: Lucide Vue или Heroicons

## Content Structure

### EN (English) — Default
- Professional tone, past tense for completed work
- Full descriptions

### RU (Русский)
- Professional tone
- Соответствующие русские эквиваленты терминов

### JP (日本語)
- Polite/formal tone (です/ます)
- Japanese DevOps terminology

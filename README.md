# VayuLab — Landing Page

Landing page for [VayuLab](https://vayulab.io), a conscious technology lab building tools that expand human perception and promote inner balance.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + Vite 7 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Components | Shadcn/ui (Radix UI) |
| Animations | Framer Motion |
| i18n | i18next (EN / PT) |
| Routing | wouter |
| Forms | React Hook Form + Zod |
| Backend | Express (dev proxy) |

## Design System

Design movement: **Minimalismo Etéreo & Tech-Zen**

| Token | Value |
|-------|-------|
| Primary (Violet) | `#6B4EFF` |
| Secondary (Teal) | `#00C9A7` |
| Background (Off-White) | `#F8F9FC` |
| Display font | Outfit |
| Body font | Inter |

## Getting Started

**Prerequisites:** Node.js 20+, pnpm 10+

```bash
# Install dependencies
pnpm install

# Start dev server (port 3000)
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
landing-page/
├── client/
│   ├── public/              # Static assets (mockup images, etc.)
│   └── src/
│       ├── components/      # Reusable components
│       │   └── ui/         # Shadcn/ui component library
│       ├── pages/
│       │   └── Home.tsx    # Main landing page
│       ├── locales/
│       │   ├── en.json     # English translations
│       │   └── pt.json     # Portuguese translations
│       ├── contexts/        # ThemeContext (light/dark)
│       └── index.css       # Global styles + CSS variables
├── server/                  # Express dev server
└── shared/                  # Shared types
```

## Sections

1. **Hero** — Asymmetric layout with animated logo visual and gradient headline
2. **About** — VayuLab philosophy and origin story
3. **Meditary** — Showcase of the first project with phone mockup
4. **Philosophy** — Three founding pillars: Investigation, Practice, Expansion
5. **Contact** — Direct email link to `diego@vayulab.io`

## i18n

The site supports English and Portuguese. Translation files live in [client/src/locales/](client/src/locales/). The language is auto-detected from the browser and can be toggled via the nav switcher.

## Contact

diego@vayulab.io

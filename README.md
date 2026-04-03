<div align="center">

# ✨ Luma Studio

**Transform any photo into gallery-ready art with AI**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--Image-412991?style=flat-square&logo=openai&logoColor=white)](https://openai.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Live Demo](#) · [Report Bug](https://github.com/ShAhilK2/luma-studio/issues) · [Request Feature](https://github.com/ShAhilK2/luma-studio/issues)

</div>

---

## Overview

Luma Studio is a full-stack AI image restyling platform. Upload a portrait, pet photo, or any scene — choose from six hand-crafted art styles — and watch OpenAI's image editing API transform it while faithfully preserving identity, composition, and fine details.

> Built on Next.js App Router with server-side quota enforcement, Clerk authentication, ImageKit storage, Neon PostgreSQL, and Sentry observability.

---

## Features

- **6 Artistic Style Presets** — Storybook 3D, Anime Cel, Clay Render, Pixart, Voxel Block, Marble Sculpture
- **High-Fidelity Style Transfer** — Powered by `gpt-image-1` / `gpt-image-1.5` with identity & composition preservation
- **Generation History** — Browse and download every image you've created
- **Tiered Quota System** — Free (3/mo), Pro (75/mo), Studio (175/mo)
- **Smart Aspect Ratio Detection** — Automatically picks the right output canvas (square, landscape, portrait)
- **Before / After Preview** — Side-by-side comparison panel in the studio
- **Dark Mode** — Full light/dark theme support
- **Error Monitoring** — Sentry tracing on every AI request

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, shadcn/ui, Radix UI |
| Animations | Framer Motion |
| AI | OpenAI Image Edit API via Vercel AI SDK |
| Auth | Clerk (sign-in, sign-up, pricing tiers) |
| Database | PostgreSQL on Neon — Drizzle ORM |
| Storage | ImageKit (uploads + generated results) |
| Image Processing | Sharp |
| Monitoring | Sentry |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Clerk](https://clerk.com) account
- An [OpenAI](https://platform.openai.com) API key
- A [Neon](https://neon.tech) PostgreSQL database
- An [ImageKit](https://imagekit.io) account
- A [Sentry](https://sentry.io) project (optional but recommended)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ShAhilK2/luma-studio.git
cd luma-studio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in the values — see the Environment Variables section below

# 4. Push the database schema
npx drizzle-kit push

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root with the following keys:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# OpenAI
OPENAI_API_KEY=

# Neon PostgreSQL
DATABASE_URL=

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

# Sentry (optional)
SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

---

## Project Structure

```
luma-studio/
├── app/
│   ├── api/
│   │   ├── generate-image/   # Core AI generation endpoint
│   │   └── upload/           # ImageKit auth token provider
│   ├── studio/               # Protected studio workbench page
│   └── page.tsx              # Public landing page
├── components/
│   ├── studio/               # Workbench, controls, preview, history
│   └── ui/                   # shadcn/ui primitives
├── context/
│   └── StudioWorkbenchContext.tsx
├── db/
│   ├── schema.ts             # Drizzle schema (generations table)
│   ├── generations.ts        # Query helpers
│   └── index.ts
└── lib/
    ├── style-presets.ts      # 6 art style definitions + prompts
    ├── generation-quota.ts   # Tier limits & quota checks
    ├── openai.ts             # OpenAI client setup
    └── imagekit.ts           # ImageKit server client
```

---

## How It Works

```
User uploads image
       │
       ▼
ImageKit stores original  ──►  /users/{id}/uploads/
       │
       ▼
POST /api/generate-image
  ├── Verify Clerk session
  ├── Check monthly quota (DB)
  ├── Fetch source image bytes from ImageKit
  ├── Detect aspect ratio with Sharp
  ├── Call OpenAI image edit with style prompt
  ├── Upload result to ImageKit  ──►  /users/{id}/results/
  └── Save generation record to Neon DB
       │
       ▼
Client renders before/after preview + updates history
```

---

## Style Presets

| Slug | Label | Description |
|---|---|---|
| `storybook-3d` | Storybook 3D | Warm, rounded Pixar-like render |
| `anime-cel` | Anime Cel | Crisp linework with cel shading |
| `clay-render` | Clay Render | Soft matte clay sculpture look |
| `pixart` | Pixart | Retro pixel art aesthetic |
| `voxel-block` | Voxel Block | Isometric 3-D voxel world |
| `marble-sculpture` | Marble Sculpture | Classical white marble statue |

---

## Quota Tiers

| Plan | Generations / Month |
|---|---|
| Free | 3 |
| Pro | 75 |
| Studio | 175 |

Quotas reset at UTC month start and are enforced server-side on every request.

---

## Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change, then submit a pull request against `main`.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push the branch: `git push origin feat/amazing-feature`
5. Open a pull request

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<div align="center">

Made with care by [ShAhilK2](https://github.com/ShAhilK2)

</div>

# Vision Hack 2026 — Landing Page

Landing page and information hub for Vision Hack 2026, a state-wide hackathon organized by µLearn.

Built with Vite, React, TanStack Router, and shadcn UI components.

## Tech Stack

- **Vite** — build tool and dev server
- **React 19** + **TypeScript** — frontend framework
- **TanStack Router** — file-based routing
- **TanStack Query** — data fetching and state management
- **shadcn UI** — component library
- **Tailwind CSS** — styling
- **Appwrite** — backend services (auth, database, storage)

## Getting Started

```bash
bun install
bunx --bun run start
```

Copy `.env.example` to `.env` and fill in the required Appwrite variables before running.

## Scripts

| Command | Description |
|---|---|
| `bun run start` | Start dev server |
| `bun run build` | Production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Run Prettier |

## Deployment

Build and deploy to any static hosting provider:

```bash
bun run build
```

The output will be in the `dist/` directory.

## License

Built for Vision Hack 2026 — µLearn.
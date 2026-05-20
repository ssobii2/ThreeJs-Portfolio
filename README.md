# Muhammad Subhan Imran — Portfolio

A 3D-driven personal portfolio built with React, Three.js (via React Three Fiber), GSAP, and Tailwind CSS. Deployed on Vercel.

## Stack

- **Vite 5** — dev server + bundler (with `manualChunks` split for `three`, `r3f`, `globe`, `gsap`).
- **React 18** — UI shell; sections lazy-loaded via `React.lazy`.
- **@react-three/fiber** + **@react-three/drei** — Three.js renderer for the hacker-room hero, project monitor, developer avatar, and decorative meshes.
- **react-globe.gl** — interactive globe in the About bento.
- **GSAP** + **@gsap/react** — entrance tweens and looped rotations.
- **EmailJS** (`@emailjs/browser`) — contact form transport (no backend).
- **Tailwind CSS** — utility styling.

## Project layout

```
public/
  models/                # GLB + FBX assets (cached long-lived on Vercel — see vercel.json)
  textures/              # MP4 project demos, matcaps
  assets/                # PNG/SVG icons, logos, spotlights
src/
  App.jsx                # Section composition + lazy boundaries
  sections/              # Hero, About, Project, Experience, Contact, Navbar, Footer
  components/            # 3D scene primitives (DemoComputer, HackerRoom, Developer, …)
  constants/index.js     # myProjects, workExperiences, navLinks, calculateSizes
  hooks/useOnScreen.js   # IntersectionObserver gate for off-screen canvases
```

## Setup

```bash
npm install
cp .env.example .env     # then fill in EmailJS keys (see below)
npm run dev              # → http://localhost:5173
```

### EmailJS environment variables

Contact form sends through EmailJS. Three vars required:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Get values from <https://dashboard.emailjs.com> → Service → Templates → Account → API Keys. `.env` is git-ignored; commit only `.env.example`.

If keys are missing the form will throw on submit — handler surfaces an alert.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the built bundle locally |
| `npm run lint` | ESLint over the project |

## Adding a new project

1. Drop a short MP4 demo into `public/textures/project/projectN.mp4` (kept small — these load as video textures in the monitor).
2. Drop logo + spotlight PNGs into `public/assets/`.
3. Append an entry to `myProjects` in `src/constants/index.js`. The carousel wraps automatically.

## Deployment (Vercel)

- Push to the connected branch — Vercel auto-builds.
- `vercel.json` sets `Cache-Control: public, max-age=31536000, immutable` for `/models/`, `/textures/`, and `/assets/`, so repeat visits skip re-downloading the 3D and video assets.
- Set the three `VITE_EMAILJS_*` env vars in **Project Settings → Environment Variables**.

## Notes on performance

- Sections after the hero (`About`, `Project`, `Experience`, `Contact`) are lazy-loaded so the first paint only ships the navbar + hero scene.
- Vendor chunks are split (`three`, `r3f`, `globe`, `gsap`) so updates to app code don't bust the cache for the big libraries.
- `useOnScreen` gates the Project and Experience `<Canvas>` mounts so off-screen scenes consume no GPU.
- All canvases cap `dpr` at `[1, 1.5]` to avoid 4× fragment cost on retina displays.

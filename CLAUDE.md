# CLAUDE.md

Project instructions for Claude working in this repo. Keep short and updated.

## What this is

Personal portfolio for **Muhammad Subhan Imran**. Vite + React 18 + Three.js (via `@react-three/fiber` + `@react-three/drei`) + GSAP + Tailwind. Deployed on Vercel.

## Run

```bash
npm install
cp .env.example .env   # fill VITE_EMAILJS_* values
npm run dev            # http://localhost:5173
npm run build          # outputs dist/
npm run lint
```

## Architecture

- `src/App.jsx` — section composition; `About / Project / Experience / Contact` are `React.lazy` behind a single `Suspense`. `Hero / Navbar / Footer` ship in the main bundle.
- `src/sections/` — page sections. Each owns its `<Canvas>` if it has 3D.
- `src/components/` — R3F scene primitives (GLB wrappers, animated logos, target, cube, rings).
- `src/constants/index.js` — single source of truth for `navLinks`, `myProjects`, `workExperiences`, `calculateSizes(...)`.
- `src/hooks/useOnScreen.js` — `IntersectionObserver` gate used to mount `Project` and `Experience` canvases only when scrolled near.

## Build / bundling rules

- `vite.config.js` enforces `resolve.dedupe: ['three']` and splits vendor chunks (`three`, `r3f`, `globe`, `gsap`). Do **not** add a third copy of `three` (e.g. by importing another globe lib) without re-checking the dedup output. Build log should contain **no** `Multiple instances of Three.js` warning.
- `react-globe.gl` ships its own `three-globe`. Even with dedup, the `globe` chunk lives at ~1MB. Treat that chunk as the upper bound — don't grow it.
- When adding a new section, follow the `App.jsx` pattern (lazy import + same `Suspense`) so first paint stays light.

## R3F gotchas (do not regress)

- **DPR cap**: every `<Canvas>` uses `dpr={[1, 1.5]}`. Default `2` quadruples fragment cost on retina with no visible win for this art style.
- **`frameloop="demand"` is unsafe** in `Project.jsx` and `Experience.jsx` because:
  - `Project` uses `useVideoTexture` → frames only push to the GPU when the loop is running.
  - `Experience` uses `useAnimations` (skinned mesh mixer) → mixer only advances when the loop is running.
  Keep `frameloop` at the default unless you also call `invalidate()` per video frame / animation tick.
- `DemoComputer.jsx` is the gltfjsx output stripped down to renderable meshes (`monitor-screen` + `Monitor-B-_computer_0_1..8`). The source GLB has 150+ empty structural nodes — do not re-add them. If you re-run gltfjsx, strip nodes with no `geometry`/`material` before committing.
- Cube hover animation uses `useGSAP(..., { dependencies: [hovered], scope: cubeRef })` and returns a `tl.kill()` cleanup. Don't drop the deps array — it caused a `setState during render` warning previously.
- `CanvasLoader` deliberately does **not** call `useProgress()`. That subscription used to fire React's `Cannot update a component while rendering a different component` warning whenever a Suspense sibling finished loading. The loader shows a static spinner instead of progress %.
- `Developer.jsx` reads `actions[animationName]` into a local const inside its `useEffect` and lists both `animationName` and `actions` in the deps array — keep that shape or eslint and the React warning both come back.
- FBX clips loaded in `Developer.jsx` are passed through `stripUnboundTracks()` to drop `Armature.*` tracks before binding. Without this, Three.js logs `PropertyBinding: No target node found for track: Armature.quaternion` for every mismatched track.

## Known benign console output

Production build is clean. In dev mode you may still see:

- `WARNING: Multiple instances of Three.js being imported.` — Vite's `optimizeDeps` pre-bundles `react-globe.gl` as its own dep and `three` separately. `resolve.dedupe: ['three']` collapses them at build time but not in dev. Production verified single-instance via build log.
- `GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels` (~4×) — Chromium / NVIDIA driver hint fired at startup whenever WebGL + 2D canvas compositing coexist. Chromium itself quiets it after a few frames (`this message will no longer repeat`). Not an app bug; standard for any WebGL site on the affected drivers.
- `THREE.WebGLRenderer: Context Lost` during HMR — drei canvases unmounting + remounting on Vite hot reload occasionally hit the browser's per-page WebGL context cap. Reload to recover. Doesn't reproduce in production builds.
- `eval in node_modules/three-stdlib/libs/lottie.js` build warning — upstream `three-stdlib` ships a copy of Lottie that uses `eval`. Cannot be fixed locally.

Do not waste effort silencing the above unless upstream changes.

## Asset rules

- `public/models/` — GLBs are cached `max-age=31536000, immutable` by `vercel.json`. Use unique filenames per version.
- `public/models/animations/` — only `idle.fbx`, `clapping.fbx`, `victory.fbx`, `developer.glb` are loaded. Don't drop new animations in unless `Developer.jsx` also imports them.
- `public/textures/project/*.mp4` — small (kept under ~2MB each) MP4 demos used as `useVideoTexture` source for the monitor screen.
- `public/assets/` — PNG/SVG icons + spotlights. Project entries reference these by path string from `constants/index.js`.

## EmailJS

- Keys live in `.env` (gitignored) and are read via `import.meta.env.VITE_EMAILJS_*` inside `src/sections/Contact.jsx`. Never hardcode them again.
- The previous hardcoded keys (`service_8cs01j8` / `template_0ar7w2r` / `JWCf33ZT9O3-uJ7q3`) are public in git history — rotate them in the EmailJS dashboard.

## Style conventions

- Single quotes / double quotes mixed across the repo; do not mass-reformat as part of a feature change.
- Tailwind classes inline on JSX. Watch for invalid arbitrary-value typos (e.g. `sm:2-[276px]`) — Tailwind silently drops them.
- Identity always: **Muhammad Subhan Imran** (full name). Don't shorten in user-facing copy.

## Verifying changes

When you change anything 3D, anything in `vite.config.js`, or anything in `App.jsx`:

1. `npm run build` — confirm chunk split unchanged: roughly `three / r3f / globe / gsap / index` + per-section chunks. No new `Multiple instances of Three.js` warning.
2. `npm run dev` and open `http://localhost:5173`. Manually scroll through all sections. Confirm no `setState during render` console error and the monitor video plays.
3. For UI/visual changes, take a browser screenshot before claiming done.

## Out of scope for now / known nice-to-haves

- Swap retro monitor model for a flat-panel one (only if zoom + camera-lock proves insufficient).
- Replace `react-globe.gl` with hand-rolled `three-globe` using the same `three` instance.
- WebM/AV1 transcodes of project MP4s.
- Honeypot / Turnstile on the contact form.
- Browserslist DB refresh (`npx update-browserslist-db@latest`) — cosmetic build warning only.

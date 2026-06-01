# Scribe's Journal – Noosphere Nexus 📘

Critical learnings discovered during documentation passes.

## 2025-05-14 - Initial Scan & Build Verification
**Observation:** The repository uses Vite for a React SPA and is deployed to GitHub Pages. GitHub Pages requires a `base` path in `vite.config.js` and a fallback for SPA routing (404 errors).
**Learning:** The project uses a custom build script `"build": "vite build && cp dist/index.html dist/404.html"` to handle the 404 fallback. The `base` path in `vite.config.js` is set to `/Noosphere-Nexus/`, which is case-sensitive and must match the repository name exactly.
**Action:** Unified these details in the updated README and Setup guides to prevent "blank screen" deployment issues.

**Observation:** There are no automated tests (unit/e2e) currently in the `package.json` or `src/` directory.
**Learning:** Build verification (`npm run build`) is the primary way to check for JSX errors or bundling issues before deployment.
**Action:** Documented `npm run build` as the primary verification step in `CONTRIBUTING.md` (or README).

# Scribe's Journal – Noosphere Nexus 📘

Critical learnings discovered during documentation passes.

## 2025-05-14 - Initial Scan & Build Verification

**Observation:** The repository uses Vite for a React SPA and is deployed to
GitHub Pages. GitHub Pages requires a `base` path in `vite.config.js` and a
fallback for SPA routing (404 errors).

**Learning:** The project uses a custom build script `"build": "vite build &&
cp dist/index.html dist/404.html"` to handle the 404 fallback. The `base` path
in `vite.config.js` is set to `/Noosphere-Nexus/`, which is case-sensitive and
must match the repository name exactly.

**Action:** Unified these details in the updated README and Setup guides to
prevent "blank screen" deployment issues.

**Observation:** There are no automated tests (unit/e2e) currently in the
`package.json` or `src/` directory.

**Learning:** Build verification (`npm run build`) is the primary way to check
for JSX errors or bundling issues before deployment.

**Action:** Documented `npm run build` as the primary verification step in
`CONTRIBUTING.md` (or README).

## 2026-08-01 - Documentation Refactoring & Typo Rectification

**Observation:** The repository's primary ASCII architecture diagram file was
named with a typo (`PROJECT-BLUEBRINT.md` instead of `PROJECT-BLUEPRINT.md`).

**Learning:** File naming typos can cause confusion for newcomers and automated
tools. Standardizing filenames and resolving typos across internal files
strengthens repository integrity.

**Action:** Renamed `PROJECT-BLUEBRINT.md` to `PROJECT-BLUEPRINT.md` and updated
internal references and auxiliary docs to point to the corrected path. Polished
core and supplementary markdown files to satisfy rigorous linting parameters
while retaining Scribe-allowed HTML enhancements.

## 2026-08-02 - Documentation Modernization & Multi-Agent Guide Synchronization

**Observation:** The repository structure contained multiple documentation pages in
`src/pages/docs/` that were omitted from `ARCHITECTURE.md`, `PROJECT-BLUEPRINT.md`,
`CLAUDE.md`, and `GEMINI.md`.

**Learning:** Keeping agent guides and architectural blueprints perfectly in sync
with actual React page components prevents developer drift and ensures AI assistants
have full context when adding routes or navigation links.

**Action:** Expanded component hierarchies across `ARCHITECTURE.md`, `PROJECT-BLUEPRINT.md`,
`CLAUDE.md`, and `GEMINI.md` to include all 11 documentation components. Configured
`.markdownlint.json` to allow Scribe-standard HTML collapsibles (`<details>`, `<summary>`)
while enforcing markdown quality across all repo docs.

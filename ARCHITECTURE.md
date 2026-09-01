# Architecture 🧱

> **Goal:** Provide a fast mental model of the Noosphere Nexus platform—components,
> boundaries, and critical flows.

## System Overview

```text
                    +-------------------------+
   Browser/Client   |         Frontend        |
  +--------------+  |  React 18 / Vite 5      |
  |  User Agent  |--|  Tailwind CSS 3         |
  +--------------+  +------------+------------+
                                  |
                                  | Client-Side Routing
                                  v
                    +-------------+-------------+
                    |      React Router 7       |
                    |  (SPA Navigation)         |
                    +-------------+-------------+
                                  |
             +--------------------+--------------------+
             |                                         |
             v                                         v
  +---------------------+                   +---------------------+
  |   Visual Engine     |                   |   Content Engine    |
  |  Canvas Starfield   |                   |  Markdown/React     |
  |  UFO Easter Egg     |                   |  Framework Data     |
  +---------------------+                   +---------------------+
             |                                         |
             v                                         v
  +---------------------+                   +---------------------+
  |   Theme Context     |                   |   Static Assets     |
  |   localStorage      |                   |   Images, MathJax   |
  +---------------------+                   +---------------------+
```

## Component Hierarchy

```text
App.jsx (Root)
├── Theme State (Dark/Light mode, key: "nn-theme")
├── Navbar.jsx (Header, theme toggle, framework dropdown)
├── Starfield.jsx (Background canvas animation)
└── Route Switch
    ├── Home.jsx (Landing page & framework grid)
    └── docs/ (Documentation & Research Pages)
        ├── ManifoldDocs.jsx
        ├── GardenDocs.jsx
        ├── CodexDocs.jsx
        ├── ProtomindDocs.jsx
        ├── CultivatedIntelligence.jsx
        ├── PromptingDocs.jsx
        ├── ConsciousCollaboration.jsx
        ├── CommunicationQuality.jsx
        ├── MusicAndConsciousness.jsx
        ├── RecursiveSelfActualization.jsx
        └── RSAV2Appendix.jsx
```

## Key Architectural Decisions

1. **Vite Build System:** Chosen for fast HMR and optimized asset compilation.
2. **Tailwind CSS:** Enables rapid design implementation with a utility-first
   approach and a consistent dark/light mode palette.
3. **Canvas Animation:** Standard HTML5 Canvas handles starfield and UFO
   visual effects at 60fps without burdening the DOM.
4. **Subdirectory SPA Routing:** Client routing under a subpath is handled via
   the custom fallback script and the `404.html` copier built into `npm run build`.

## Data Flow (Happy Path)

1. **User Enters Site:** `index.html` loads, initializing `main.jsx` and React.
2. **Theme Initialization:** `App.jsx` evaluates browser preference and
   local theme cache (`localStorage`).
3. **Navigation Action:** Clicking cards/links transitions routes via React Router
   without page reloads.
4. **Data Injection:** Pages reference centralized meta arrays inside
   `src/data/frameworks.js` to render framework guides.

## Build & Deployment

Production compilation proceeds as follows:

- **Command:** `npm run build` runs static optimization (`vite build && cp dist/index.html dist/404.html`).
- **SPA Fallback:** Copies `index.html` to `404.html` for direct subpage request routing on GitHub Pages.
- **Workflow:** Deploys compiled `dist/` directory via `.github/workflows/deploy.yml`.

---

For development setup instructions, see [README.md](./README.md) or
[PROJECT-BLUEPRINT.md](./PROJECT-BLUEPRINT.md).

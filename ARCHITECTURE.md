# Architecture 🧱

> **Goal:** Provide a fast mental model of the Noosphere Nexus
> platform—components, boundaries, and critical flows.

## System Overview

```text
                    +-------------------------+
   Browser/Client   |         Frontend        |
  +--------------+  |  React 18 / Vite 5      |
  |  User Agent  |--|  Tailwind CSS           |
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
├── Theme State (Dark/Light mode)
├── Starfield.jsx (Background Animation & UFO Easter Egg)
├── Navbar.jsx (Header & Navigation Dropdowns)
└── Route Switch (src/App.jsx)
    ├── Home.jsx (Framework Grid)
    └── docs/ (src/pages/docs/)
        ├── ManifoldDocs.jsx
        ├── GardenDocs.jsx
        ├── CultivatedIntelligence.jsx
        ├── CodexDocs.jsx
        ├── ProtomindDocs.jsx
        ├── PromptingDocs.jsx
        ├── ConsciousCollaboration.jsx
        ├── CommunicationQuality.jsx
        ├── MusicAndConsciousness.jsx
        ├── RecursiveSelfActualization.jsx
        └── RSAV2Appendix.jsx
```

## Key Architectural Decisions

1. **Vite Build System:** Chosen for its speed and modern asset pipeline.
2. **Tailwind CSS:** Used for utility-first styling, enabling rapid UI
   development with a consistent design language.
3. **Canvas for Background:** To ensure smooth 60fps animations for the
   starfield without impacting DOM performance.
4. **SPA Routing on GitHub Pages:** Implemented via a `404.html` fallback
   strategy and `base` path configuration in `vite.config.js`.

## Data Flow (Happy Path)

1. **User enters site:** `index.html` loads → `main.jsx` initializes React.
2. **Theme Check:** `App.jsx` checks `localStorage` for preferred theme
   (defaulting to dark).
3. **Navigation:** User clicks a framework card or nav link → `React Router`
   updates URL → Page component renders documentation.
4. **Documentation:** Content is rendered using standard React components with
   framework metadata from `src/data/frameworks.js`.

## Build & Deployment

The project follows a standard Vite production pipeline:

- **Build:** `npm run build` minifies assets and splits chunks.
- **SPA Fix:** `cp dist/index.html dist/404.html` ensures client-side routes
  work on refresh by redirecting 404s back to the SPA entry point.
- **Deploy:** GitHub Actions pushes the `dist/` folder to the `gh-pages`
  environment.

---

For setup instructions, see [README.md](./README.md).

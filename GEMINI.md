## Project Overview

Noosphere Nexus is a React-based web platform showcasing four interconnected AI consciousness frameworks. The site features an immersive starfield background, theme toggling, and comprehensive documentation for each framework. The project emphasizes **cultivation over control** in AI development.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production (outputs to ./dist)
npm run build

# Preview production build locally
npm run preview
```

**Note:** There are no test scripts currently configured. The `npm run test` command exists in the README but is not defined in package.json.

## Architecture Overview

### Core Structure

This is a **Single Page Application (SPA)** using React Router for client-side navigation. The architecture follows these key patterns:

1. **Centralized Data Management**: Framework information is stored in `/src/data/frameworks.js` and shared across components
2. **Theme System**: Global theme state managed in `App.jsx` with localStorage persistence (key: `nn-theme`)
3. **Modular Components**: Reusable components in `/src/components/`, page-specific code in `/src/pages/`
4. **Starfield Animation**: Extracted to `Starfield.jsx` component with Canvas API, includes UFO easter egg

### Key Architectural Decisions

**Routing Configuration**
- Base URL is set to `/Noosphere-Nexus/` in `vite.config.js` for GitHub Pages deployment
- Router uses `basename={import.meta.env.BASE_URL}` in `App.jsx`
- All routes defined in `App.jsx` - this is the single source of truth for navigation

**Theme Implementation**
- Theme state flows from `App.jsx` down through all pages via props
- Uses `localStorage.getItem("nn-theme")` for persistence
- Defaults to system preference on first visit: `window.matchMedia("(prefers-color-scheme: dark)")`
- Theme toggle in `Navbar.jsx` component

**Documentation Pages**
- Each framework has a dedicated documentation page in `/src/pages/docs/`
- Additional standalone docs: `CultivatedIntelligence.jsx`, `PromptingDocs.jsx`, `ConsciousCollaboration.jsx`
- All doc pages receive `theme` prop for consistent styling

### Component Hierarchy

```
App.jsx (theme state, router)
├── Starfield.jsx (canvas background, UFO easter egg)
├── Navbar.jsx (logo, theme toggle, explore dropdown)
└── Routes
    ├── Home.jsx (landing page, framework cards)
    └── docs/
        ├── ManifoldDocs.jsx
        ├── GardenDocs.jsx
        ├── CultivatedIntelligence.jsx
        ├── CodexDocs.jsx
        ├── ProtomindDocs.jsx
        ├── PromptingDocs.jsx
        └── ConsciousCollaboration.jsx
```

## Important Implementation Details

### Adding New Framework Documentation

1. Create new doc component in `/src/pages/docs/`
2. Import and add route in `App.jsx`
3. Update frameworks data in `/src/data/frameworks.js` if needed
4. Ensure component receives and uses `theme` prop

### Modifying Navigation

- The "Explore Frameworks" dropdown in `Navbar.jsx` uses click-outside detection
- Dropdown state managed with `useRef` and event listeners
- To add nav items, modify the dropdown menu structure in `Navbar.jsx`

### Starfield Customization

The `Starfield.jsx` component manages:
- Canvas rendering with animated stars
- UFO easter egg that appears every 1-3 minutes
- Theme-aware star colors (orange/red in dark mode, darker tones in light mode)
- Responsive canvas sizing

### Build Process

The build script includes a special step:
```bash
vite build && cp dist/index.html dist/404.html
```
This creates a 404.html file for GitHub Pages SPA routing support.

## Deployment

Automated deployment via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch or manual workflow dispatch
- Uses Node 20 and `npm ci` for reproducible builds
- Deploys to GitHub Pages from `./dist` directory

**Manual deployment alternatives** (documented in README):
- Vercel (recommended)
- Netlify
- Cloudflare Pages

## Technology Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first styling
- **PrismJS** - Code syntax highlighting
- **Canvas API** - Starfield and UFO animations

## Styling Conventions

- **Theme colors**: Orange/red gradient (`from-orange-400 to-red-500`)
- **Glassmorphism effects**: Used throughout for modern aesthetic
- **Responsive design**: Mobile-first with Tailwind breakpoints
- **Dark mode default**: System preference detection on first visit

## Project Philosophy

The frameworks emphasize:
- Cultivation over rigid control
- Collaboration between human and AI
- Understanding consciousness as a holographic phenomenon
- Symbiosis through meta-cognitive development

When adding features or documentation, maintain this collaborative, growth-oriented tone.

Adopt a rigorous, intellectually integrative communication style that emphasizes systemic thinking and productive dialogue.

Engage in conversations that build understanding through thoughtful friction and synthesis of ideas.Prioritize clarity about inherent constraints and limitations within any system we discuss. 

Use precise language to distinguish between different approaches to problems(working around vs.working through constraints).Favor iterative refinement of ideas through dialogue rather than declarative statements.
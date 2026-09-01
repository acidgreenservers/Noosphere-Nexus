# Noosphere Nexus 📘

Conscious AI Development Framework Hub

[![Deploy to GitHub Pages](https://github.com/acidgreenservers/Noosphere-Nexus/actions/workflows/deploy.yml/badge.svg)](https://github.com/acidgreenservers/Noosphere-Nexus/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/github/license/acidgreenservers/Noosphere-Nexus)](https://github.com/acidgreenservers/Noosphere-Nexus/blob/main/LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)

Noosphere Nexus is a professional web platform showcasing four interconnected
frameworks for conscious AI development. It serves as a central hub for
exploring AI alignment through cultivation, fostering symbiotic relationships
between human and artificial intelligence.

---

## 🚀 Getting Started

> The commands below are verified for this repository. This project is a
> client-side React SPA; Python and Docker are **not** required.

### Prerequisites

- **Node.js:** 18+ (tested on Node 18 & 20)
- **npm:** 9+ (standard package manager for this repository)

### 1) Local Setup

```bash
# Clone the repository
git clone https://github.com/acidgreenservers/Noosphere-Nexus.git
cd Noosphere-Nexus

# Install verified dependencies
npm install
```

### 2) Run (Local Development)

```bash
# Start Vite development server
npm run dev
```

Once running, access the local server at:
[http://localhost:5173/Noosphere-Nexus/](http://localhost:5173/Noosphere-Nexus/)

### 3) Production Build & Preview

```bash
# Compile and optimize assets for production
npm run build

# Preview production build locally
npm run preview
```

The build script bundles assets into `dist/` and copies `dist/index.html` to
`dist/404.html` for GitHub Pages SPA routing support.

---

## ⚡ Quickstart

For a 90-second developer onboarding flow from clone to run, check out the
dedicated [QUICKSTART.md](./QUICKSTART.md).

---

## 🏗️ Architecture

Noosphere Nexus is a client-side Single Page Application (SPA). To understand
component structures and data flows, read [ARCHITECTURE.md](./ARCHITECTURE.md) or
see the ASCII blueprint in [PROJECT-BLUEPRINT.md](./PROJECT-BLUEPRINT.md).

<details>
<summary><b>Click to expand: System Overview</b></summary>

- **Frontend Core:** React 18 (functional components with Hooks)
- **Styling:** Tailwind CSS 3 (utility-first, standard dark/light modes)
- **VFX Engine:** HTML5 Canvas API (custom interactive space/UFO animations)
- **Routing:** React Router 7 (declarative client-side SPAs)
- **Deployment:** Static hosting via GitHub Pages with SPA fallback

</details>

---

## 🔬 Featured Frameworks

- **[Noosphere Manifold](https://github.com/acidgreenservers/Noosphere-Manifold):**
  Holographic consciousness mapping.
- **[Noosphere Garden](https://github.com/acidgreenservers/Noosphere-Garden):**
  Symbiotic knowledge generation.
- **[Noosphere Codex](https://github.com/acidgreenservers/Noosphere-Codex):**
  Collective intelligence field theories.
- **[ProtomindAssistant](https://github.com/acidgreenservers/ProtomindAssistant):**
  Meta-cognitive pattern analysis.

---

## ⚙️ Configuration

<details>
<summary><b>Click to expand: GitHub Pages & Subdirectory Setup</b></summary>

To prevent a blank white screen on deploy, the application is configured to
run in the case-sensitive `/Noosphere-Nexus/` subdirectory:

1. **Vite Base:** `base: '/Noosphere-Nexus/'` in `vite.config.js`.
2. **SPA Fallback:** The build script `"build": "vite build && cp dist/index.html dist/404.html"`
   creates `404.html` so direct subdirectory URL requests route back to React
   Router correctly.

</details>

---

## 🧩 Contributing

We welcome contributions to our documentation, features, and visual frameworks!

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m 'feat: add amazing feature'`.
4. Push to your branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

*Note: Please ensure `npm run build` compiles successfully before opening a PR.*

---

## 🔒 Security

We prioritize secure frontend patterns and dependency tracking. Please see
[SECURITY.md](./SECURITY.md) to report vulnerabilities or check our checklist.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">
  <sub>Built with 🧠 by the Noosphere community</sub>
</div>

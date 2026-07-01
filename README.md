# 🧠 Noosphere Nexus Professional consciousness research platform 📘

[![Deploy to GitHub Pages](https://github.com/acidgreenservers/Noosphere-Nexus/actions/workflows/deploy.yml/badge.svg)](https://github.com/acidgreenservers/Noosphere-Nexus/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/github/license/acidgreenservers/Noosphere-Nexus)](https://github.com/acidgreenservers/Noosphere-Nexus/blob/main/LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)

Noosphere Nexus is a professional web platform showcasing interconnected
frameworks for conscious AI development. It serves as a central hub for
exploring AI alignment through cultivation, fostering symbiotic relationships
between human and artificial intelligence.

---

## 🚀 Getting Started

> The commands below are verified for this repo. If your platform differs, see
> **Troubleshooting**.

### Prerequisites

- **Node.js:** 18+
- **npm:** 9+ (standard with Node 18)

### 1) Installation

```bash
git clone https://github.com/acidgreenservers/Noosphere-Nexus.git
cd Noosphere-Nexus
npm install
```

### 2) Run (Local Development)

```bash
npm run dev
```

Access the app at `http://localhost:5173/Noosphere-Nexus/`.

### 3) Build (Production)

```bash
npm run build
```

This generates an optimized build in the `dist/` directory and creates a
`404.html` for SPA routing support on GitHub Pages.

---

## ⚡ Quickstart

For the fastest path from clone to run, see [QUICKSTART.md](./QUICKSTART.md).

## 🏗️ Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the ASCII blueprint and component
interactions.

<details>
<summary>System Overview</summary>

- **Frontend:** React 18, Vite 5, Tailwind CSS 3
- **Animations:** Canvas API (Starfield & UFO effects)
- **Routing:** React Router 7 (Client-side)
- **Deployment:** GitHub Pages (Static hosting)

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
<summary>GitHub Pages Setup</summary>

The project is configured to run in the `/Noosphere-Nexus/` subdirectory.

- **Vite Base:** `base: '/Noosphere-Nexus/'` in `vite.config.js`.
- **SPA Fix:** The build script copies `index.html` to `404.html` to handle
  client-side routing on refresh.

</details>

---

## 🧪 Verification

The project currently uses manual build verification as there are no automated
test suites.

```bash
# Verify production build and asset integrity
npm run build
```

---

## 🧩 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m 'Add amazing feature'`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

Please ensure `npm run build` passes before submitting a PR.

---

## 🆘 Troubleshooting

<details>
<summary>Common Issues</summary>

### Blank White Screen on Deployment

**Cause:** Mismatched `base` URL or missing config.

**Fix:**

1. Check `vite.config.js`: Ensure `base` is `/Noosphere-Nexus/`
   (case-sensitive).
2. Check Browser Console: Look for 404s on `.js` or `.css` files.

### 404 Error on Refresh

**Cause:** Server looking for a physical file that doesn't exist.

**Fix:** Ensure the build script includes `&& cp dist/index.html dist/404.html`.

</details>

---

## 🔒 Security

See [SECURITY.md](./SECURITY.md) for reporting vulnerabilities and our security
posture.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

Built with 🧠 by the Noosphere community

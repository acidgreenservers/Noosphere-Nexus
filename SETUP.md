# 🛠️ Noosphere Nexus Setup Guide

*"Technical setup, deployment, and maintenance instructions for the Noosphere Nexus consciousness research platform."*

---

## 📦 Initial Setup

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control
- Text editor (VS Code / VSCodium recommended)

### Installation
```bash
git clone https://github.com/acidgreenservers/noosphere-nexus.git
cd Noosphere-Nexus
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:5173/noosphere-nexus/` for development preview.

---

## 🚀 Deployment Configuration

### GitHub Pages Deployment

This project uses **Vite** and is deployed to **GitHub Pages**.

#### 1. Base URL Configuration
To ensure assets load correctly in the subdirectory, `vite.config.js` must match the repository name **exactly** (case-sensitive):

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Noosphere-Nexus/' // Must match https://github.com/acidgreenservers/noosphere-nexus
})
```

*Important: Do not add `vite.config.js` to `.gitignore`. It is required for the build process.*

#### 2. SPA Routing (The 404 Fix)
Single Page Applications (SPAs) often face 404 errors on refresh because GitHub Pages doesn't know how to handle client-side routes (like `/docs/manifold`).

We solve this by automatically copying `index.html` to `404.html` during the build. This forces GitHub Pages to serve the app entry point for any unknown specific route, allowing React Router to handle the URL correctly.

This is handled in `package.json`:
```json
"scripts": {
  "build": "vite build && cp dist/index.html dist/404.html"
}
```

#### 3. Deployment Steps
1. Push changes to `main`.
2. GitHub Actions (if configured) or manual deployment will build the project.
3. Verify the site at `https://acidgreenservers.github.io/noosphere-nexus/`.

---

## � Content Management

### Adding New Documentation Pages
1. Create a new component in `src/pages/docs/`.
2. Use the standard layout (Navbar + Starfield).
3. Register the new route in `src/App.jsx`.
4. Add navigation links in `src/components/Navbar.jsx` or relevant pages.

### "Prompting for Cognition"
The prompting documentation is located at:
- Source: `src/pages/docs/PromptingDocs.jsx`
- Route: `/docs/prompting-for-cognition`

---

## � Troubleshooting

### Blank White Screen on Deployment
**Cause:** Mismatched `base` URL or missing config.
**Fix:**
1. Check `vite.config.js`: Ensure `base` is `/noosphere-nexus/` (lowercase).
2. Check `.gitignore`: Ensure `vite.config.js` is **NOT** ignored.
3. Check Browser Console: Look for 404s on `.js` or `.css` files.

### 404 Error on Refresh
**Cause:** Server looking for a physical file that doesn't exist.
**Fix:** Ensure the build script includes `&& cp dist/index.html dist/404.html`.

---

## 🏗️ Architecture

```
src/
├── components/     # Reusable UI (Navbar, Starfield)
├── pages/         # Route-based page components
│   ├── docs/      # Documentation pages
│   └── Home.jsx   # Landing page
├── App.jsx        # Main routing & Theme provider
└── index.css      # Tailwind & global styles
```

### Styling
- **Tailwind CSS**: Utility-first styling.
- **Dark/Light Mode**: Handled via `localStorage` and `theme` prop.
- **Starfield**: Custom canvas animation in `src/components/Starfield.jsx`.

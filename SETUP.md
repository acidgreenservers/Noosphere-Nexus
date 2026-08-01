# Noosphere Nexus Setup Guide 🛠️

Technical setup, deployment, and maintenance instructions for the
Noosphere Nexus consciousness research platform.

---

## 📦 Initial Setup

### Prerequisites

- **Node.js:** 18+ (tested on Node 18 & 20)
- **npm:** 9+ (included with Node.js)
- **Git:** For version control
- **Text Editor:** VS Code / Cursor or similar editor recommended

### Installation

```bash
# Clone the repository
git clone https://github.com/acidgreenservers/Noosphere-Nexus.git
cd Noosphere-Nexus

# Install verified dependencies
npm install
```

### Development Server

```bash
# Spin up hot-reload server
npm run dev
```

Visit the local development address to preview changes:
[http://localhost:5173/Noosphere-Nexus/](http://localhost:5173/Noosphere-Nexus/)

---

## 🚀 Deployment Configuration

### GitHub Pages Deployment

This project uses **Vite** and is deployed to **GitHub Pages**.

#### 1. Base URL Configuration

To ensure assets load correctly in the subdirectory, `vite.config.js` must
match the repository name **exactly** (case-sensitive):

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Noosphere-Nexus/' // Must match the case-sensitive repository name
})
```

*Important: Do not add `vite.config.js` to `.gitignore`. It is required for the
production build pipeline.*

#### 2. SPA Routing (The 404 Fallback)

Single Page Applications (SPAs) often encounter 404 errors on refresh because
GitHub Pages does not natively resolve client-side routes (e.g. `/docs/manifold`)
without physical files on disk.

We solve this by automatically copying `index.html` to `404.html` during build time.
This forces the hosting provider to fallback to the React entry point, allowing
React Router to correctly parse and resolve the URL path.

This is configured in `package.json`:

```json
"scripts": {
  "build": "vite build && cp dist/index.html dist/404.html"
}
```

#### 3. Deployment Steps

1. Push changes to the `main` branch.
2. GitHub Actions (`deploy.yml` workflow) automatically runs and builds the site.
3. Verify the live application at:
   <a href="https://acidgreenservers.github.io/Noosphere-Nexus/" target="_blank" rel="noopener noreferrer">https://acidgreenservers.github.io/Noosphere-Nexus/</a>

---

## 📂 Content Management

### Adding New Documentation Pages

1. Create a new page component in the `src/pages/docs/` directory.
2. Mirror the standard layout (embed the Navbar and Starfield).
3. Register the new route within `src/App.jsx`.
4. Add corresponding links to `src/components/Navbar.jsx` and any other index menus.

### "Prompting for Cognition"

The prompting tools and collection directory structure:

- **Component File:** `src/pages/docs/PromptingDocs.jsx`
- **Modular Directory:** `src/components/PromptCollection/`
- **Route Path:** `/docs/prompting-for-cognition`

---

## 🆘 Troubleshooting

### Blank White Screen on Deployment

- **Cause:** Mismatched `base` URL inside `vite.config.js` or missing configs.
- **Fix:** Ensure `base` is `/Noosphere-Nexus/` exactly. Check your browser
  console (F12) to see if bundle files are failing with a 404 error.

### 404 Error on Refresh

- **Cause:** Server looking for physical subdirectory paths instead of using fallback.
- **Fix:** Ensure the build script contains `&& cp dist/index.html dist/404.html`.

---

## 🏗️ Architecture Summary

```text
src/
├── components/     # Reusable UI (Navbar, Starfield, PromptCollection)
├── pages/         # Route-based page components
│   ├── docs/      # In-depth consciousness and research documentation
│   └── Home.jsx   # Interactive landing page
├── App.jsx        # Root routing and Theme state provider
└── index.css      # Tailwind core directives and custom global layers
```

### Styling

- **Tailwind CSS:** Utility-first utility classes and media queries.
- **Dark/Light Mode:** Resolved via custom contexts and persistent local storage.
- **Canvas Animations:** Smooth interactive rendering inside `Starfield.jsx`.

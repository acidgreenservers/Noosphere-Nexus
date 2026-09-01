# Troubleshooting Guide 🆘

This document provides solutions to common deployment, build, and runtime issues.

---

## 🚀 Blank Page on GitHub Pages

### 1. Check GitHub Pages Settings

- Go to your repository settings page: **Settings → Pages**.
- Ensure the **Source** is set to "GitHub Actions" (rather than the old
  `gh-pages` branch deployment model, unless you are deploying manually).

### 2. Rebuild with Correct Base Path

The build base URL is configured in `vite.config.js`. Ensure that the `base` key
corresponds to your exact, case-sensitive repository name:

```javascript
base: '/Noosphere-Nexus/'
```

Rebuild the static files and push:

```bash
npm run build
git add .
git commit -m "fix: enforce correct subdirectory base path"
git push
```

### 3. Check Browser Developer Console

Open your deployed site, press **F12**, and select the **Console** tab. Check for
any red error messages:

- **404 on `/assets/*.js` or `/assets/*.css`**: This indicates that the asset
  base path is incorrect. Check `vite.config.js` again.
- **CORS Errors**: Confirm that GitHub Pages features are activated and the
  workflow completed successfully.
- **Blank page without any errors**: This usually means the React mount target
  is missing, or a routing hook crashed silently. Run a local production preview
  to inspect.

### 4. Local Build Preview

You can verify that your production bundles compile and run flawlessly locally
before sending them to remote hosting:

```bash
# Compile code
npm run build

# Boot local production web server
npm run preview
```

If the build launches and navigates correctly under
[http://localhost:4173/Noosphere-Nexus/](http://localhost:4173/Noosphere-Nexus/),
then the bundler configuration is correct and any issue is host-specific.

### 5. Alternative Hosting Deployments

If GitHub Pages continues to pose pathing issues, you can deploy to alternative
static platforms easily:

- **Cloudflare Pages:**
  1. Navigate to
     <a href="https://pages.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare Pages</a>.
  2. Connect your GitHub repository.
  3. Set build command to: `npm run build`
  4. Set output directory to: `dist`
  5. Save and deploy!

- **Vercel:**
  1. Navigate to
     <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>.
  2. Import the project repository.
  3. The build parameters are auto-detected. Click deploy!

---

## 🏗️ Repository Health Checklist

Make sure the following critical files are fully tracked and committed:

```text
✓ index.html
✓ package.json
✓ vite.config.js
✓ src/main.jsx
✓ src/App.jsx
✓ src/index.css
```

---

## 🧹 Nuclear Reset Method

If your workspace enters an inconsistent state, you can wipe temporary build
directories and perform a clean installation:

```bash
# Delete build output and package directories
rm -rf dist node_modules

# Perform clean dependency installation
npm install

# Rebuild assets
npm run build
```

---

## Still Having Issues?

Please open an issue in the project tracker with:

1. Deployed site URL
2. Browser Console (F12) error dump
3. OS, Node.js, and browser version details

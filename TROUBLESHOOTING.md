# Troubleshooting Blank Page on GitHub Pages

## Quick Fix Checklist

### 1. Check GitHub Pages Settings
- Go to your repo → Settings → Pages
- Source should be set to "GitHub Actions" (NOT gh-pages branch)
- If using gh-pages branch, make sure it's selected

### 2. Rebuild with Correct Base Path

**Option A: Use relative paths (recommended)**
Already set in vite.config.js as `base: './'`

**Option B: Use your repo name**
In `vite.config.js`, change:
```js
base: '/your-repo-name/'
```

Then rebuild and redeploy:
```bash
npm run build
git add .
git commit -m "fix: update base path"
git push
```

### 3. Check Browser Console
Open your deployed site and press F12 to open DevTools. Look for errors:

**Common errors:**
- 404 on `/assets/*.js` → Wrong base path
- CORS errors → Check GitHub Pages is enabled
- White screen + no errors → React not mounting

### 4. Manual Deploy Method

If GitHub Actions isn't working:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

Then in GitHub Settings → Pages, set source to "gh-pages" branch.

### 5. Test Locally First

```bash
npm run build
npm run preview
```

If it works locally at http://localhost:4173, the build is fine.

### 6. Alternative: Use a Different Platform

If GitHub Pages is still problematic, try:

**Cloudflare Pages (Easiest):**
1. Go to https://pages.cloudflare.com
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Output: `dist`
5. Deploy!

**Vercel:**
1. Go to https://vercel.com
2. Import GitHub repo
3. Auto-detects everything
4. Deploy!

### 7. Check Your Repo Structure

Make sure these files are committed:
```
✓ index.html
✓ package.json
✓ vite.config.js
✓ src/main.jsx
✓ src/App.jsx
✓ src/index.css
```

### 8. Nuclear Option: Start Fresh

```bash
# Delete dist and node_modules
rm -rf dist node_modules

# Fresh install
npm install

# Build
npm run build

# Test
npm run preview
```

## Still Not Working?

Share your:
1. GitHub repo URL
2. Browser console errors (F12 → Console tab)
3. Network errors (F12 → Network tab)

And I can help diagnose the specific issue!

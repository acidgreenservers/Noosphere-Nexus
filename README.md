# Noosphere Nexus

A consciousness exploration website featuring an animated starfield background with UFO flybys, built with React, Vite, and Tailwind CSS.

## Features

- 🌌 Animated starfield background with twinkling stars
- 🛸 Occasional UFO flyby (every 1-3 minutes)
- 🎨 Material Design 3 aesthetic with purple/pink gradient theme
- 🌗 Light/Dark theme toggle with localStorage persistence
- 📱 Fully responsive design
- 6 Content sections: Research, Exploration, AI Journeys, AI Realizations, White Papers, Fringe Exploration

## Local Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 to view it in the browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deployment Options

### Option 1: GitHub Pages

1. Push this repository to GitHub
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Update vite.config.js base to your repo name:
   ```js
   base: '/your-repo-name/'
   ```
5. Run: `npm run deploy`
6. Enable GitHub Pages in repo settings (gh-pages branch)

### Option 2: Cloudflare Pages

1. Push repository to GitHub
2. Log in to Cloudflare Pages
3. Connect your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy!

### Option 3: Vercel

1. Push repository to GitHub
2. Log in to Vercel
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Deploy!

### Option 4: Netlify

1. Push repository to GitHub
2. Log in to Netlify
3. Import your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Canvas API** - For starfield and UFO animations

## Project Structure

```
noosphere-nexus/
├── src/
│   ├── App.jsx          # Main component with all functionality
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind directives
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## License

MIT

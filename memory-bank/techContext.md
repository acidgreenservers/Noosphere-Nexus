# Tech Context - Noosphere Nexus

## Core Technologies

### Frontend Framework
- **React 18.2.0**: Modern React with concurrent features and automatic batching
- **React DOM 18.2.0**: React rendering library for web platforms
- **React Router DOM 7.11.0**: Declarative routing for React applications

### Build Tools
- **Vite 5.0.8**: Next-generation frontend build tool with fast HMR and optimized production builds
- **@vitejs/plugin-react 4.2.1**: Official React plugin for Vite with SWC compilation

### Styling
- **Tailwind CSS 3.4.19**: Utility-first CSS framework for rapid UI development
- **PostCSS 8.5.6**: CSS processing tool with autoprefixer integration
- **Autoprefixer 10.4.23**: Automatic CSS vendor prefixing

### Development Tools
- **ESLint**: JavaScript/TypeScript linting (configuration not specified in package.json)
- **TypeScript Types**: @types/react and @types/react-dom for type checking

## Dependencies Breakdown

### Production Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.11.0",
  "@fontsource/material-icons": "^5.2.7",
  "@fontsource/material-symbols-outlined": "^5.2.30",
  "prismjs": "^1.30.0"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.2.43",
  "@types/react-dom": "^18.2.17",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.23",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.19",
  "vite": "^5.0.8"
}
```

## Development Setup

### Package Manager
- **npm**: Node package manager for dependency management
- **Node.js 18+**: Required runtime environment (specified in README)

### Scripts Configuration
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && cp dist/index.html dist/404.html",
    "preview": "vite preview"
  }
}
```

### Build Configuration
- **Vite Config**: React plugin, GitHub Pages base path (`/Noosphere-Nexus/`)
- **PostCSS Config**: Tailwind CSS and Autoprefixer processing
- **Tailwind Config**: Custom configuration for theme and content paths

## Technical Constraints

### Deployment Platform
- **GitHub Pages**: Static site hosting with SPA redirect support
- **Base Path**: `/Noosphere-Nexus/` for repository-based deployment
- **SPA Support**: 404.html copy for client-side routing

### Browser Support
- **Modern Browsers**: ES6+ features, CSS Grid, Flexbox
- **Canvas API**: Required for starfield animation component
- **localStorage**: Required for theme persistence
- **matchMedia**: Used for system theme preference detection

### Performance Constraints
- **Bundle Size**: Static hosting limits initial load size
- **Runtime Performance**: Canvas animation requires smooth 60fps rendering
- **Memory Usage**: Starfield animation with multiple DOM elements

## Tool Usage Patterns

### Version Control
- **Git**: Distributed version control with GitHub hosting
- **Branching**: Feature branches for development workflow
- **Deployment**: GitHub Actions for automated deployment (inferred from setup)

### Code Quality
- **ESLint**: JavaScript linting for code consistency
- **Prettier**: Code formatting (inferred from modern setup)
- **TypeScript**: Type checking for React components

### Development Workflow
- **Hot Module Replacement**: Vite provides instant updates during development
- **Build Optimization**: Tree shaking, minification, and asset optimization
- **Source Maps**: Development debugging support

## Font and Asset Management

### Font Loading
- **@fontsource/material-icons**: Material Design icons as web fonts
- **@fontsource/material-symbols-outlined**: Material Symbols outlined variant
- **System Fonts**: Fallback to system fonts for performance

### Asset Handling
- **Vite Asset Processing**: Automatic optimization and hashing
- **SVG Icons**: Inline SVG for crisp rendering at all sizes
- **Public Directory**: Static assets served directly

## Code Syntax Highlighting

### Prism.js Integration
- **Core Library**: `prismjs` for syntax highlighting
- **Languages**: Python, JavaScript/TypeScript support configured
- **Themes**: `prism-tomorrow.css` for dark theme consistency
- **Components**: `prismjs/components/` for modular loading

## Environment Configuration

### Build Environment
- **Development**: `npm run dev` with HMR and source maps
- **Production**: `npm run build` with optimization and minification
- **Preview**: `npm run preview` for local production testing

### Configuration Files
- **vite.config.js**: Build tool configuration
- **tailwind.config.js**: CSS framework customization
- **postcss.config.js**: CSS processing pipeline

## Performance Optimization

### Build Optimizations
- **Code Splitting**: Route-based splitting with React Router
- **Tree Shaking**: Automatic dead code elimination
- **Asset Optimization**: Image and font optimization
- **Minification**: JavaScript and CSS minification

### Runtime Optimizations
- **React Fast Refresh**: Instant updates without full reloads
- **Lazy Loading**: Component and route-based lazy loading
- **Memory Management**: Proper cleanup of event listeners and timers

## Browser Compatibility

### Supported Features
- **ES6 Modules**: Native module support in modern browsers
- **CSS Custom Properties**: Dynamic theming support
- **Flexbox and Grid**: Modern layout systems
- **Canvas 2D API**: Starfield animation rendering

### Fallback Strategies
- **CSS Fallbacks**: Progressive enhancement for older browsers
- **JavaScript Fallbacks**: Graceful degradation for missing features
- **Feature Detection**: Runtime capability checking

## Security Considerations

### Content Security Policy
- **External Links**: GitHub links use `rel="noopener noreferrer"`
- **Inline Scripts**: Minimal inline JavaScript usage
- **Asset Loading**: Local assets with integrity checking

### Dependency Security
- **Regular Updates**: Keep dependencies updated for security patches
- **Audit Tools**: Use `npm audit` for vulnerability checking
- **Lock File**: `package-lock.json` ensures reproducible builds

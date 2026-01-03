# System Patterns - Noosphere Nexus

## System Architecture

### Application Structure
```
src/
├── App.jsx              # Root component with router & starfield canvas
├── main.jsx             # React entry point with font imports
├── index.css            # Global Tailwind styles
├── components/
│   ├── Navbar.jsx       # Header with theme toggle and navigation
│   └── Starfield.jsx    # Animated background canvas component
├── pages/
│   ├── Home.jsx         # Landing page with framework showcase
│   └── docs/            # Documentation pages for each framework
│       ├── ManifoldDocs.jsx
│       ├── GardenDocs.jsx
│       ├── CodexDocs.jsx
│       └── ProtomindDocs.jsx
└── data/
    └── frameworks.js    # Centralized framework configuration
```

### Component Architecture
- **Functional Components**: Modern React with hooks (useState, useEffect, useRef)
- **Props-based Theming**: Theme prop passed down through component hierarchy
- **Event Handling**: Click-outside detection for dropdowns using refs and event listeners
- **State Management**: Local component state with localStorage persistence for theme

## Key Technical Decisions

### Routing Strategy
- **React Router v6**: Client-side routing with clean URLs
- **Nested Routes**: Support for specialized sub-pages (e.g., `/docs/garden/cultivated-intelligence`)
- **Base Path Configuration**: Configured for GitHub Pages deployment (`/Noosphere-Nexus/`)

### State Management Patterns
- **Local Component State**: useState for UI interactions (dropdowns, theme)
- **Persistent State**: localStorage for theme preferences with system preference detection
- **Prop Drilling**: Theme state passed as props (simple, no complex state management needed)

### Component Relationships
- **App.jsx**: Root container managing theme state and routing
- **Navbar.jsx**: Child component receiving theme prop and handling navigation
- **Starfield.jsx**: Canvas component for background animation
- **Page Components**: Receive theme prop for consistent styling

## Design Patterns

### Theme System Pattern
```javascript
// Theme detection and persistence
const [theme, setTheme] = useState(() => {
  const stored = localStorage.getItem("nn-theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
});

useEffect(() => {
  localStorage.setItem("nn-theme", theme);
}, [theme]);
```

### Dropdown Menu Pattern
```javascript
// Click-outside detection with cleanup
useEffect(() => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  }
  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
  }
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [open]);
```

### Framework Data Pattern
```javascript
// Centralized configuration object
export const frameworks = [
  {
    id: "manifold",
    name: "Noosphere Manifold",
    description: "...",
    icon: "🧠",
    status: "Active Framework",
    url: "https://github.com/...",
    route: "/docs/manifold"
  }
  // ... more frameworks
];
```

## Component Interaction Patterns

### Theme Propagation
- **Source**: App.jsx manages theme state
- **Flow**: theme prop passed to Navbar and all page components
- **Usage**: Conditional classes like `theme === 'dark' ? 'bg-orange-900' : 'bg-white'`

### Navigation Flow
- **Entry**: Home page with CTA buttons and framework grid
- **Dropdown**: Hover/click reveals documentation links with status badges
- **Routing**: React Router handles page transitions with theme persistence

### Data Flow
- **Static Data**: frameworks.js provides configuration for all components
- **Dynamic State**: Component-level state for UI interactions
- **Persistence**: localStorage for user preferences

## Critical Implementation Paths

### Theme System Implementation
1. App.jsx initializes theme state with localStorage and system preference fallback
2. Theme value passed as prop to all child components
3. Components use theme for conditional styling (colors, backgrounds, borders)
4. Theme toggle in Navbar updates state and persists to localStorage

### Routing Implementation
1. App.jsx wraps content in Router with basename for GitHub Pages
2. Routes defined for home and each documentation page
3. Navbar provides navigation links and dropdown menu
4. Home page provides alternative access through framework grid

### Starfield Animation Implementation
1. Starfield.jsx creates canvas element and gets 2D context
2. useEffect initializes star array and animation loop
3. requestAnimationFrame provides smooth 60fps animation
4. Canvas positioned as fixed background behind content

## Performance Optimizations

### Code Splitting
- **Route-based Splitting**: Each documentation page loads independently
- **Lazy Loading**: React Router supports code splitting at route level
- **Bundle Optimization**: Vite handles tree shaking and minification

### Rendering Optimizations
- **Conditional Rendering**: Theme-based class selection avoids unnecessary re-renders
- **Event Cleanup**: Proper event listener removal prevents memory leaks
- **Canvas Optimization**: Efficient star animation with minimal DOM manipulation

## Error Boundaries and Resilience

### Theme System Resilience
- **Fallback Values**: Default to 'dark' if localStorage unavailable
- **System Preference Detection**: Graceful fallback to user system preference
- **Invalid Values**: Type checking prevents invalid theme values

### Navigation Resilience
- **Route Validation**: React Router handles invalid routes gracefully
- **Link Validation**: All navigation links point to valid routes
- **External Links**: GitHub links open in new tabs with security attributes

## Testing and Quality Assurance

### Component Testing Patterns
- **Visual Testing**: Manual testing across themes and screen sizes
- **Interaction Testing**: Dropdown menus, theme toggle, navigation links
- **Responsive Testing**: Mobile, tablet, and desktop breakpoints

### Build System Validation
- **Development Server**: `npm run dev` for hot reloading
- **Production Build**: `npm run build` creates optimized bundle
- **Preview Testing**: `npm run preview` validates production build

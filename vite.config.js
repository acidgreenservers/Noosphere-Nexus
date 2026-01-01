import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set base to your repo name
// For example: base: '/noosphere-nexus/'
// Or use environment variable: base: process.env.VITE_BASE_PATH || '/'
export default defineConfig({
  plugins: [react()],
  base: '/Noosphere-Nexus/'
})

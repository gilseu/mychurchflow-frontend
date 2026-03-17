import { defineConfig } from 'vite'

export default defineConfig({
  root: 'Public',
  server: {
    port: 5173,
    open: true,
    strictPort: false
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})

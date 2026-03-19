import { defineConfig } from 'vite'

export default defineConfig({
  root: 'Public',
  server: {
    port: 5177,
    open: true,
    strictPort: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})

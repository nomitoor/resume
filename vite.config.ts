import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let faviconURL = '/favicon.svg'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: './public'
  },
})

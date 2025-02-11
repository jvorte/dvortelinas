import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  assetsInclude: ['**/*.JPG'], // Include JPG files as assets
  plugins: [
    tailwindcss(),
  ],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/atikahalsagoff.github.io/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Application/',
  plugins: [react()],
  server: {
    port: 8189,
    host: '0.0.0.0',
  },
})
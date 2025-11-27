import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Karthik-Marella-Portfolio/',   // 👈 IMPORTANT
  plugins: [react()],
})

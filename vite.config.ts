import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Do not expose deployment secrets, including existing VITE_* variables.
  envPrefix: [],
})

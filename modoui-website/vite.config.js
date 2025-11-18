import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ModoUI/',
  plugins: [
    react({
      jsxRuntime: 'automatic'
    })
  ],
})

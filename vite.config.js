import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
      port: 3001,  // your frontend port
      proxy: {
        '/api': {
          target: 'https://pair-up-z43e.onrender.com/api/jobs', // 👈 backend port
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api') // optional
        }
      }
  },
});
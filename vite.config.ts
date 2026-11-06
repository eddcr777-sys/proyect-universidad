import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,        // Escucha en 0.0.0.0 → accesible desde el móvil
    port: 5173,        // Puerto fijo para compartir la URL
    strictPort: true,  // Falla en lugar de buscar otro puerto
  },
  plugins: [react()],
})

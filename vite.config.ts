import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const precacheOfflinePlugin: Plugin = {
  name: 'precache-offline-assets',
  apply: 'build',
  enforce: 'post',
  generateBundle(_options, bundle) {
    const assets = Object.keys(bundle)
      .filter((fileName) => /\.(?:js|css|woff2?|ttf|otf|svg|png|jpe?g|webp|avif)$/i.test(fileName))
      .map((fileName) => `/${fileName}`)

    this.emitFile({
      type: 'asset',
      fileName: 'offline-assets.json',
      source: JSON.stringify(assets),
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,        // Escucha en 0.0.0.0 → accesible desde el móvil
    port: 5173,        // Puerto fijo para compartir la URL
    strictPort: true,  // Falla en lugar de buscar otro puerto
  },
  plugins: [react(), precacheOfflinePlugin],
})

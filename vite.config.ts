import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,        // Escucha en 0.0.0.0 → accesible desde el móvil
    port: 5173,        // Puerto fijo para compartir la URL
    strictPort: true,  // Falla en lugar de buscar otro puerto
  },
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Proyecto Ciberseguridad - C.E. Antonio Lemus Pérez',
        short_name: 'Ciberseguridad ALPS',
        description: 'Plataforma pedagógica de Ciberseguridad y Conciencia Digital con soporte completo sin conexión a internet.',
        theme_color: '#0F2C59',
        background_color: '#0F2C59',
        display: 'standalone',
        start_url: '/proyectos/ciberseguridad',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2,jpeg,jpg,ico}'],
        navigateFallback: '/index.html',
        navigateFallbackAllowlist: [/^\/.*$/],
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})

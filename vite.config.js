import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "name": "Auto Clicker",
        "short_name": "AutoClicker",
        "display": "standalone",
        "start_url": "./",
        "icons": [
          {
            "src": "icon.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icon.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      }
    })
  ],
  base: './'
})

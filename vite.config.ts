import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  root: './',
  plugins: [reactRefresh(), VitePWA()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
})

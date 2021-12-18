import { defineConfig } from "vite"
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig({
  root: "./",
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
})
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite'
import fs from 'fs'
import glob from 'fast-glob'

import { SupernovaResolver } from 'supernova/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    SupernovaResolver('supernova', 'admin', 'src/main.js')
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

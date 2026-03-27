import VueRouter from 'vue-router/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
  ],
})

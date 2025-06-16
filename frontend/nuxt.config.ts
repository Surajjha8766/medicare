// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // Nuxt 3 uses different syntax for route rules
  routeRules: {
    '/doctor': { meta: { hideHeaderFooter: true } },
    '/admin': { meta: { hideHeaderFooter: true } },
    '/dashboard': { meta: { hideHeaderFooter: true } },
    '/adminPanel': { ssr: false }, // Disable SSR for admin panel if needed
    '/login': { ssr: false } // Disable SSR for login page if needed
  },
  // Add runtime config for API endpoints
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api'
    }
  },
  // Pinia configuration
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  imports: {
    dirs: ['stores'],
  },
  // Add middleware configuration
  router: {
    middleware: ['auth']
  }
})
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
  }
})
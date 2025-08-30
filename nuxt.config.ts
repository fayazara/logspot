// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content', '@vueuse/nuxt'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark'
        },
      },
    },
    renderer: {
      anchorLinks: { h1: false, h2: false, h3: false, h4: false, h5: false, h6: false }
    }
  },


  fonts: {
    families: [
      {
        name: 'Geist',
        provider: 'google',
        weights: ['400', '500', '600', '700', '800']
      },
      {
        name: 'Geist Mono',
        provider: 'google',
        weights: ['400', '500', '600', '700', '800']
      }
    ]
  },
})
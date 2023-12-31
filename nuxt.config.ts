// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    "@pinia-plugin-persistedstate/nuxt",
    'nuxt-svgo',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],
  swiper: {
      modules: ['navigation', 'pagination', 'effect-creative' ]
  },
  piniaPersistedstate: {
    storage: 'localStorage',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/color.scss" as *;'
        }
      }
    }
  },
  googleFonts: {
    families: {
      'Noto+Sans+TC': [700, 900],
      'Noto+Serif+TC': [700, 900],
    }
  },
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  devtools: { enabled: true },
})

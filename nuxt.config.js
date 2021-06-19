module.exports = {
  cli: {
    badgeMessages: ['Created By: agungd3v']
  },

  head: {
    title: 'AsTalenTuT',
    titleTemplate: 'AsTalenTuT - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: '/fonts/feather.css' },
      { rel: 'stylesheet', href: '/fonts/fontawesome.css' },
      { rel: 'stylesheet', href: '/fonts/material.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { src: '/js/vendor-all.min.js', body: true },
      { src: '/js/plugins/bootstrap.min.js', body: true },
      { src: '/js/plugins/feather.min.js', body: true },
      { src: '/js/pcoded.min.js', body: true }
    ]
  },

  css: [],

  plugins: [
    { src: '~plugins/axios', ssr: true },
    { src: '~plugins/globalFunction', ssr: true },
    { src: '~plugins/localStorage', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  router: {
    middleware: ['init']
  },

  modules: [],

  build: {},

  axios: {
    baseURL: process.env.API_URL,
  }
}

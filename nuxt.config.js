const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fi',
    },
    title: 'Elisa Tervonen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:description', name: 'description', content: pkg.description },
      { hid: 'og:title', name: 'og:title', content: pkg.name },
      { hid: 'og:site', name: 'og:site', content: pkg.link },
      { hid: 'og:url', name: 'og:url', content: pkg.link },
      { hid: 'og:image', name: 'og:image', content: '/mie.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@elisa_tervonen' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@elisa_tervonen' },
      { hid: 'twitter:url', name: 'twitter:url', content: pkg.link }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    middleware: 'i18n'
  },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free/scss/fontawesome.scss',
    '@fortawesome/fontawesome-free/scss/regular.scss',
    '@fortawesome/fontawesome-free/scss/solid.scss',
    '@fortawesome/fontawesome-free/scss/brands.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'vue-scrollto',
    'vue-i18n'
  ],

  generate: {
    routes: ['/', '/en']
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-128579649-1'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

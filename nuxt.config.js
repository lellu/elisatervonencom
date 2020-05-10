const pkg = require('./package')

module.exports = {
  mode: 'universal',
  minimize: true,

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
      { hid: 'og:title', name: 'og:title', content: pkg.name },
      { hid: 'twitter:title', name: 'og:title', content: pkg.name },
      { hid: 'og:image', name: 'og:image', content: 'https://elisatervonen.com/mie.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:description', name: 'og:description', content: pkg.description },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:site', name: 'twitter:site', content: '@elisa_tervonen' },
      { hid: 'og:site', name: 'og:site', content: 'https://elisatervonen.com' },
      { hid: 'og:url', name: 'og:url', content: 'https://elisatervonen.com' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@elisa_tervonen' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'Pb_tr_6jk9IRXbPt2HVG5K8c7VkGk3wvXi4wdeUhtdo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://elisatervonen.com/favicon.ico' }
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
    //'vue-scrollto',
    '~/plugins/i18n.js'
  ],

  generate: {
    routes: [
      '/',
      '/en'
    ]
  },

  /*
  ** Nuxt.js modules
  */
 modules: [
     ['@nuxtjs/google-analytics', {
       id: 'UA-128579649-1'
     }],
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-128579649-1'
    }],
    googleAnalytics: {
      id: 'UA-128579649-1'
    }
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

export default {
  // `https://api.capstone.thisham.my.id/dashboards/${this.feature}`
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'C-Loyal - Loyalty Point Agency ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'C-Loyal merupakan aplikasi yang memberikan kemudahan untuk Anda bertransaksi dengan penawaran-penawaran yang kami berikan. Selain itu dengan melakukan transaksi pada C-Loyal Anda juga berhak mendapatkan reward berupa poin yang telah kami kalkulasikan sesuai dengan transaksi yang Anda lakukan sebelumnya, bahkan poin yang Anda kumpulkan dapat pula dimanfaatkan untuk membeli penawaran menarik lainnya dengan fitur tukar poin. ',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: 'C-Loyal' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://cloyal.xyz',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'C-Loyal - Loyalty Point Agency',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'C-Loyal merupakan aplikasi yang memberikan kemudahan untuk Anda bertransaksi dengan penawaran-penawaran yang kami berikan. Selain itu dengan melakukan transaksi pada C-Loyal Anda juga berhak mendapatkan reward berupa poin yang telah kami kalkulasikan sesuai dengan transaksi yang Anda lakukan sebelumnya, bahkan poin yang Anda kumpulkan dapat pula dimanfaatkan untuk membeli penawaran menarik lainnya dengan fitur tukar poin.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/Cloyal.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Cloyal.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  ssr: true,
  target: 'server',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    // proxy: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  storybook: {
    stories: [],
    webpackFinal(config) {
      return config
    },
  },
}

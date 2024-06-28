export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BitcoinVN Consulting',
    htmlAttrs: {
      lang: 'en'
    },
    __dangerouslyDisableSanitizers: ['script'],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BitcoinVN Consulting Service' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ],
    script: [
      // Gtag
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-5CM5QH3781', async: true },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
                  function gtag(){ dataLayer.push(arguments); };
                  gtag('js', new Date());
                  gtag('config', 'G-5CM5QH3781');`,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      // Freskdesk Helper widget
      { src: 'https://euc-widget.freshworks.com/widgets/103000007830.js', async: true },
      {
        innerHTML: `window.fwSettings={
          'widget_id':103000007830
          };
          !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() `,
        type: 'text/javascript',
        charset: 'utf-8'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  router: {
    base: '/consulting'
  }
}

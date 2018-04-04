module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '生物制药在线交易平台' },
      { hid: 'keywords', name: 'keywords', content: '博普云,生物制药,制药厂,设备,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** config the components cache
  */
  cache: {
    max: 1000,
    maxAge: 9000000
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** config the plugins
  */
  plugins: [
    '~plugins/element-ui.js'
  ],
  /*
  ** config the performance
  */
  performance: {
    gzip: true
  },

  /*
  ** loading css
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [ 'element-ui' ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
